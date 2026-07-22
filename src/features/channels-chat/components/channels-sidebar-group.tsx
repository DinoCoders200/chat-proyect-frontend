import { ChevronDown, ChevronRight } from 'lucide-react';
import { type ReactNode } from 'react';

interface SidebarGroupProps {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function SidebarGroup({ title, open, onToggle, children }: SidebarGroupProps) {
  return (
    <section className="channels-sidebar__group">
      <button className="channels-sidebar__section" onClick={onToggle} type="button">
        <div className="channels-sidebar__section-title">
          {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}

          <span>{title}</span>
        </div>
      </button>

      {open && <nav className="channels-sidebar__list">{children}</nav>}
    </section>
  );
}
