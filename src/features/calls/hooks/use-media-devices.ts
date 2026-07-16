// src/features/calls/hooks/use-media-devices.ts
import { useCallback, useEffect, useRef, useState } from 'react';
import type { MediaPermissionError } from '@/features/calls/types/media-types';
import { useCallStore } from '@/store/call-store';

const SPEAKING_VOLUME_THRESHOLD = 15;
const ANALYSER_FFT_SIZE = 512;

interface UseMediaDevicesReturn {
  stream: MediaStream | null;
  isConnected: boolean;
  isSpeaking: boolean;
  isMuted: boolean;
  isCameraOn: boolean;
  isRequestingMic: boolean;
  isRequestingCamera: boolean;
  micError: MediaPermissionError | null;
  cameraError: MediaPermissionError | null;
  join: (channelId: string) => void;
  leave: () => void;
  toggleMic: () => Promise<void>;
  toggleCamera: () => Promise<void>;
}

function parsePermissionError(err: unknown): MediaPermissionError {
  if (err instanceof DOMException) {
    if (err.name === 'NotAllowedError') return 'NotAllowedError';
    if (err.name === 'NotFoundError') return 'NotFoundError';
    if (err.name === 'NotReadableError') return 'NotReadableError';
  }
  return 'UnknownError';
}

/**
 * Modo escucha por defecto: join() solo marca la conexion al canal, sin
 * pedir permisos. toggleMic/toggleCamera piden el permiso del dispositivo
 * la primera vez que se activan; despues solo hacen mute/unmute u on/off
 * sobre el track ya obtenido.
 */
export function useMediaDevices(): UseMediaDevicesReturn {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isRequestingMic, setIsRequestingMic] = useState(false);
  const [isRequestingCamera, setIsRequestingCamera] = useState(false);
  const [micError, setMicError] = useState<MediaPermissionError | null>(null);
  const [cameraError, setCameraError] = useState<MediaPermissionError | null>(null);

  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const isConnected = useCallStore((state) => state.isConnected);
  const isSpeaking = useCallStore((state) => state.isSpeaking);
  const setStoreConnected = useCallStore((state) => state.setConnected);
  const setStoreSpeaking = useCallStore((state) => state.setSpeaking);
  const setStoreMuted = useCallStore((state) => state.setMuted);
  const setStoreCameraOn = useCallStore((state) => state.setCameraOn);
  const setStoreActiveChannel = useCallStore((state) => state.setActiveChannel);
  const resetStore = useCallStore((state) => state.reset);

  const stopSpeakingDetection = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  }, []);

  const startSpeakingDetection = useCallback(
    (audioStream: MediaStream) => {
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = ANALYSER_FFT_SIZE;

      const source = audioContext.createMediaStreamSource(audioStream);
      source.connect(analyser);
      audioContextRef.current = audioContext;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const detect = () => {
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
        setStoreSpeaking(average > SPEAKING_VOLUME_THRESHOLD);
        animationFrameRef.current = requestAnimationFrame(detect);
      };

      detect();
    },
    [setStoreSpeaking],
  );

  const ensureStream = useCallback(() => {
    if (!streamRef.current) {
      streamRef.current = new MediaStream();
      setStream(streamRef.current);
    }
    return streamRef.current;
  }, []);

  const enableMicrophone = useCallback(async () => {
    setIsRequestingMic(true);
    setMicError(null);

    try {
      const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const target = ensureStream();
      micStream.getAudioTracks().forEach((track) => {
        target.addTrack(track);
      });
      setStream(target);
      setIsMuted(false);
      setStoreMuted(false);
      startSpeakingDetection(target);
    } catch (err) {
      setMicError(parsePermissionError(err));
    } finally {
      setIsRequestingMic(false);
    }
  }, [ensureStream, startSpeakingDetection, setStoreMuted]);

  const enableCamera = useCallback(async () => {
    setIsRequestingCamera(true);
    setCameraError(null);

    try {
      const camStream = await navigator.mediaDevices.getUserMedia({ video: true });
      const target = ensureStream();
      camStream.getVideoTracks().forEach((track) => {
        target.addTrack(track);
      });
      setStream(target);
      setIsCameraOn(true);
      setStoreCameraOn(true);
    } catch (err) {
      setCameraError(parsePermissionError(err));
    } finally {
      setIsRequestingCamera(false);
    }
  }, [ensureStream, setStoreCameraOn]);

  const toggleMic = useCallback(async () => {
    const audioTracks = streamRef.current?.getAudioTracks() ?? [];

    if (audioTracks.length === 0) {
      await enableMicrophone();
      return;
    }

    const nextMuted = !isMuted;
    audioTracks.forEach((track) => {
      track.enabled = !nextMuted;
    });
    setIsMuted(nextMuted);
    setStoreMuted(nextMuted);
  }, [isMuted, enableMicrophone, setStoreMuted]);

  const toggleCamera = useCallback(async () => {
    const videoTracks = streamRef.current?.getVideoTracks() ?? [];

    if (videoTracks.length === 0) {
      await enableCamera();
      return;
    }

    const nextCameraOn = !isCameraOn;
    videoTracks.forEach((track) => {
      track.enabled = nextCameraOn;
    });
    setIsCameraOn(nextCameraOn);
    setStoreCameraOn(nextCameraOn);
  }, [isCameraOn, enableCamera, setStoreCameraOn]);

  const join = useCallback(
    (channelId: string) => {
      setStoreConnected(true);
      setStoreActiveChannel(channelId);
    },
    [setStoreConnected, setStoreActiveChannel],
  );

  const leave = useCallback(() => {
    stopSpeakingDetection();
    streamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });
    streamRef.current = null;
    setStream(null);
    setIsMuted(false);
    setIsCameraOn(false);
    setMicError(null);
    setCameraError(null);
    resetStore();
  }, [stopSpeakingDetection, resetStore]);

  useEffect(() => {
    return () => {
      stopSpeakingDetection();
      streamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, [stopSpeakingDetection]);

  return {
    stream,
    isConnected,
    isSpeaking,
    isMuted,
    isCameraOn,
    isRequestingMic,
    isRequestingCamera,
    micError,
    cameraError,
    join,
    leave,
    toggleMic,
    toggleCamera,
  };
}
