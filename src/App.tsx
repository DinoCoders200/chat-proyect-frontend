import { useEffect, useState } from 'react';
import { LoginForm } from '@/components/login-form';
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

  // Default redirect from root to /login
  useEffect(() => {
    if (currentPath === '/') {
      window.history.replaceState({}, '', '/login');
      setCurrentPath('/login');
    }
  }, [currentPath]);

  // Conditional Routing for Login
  if (currentPath === '/login' || currentPath === '/auth/login') {
    const handleLoginSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      navigateTo('/settings');
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

        {/* Clean Official Decorative Column */}
        <div className="relative hidden bg-muted lg:block">
          <img src="/placeholder.svg" alt="Placeholder" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
        </div>
      </div>
    );
  }

  // Render Connected Local Settings View
  if (currentPath === '/settings') {
    return <SettingsView onLogout={() => navigateTo('/login')} />;
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-background text-primary font-sans antialiased gap-6">
      <h1 className="text-4xl font-bold tracking-wide">Chat Project Frontend</h1>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => navigateTo('/login')}
          className="px-6 py-3 rounded border border-border bg-card text-foreground font-semibold hover:bg-surface-container transition-colors"
          style={{ borderRadius: '8px' }}
        >
          Ir a Login
        </button>
      </div>
    </div>
  );
}

export default App;
