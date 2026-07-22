// src/store/call-store.ts
import { create } from 'zustand';

interface CallState {
  activeChannelId: string | null;
  isConnected: boolean;
  isMuted: boolean;
  isCameraOn: boolean;
  isSpeaking: boolean;
  setActiveChannel: (channelId: string | null) => void;
  setConnected: (isConnected: boolean) => void;
  setMuted: (isMuted: boolean) => void;
  setCameraOn: (isCameraOn: boolean) => void;
  setSpeaking: (isSpeaking: boolean) => void;
  reset: () => void;
}

const initialState = {
  activeChannelId: null,
  isConnected: false,
  isMuted: false,
  isCameraOn: false,
  isSpeaking: false,
} satisfies Omit<CallState, 'setActiveChannel' | 'setConnected' | 'setMuted' | 'setCameraOn' | 'setSpeaking' | 'reset'>;

export const useCallStore = create<CallState>((set) => ({
  ...initialState,
  setActiveChannel: (activeChannelId) => set({ activeChannelId }),
  setConnected: (isConnected) => set({ isConnected }),
  setMuted: (isMuted) => set({ isMuted }),
  setCameraOn: (isCameraOn) => set({ isCameraOn }),
  setSpeaking: (isSpeaking) => set({ isSpeaking }),
  reset: () => set(initialState),
}));
