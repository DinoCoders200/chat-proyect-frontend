import { useState } from 'react';

export default function ProfileForm() {
  const [name, setName] = useState('Julian Rossi');
  const [email, setEmail] = useState('julian.rossi@example.com');
  const [bio, setBio] = useState('Liderando equipos de diseño enfocados en la intersección entre tecnología y estética editorial.');

  return (
    <div className="w-full rounded-lg border border-border bg-card p-8 flex flex-col gap-6 font-sans">
      {/* Row: Public Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input: Public Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="public-name" className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase">
            Nombre Público
          </label>
          <input
            id="public-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            style={{ borderRadius: '8px' }}
          />
          <span className="text-xs text-muted-foreground">Cómo te verán otros miembros en el servidor.</span>
        </div>

        {/* Input: Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="profile-email" className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase">
            Correo Electrónico
          </label>
          <input
            id="profile-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            style={{ borderRadius: '8px' }}
          />
          <span className="text-xs text-muted-foreground">Utilizado para login y notificaciones de sistema.</span>
        </div>
      </div>

      {/* Input: Biography */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="profile-bio" className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase">
          Biografía
        </label>
        <textarea
          id="profile-bio"
          value={bio}
          onChange={(e) => setBio(e.target.value.slice(0, 300))}
          rows={4}
          className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
          style={{ borderRadius: '8px' }}
        />
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>Aparece en tu tarjeta de perfil.</span>
          <span>{bio.length}/300</span>
        </div>
      </div>
    </div>
  );
}
