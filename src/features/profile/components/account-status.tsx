import { Button } from '@/components/ui/button';

export default function AccountStatus() {
  return (
    <div className="w-full rounded-lg border border-border bg-card p-8 flex flex-col gap-6 font-sans">
      <h3 className="font-bold text-lg text-foreground tracking-wide">Estado de la Cuenta</h3>

      <div className="flex flex-col gap-4">
        {/* Two-Factor Authentication */}
        <div className="flex justify-between items-center py-3 border-b border-border/50">
          <div>
            <h4 className="font-semibold text-sm text-foreground">Verificación en dos pasos</h4>
            <p className="text-xs text-muted-foreground">Protección adicional para tu acceso.</p>
          </div>
          <Button
            type="button"
            variant="outline"
            className="border-border text-foreground hover:bg-surface-container/50 font-semibold tracking-wider text-xs px-4 uppercase"
            style={{ borderRadius: '8px' }}
          >
            Activar
          </Button>
        </div>

        {/* Subscription Status */}
        <div className="flex justify-between items-center py-3">
          <div>
            <h4 className="font-semibold text-sm text-foreground">Estado de Suscripción</h4>
            <p className="text-xs text-muted-foreground">Actualmente en el plan Professional.</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-secondary-container text-secondary" style={{ borderRadius: '12px' }}>
            Activo
          </span>
        </div>
      </div>
    </div>
  );
}
