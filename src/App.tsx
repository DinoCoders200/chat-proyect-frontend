import { CallPanel } from '@/features/calls/components/call-panel';

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background text-primary font-sans antialiased">
      <CallPanel channelId="test-1" channelName="Sala de Estrategia" />
    </div>
  );
}

export default App;
