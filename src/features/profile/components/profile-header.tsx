import { Button } from '@/components/ui/button';

export default function ProfileHeader() {
  return (
    <div className="w-full rounded-lg border border-border bg-card overflow-hidden font-sans">
      {/* Marble Banner Simulator */}
      <div
        className="h-48 w-full bg-gradient-to-r from-[#e5e2e0] via-[#f1edeb] to-[#e5e2e0] relative"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 75%, transparent 75%, transparent)',
        }}
      />

      {/* Profile info section */}
      <div className="px-8 pb-6 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center relative">
        {/* Overlay Avatar */}
        <div className="relative -mt-20 mb-4 sm:mb-0">
          <div className="h-28 w-28 rounded-full border-4 border-card bg-surface-dim overflow-hidden flex items-center justify-center text-foreground font-semibold">
            {/* Julian Rossi profile default picture */}
            <svg className="h-20 w-20 text-muted-foreground fill-current" viewBox="0 0 24 24" role="img" aria-label="Avatar por defecto">
              <title>Avatar por defecto de Julian Rossi</title>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* Name and Role */}
        <div className="flex-1 sm:ml-6 mb-4 sm:mb-0">
          <h2 className="font-bold text-xl text-foreground tracking-wide">Julian Rossi</h2>
          <p className="text-muted-foreground text-sm">Director Creativo</p>
        </div>

        {/* Save Changes button */}
        <Button className="bg-primary text-white hover:bg-primary-container font-semibold tracking-wider text-xs px-6 py-5 transition-colors uppercase" style={{ borderRadius: '8px' }}>
          Guardar Cambios
        </Button>
      </div>
    </div>
  );
}
