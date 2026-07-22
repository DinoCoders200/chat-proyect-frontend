import { useEffect, useState } from 'react';
import { LoginForm } from '@/components/login-form';
import { ChannelsChatPage } from '@/features/channels-chat/channels-chat-page';
import SettingsView from '@/features/profile/routes/settings-view';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Redirect from root / to /login by default for initial auth flow, or keep it if desired.
  // In a normal app we can let '/' render the chat or redirect.
  useEffect(() => {
    if (currentPath === '/') {
      window.history.replaceState({}, '', '/login');
      setCurrentPath('/login');
    }
  }, [currentPath]);

  // Login Route
  if (currentPath === '/login' || currentPath === '/auth/login') {
    const handleLoginSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      navigateTo('/chat');
    };

    return (
      <div className="grid min-h-screen lg:grid-cols-2 font-sans bg-background" onSubmit={handleLoginSubmit}>
        {/* Form Column */}
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>

        {/* Clean Decorative Column */}
        <div className="relative hidden bg-muted lg:block">
          <img src="/placeholder.svg" alt="Placeholder" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
        </div>
      </div>
    );
  }

  // Settings / Profile Route
  if (currentPath === '/settings') {
    return <SettingsView onLogout={() => navigateTo('/login')} />;
  }

  // Chat/Channels Route
  if (currentPath === '/chat') {
    return <ChannelsChatPage />;
  }

  // Fallback
  return <ChannelsChatPage />;
}

export default App;
