import { useState } from 'react';
import ProfileView from '../components/profile-view';
import SettingsSidebar from '../components/settings-sidebar';

interface SettingsViewProps {
  onLogout?: () => void;
}

export default function SettingsView({ onLogout }: SettingsViewProps) {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex w-full min-h-screen bg-background">
      {/* 1. Internal Settings Sidebar Navigation */}
      <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />

      {/* 2. Main Content Area */}
      {activeTab === 'profile' ? (
        <ProfileView />
      ) : (
        <div className="flex-1 p-8 flex items-center justify-center text-muted-foreground font-sans bg-background">
          <span>Vista de {activeTab} (Maqueta en construcción)</span>
        </div>
      )}
    </div>
  );
}
