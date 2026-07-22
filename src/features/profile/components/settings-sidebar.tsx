import { Bell, Laptop, Lock, LogOut, Palette, User } from 'lucide-react';

interface SettingsSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout?: () => void;
}

export default function SettingsSidebar({ activeTab, setActiveTab, onLogout }: SettingsSidebarProps) {
  const userSettings = [
    { id: 'profile', label: 'Mi Perfil', icon: User },
    { id: 'appearance', label: 'Apariencia', icon: Palette },
    { id: 'notifications', label: 'Notificaciones', icon: Bell },
  ];

  const appSettings = [
    { id: 'devices', label: 'Dispositivos', icon: Laptop },
    { id: 'privacy', label: 'Privacidad', icon: Lock },
  ];

  return (
    <div className="w-60 border-r border-border bg-surface-container-low min-h-screen p-6 flex flex-col justify-between font-sans">
      <div className="flex flex-col gap-6">
        {/* Section: User Settings */}
        <div>
          <span className="block px-3 mb-2 text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">Ajustes de Usuario</span>
          <nav className="flex flex-col gap-1">
            {userSettings.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-all flex items-center gap-3 border ${
                    isActive ? 'bg-card border-border text-primary' : 'bg-transparent border-transparent text-on-surface-variant hover:bg-surface-container/50 hover:text-foreground'
                  }`}
                  style={{ borderRadius: '8px' }}
                >
                  <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant opacity-80'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Subtle Separator */}
        <hr className="border-t border-border opacity-50" />

        {/* Section: App Settings */}
        <div>
          <span className="block px-3 mb-2 text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">Ajustes de App</span>
          <nav className="flex flex-col gap-1">
            {appSettings.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-all flex items-center gap-3 border ${
                    isActive ? 'bg-card border-border text-primary' : 'bg-transparent border-transparent text-on-surface-variant hover:bg-surface-container/50 hover:text-foreground'
                  }`}
                  style={{ borderRadius: '8px' }}
                >
                  <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant opacity-80'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Logout Button */}
      <button
        type="button"
        onClick={onLogout}
        className="w-full text-left px-3 py-2 text-sm font-medium text-error hover:bg-error/10 transition-colors flex items-center gap-3"
        style={{ borderRadius: '8px' }}
      >
        <LogOut className="h-4 w-4" />
        Cerrar Sesión
      </button>
    </div>
  );
}
