import AccountStatus from './account-status';
import ProfileForm from './profile-form';
import ProfileHeader from './profile-header';

export default function ProfileView() {
  return (
    <div className="flex-1 overflow-y-auto bg-background p-8 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Main Header of the View */}
        <div className="mb-2">
          <h1 className="font-bold text-3xl text-foreground tracking-wide mb-1">Mi Perfil</h1>
          <p className="text-muted-foreground text-sm">Gestiona tu identidad pública y la configuración de tu cuenta profesional.</p>
        </div>

        {/* Block A: Header with Banner and Avatar */}
        <ProfileHeader />

        {/* Block B: Data Form */}
        <ProfileForm />

        {/* Block C: Account Status */}
        <AccountStatus />
      </div>
    </div>
  );
}
