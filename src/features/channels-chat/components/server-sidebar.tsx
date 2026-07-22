import '../styles/server-sidebar.css';

import { BadgeHelp, BriefcaseBusiness, CircleUserRound, Compass, Grid2x2, MessageSquareText, Plus, Settings } from 'lucide-react';

export function ServerSidebar() {
  return (
    <aside className="server-sidebar">
      <div className="server-sidebar__top">
        {/* Logo */}
        <button className="server-sidebar__logo" type="button">
          EX
        </button>

        {/* Servidores */}
        <nav className="server-sidebar__nav">
          <button className="server-sidebar__icon" type="button">
            <Grid2x2 size={22} />
          </button>

          <button className="server-sidebar__icon" type="button">
            <MessageSquareText size={22} />
          </button>

          <button className="server-sidebar__icon" type="button">
            <Compass size={22} />
          </button>

          <button className="server-sidebar__icon" type="button">
            <BadgeHelp size={22} />
          </button>

          <button className="server-sidebar__icon" type="button">
            <BriefcaseBusiness size={22} />
          </button>

          <div className="server-sidebar__divider" />

          <button className="server-sidebar__add" type="button">
            <Plus size={24} />
          </button>
        </nav>
      </div>

      {/* Parte inferior */}
      <div className="server-sidebar__bottom">
        <button className="server-sidebar__bottom-icon" type="button">
          <CircleUserRound size={22} />
        </button>

        <button className="server-sidebar__bottom-icon" type="button">
          <Settings size={22} />
        </button>
      </div>
    </aside>
  );
}
