import { Loader2, Mic, MicOff, PhoneOff, Video, VideoOff } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useMediaDevices } from '@/features/calls/hooks/use-media-devices';
import { cn } from '@/lib/utils';

const MIC_ERROR_MESSAGES: Record<string, string> = {
  NotAllowedError: 'Permiso de micrófono denegado. Actívalo en la configuración del navegador para hablar.',
  NotFoundError: 'No se encontró un micrófono conectado a este dispositivo.',
  NotReadableError: 'No se pudo acceder al micrófono. Verifica que no esté en uso por otra aplicación.',
  UnknownError: 'No fue posible acceder a tu micrófono.',
};

const CAMERA_ERROR_MESSAGES: Record<string, string> = {
  NotAllowedError: 'Permiso de cámara denegado. Actívala en la configuración del navegador para transmitir video.',
  NotFoundError: 'No se encontró una cámara conectada a este dispositivo.',
  NotReadableError: 'No se pudo acceder a la cámara. Verifica que no esté en uso por otra aplicación.',
  UnknownError: 'No fue posible acceder a tu cámara.',
};

interface CallPanelProps {
  channelId: string;
  channelName: string;
}

function CallPanel({ channelId, channelName }: CallPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { stream, isConnected, isSpeaking, isMuted, isCameraOn, isRequestingMic, isRequestingCamera, micError, cameraError, join, leave, toggleMic, toggleCamera } = useMediaDevices();

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!isConnected) {
    return (
      <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Mic className="size-6" />
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-foreground">{channelName}</p>
          <p className="text-sm text-muted-foreground">Únete para escuchar. Activa tu micrófono cuando quieras hablar.</p>
        </div>
        <Button type="button" className="w-full" onClick={() => join(channelId)}>
          Unirse al canal
        </Button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">{channelName}</p>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className={cn('size-1.5 rounded-full', isSpeaking ? 'bg-secondary' : 'bg-muted-foreground/40')} />
          {isSpeaking ? 'Hablando' : 'Conectado'}
        </span>
      </div>

      <div
        className={cn(
          'relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border-2 bg-muted transition-colors',
          isSpeaking ? 'border-secondary' : 'border-transparent',
        )}
      >
        {isCameraOn ? (
          <video ref={videoRef} autoPlay muted playsInline className="h-full w-full object-cover" />
        ) : (
          <div className="flex size-16 items-center justify-center rounded-full bg-sidebar text-muted-foreground">
            <VideoOff className="size-6" />
          </div>
        )}
      </div>

      {(micError || cameraError) && (
        <div className="space-y-1 rounded-md bg-destructive/10 p-2 text-xs text-destructive">
          {micError && <p>{MIC_ERROR_MESSAGES[micError]}</p>}
          {cameraError && <p>{CAMERA_ERROR_MESSAGES[cameraError]}</p>}
        </div>
      )}

      <div className="flex items-center justify-center gap-2 rounded-full border border-border bg-background p-1.5">
        <Button
          type="button"
          variant={isMuted ? 'destructive' : 'outline'}
          size="icon"
          onClick={toggleMic}
          disabled={isRequestingMic}
          aria-label={isMuted ? 'Activar micrófono' : 'Silenciar micrófono'}
        >
          {isRequestingMic ? <Loader2 className="size-4 animate-spin" /> : isMuted ? <MicOff className="size-4" /> : <Mic className="size-4" />}
        </Button>
        <Button
          type="button"
          variant={isCameraOn ? 'outline' : 'ghost'}
          size="icon"
          onClick={toggleCamera}
          disabled={isRequestingCamera}
          aria-label={isCameraOn ? 'Desactivar cámara' : 'Activar cámara'}
        >
          {isRequestingCamera ? <Loader2 className="size-4 animate-spin" /> : isCameraOn ? <Video className="size-4" /> : <VideoOff className="size-4" />}
        </Button>
        <Button type="button" variant="destructive" size="icon" onClick={leave} aria-label="Salir del canal">
          <PhoneOff className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export { CallPanel };
