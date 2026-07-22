import { Bell, CircleHelp, Hash, Pin, Search, Users } from 'lucide-react';

export function ConversationHeader() {
  return (
    <header className="conversation-header">
      <div className="conversation-header__left">
        <Hash size={22} />

        <div>
          <h2>general</h2>

          <p>Canal principal de comunicación</p>
        </div>
      </div>

      <div className="conversation-header__right">
        <button type="button">
          <Bell size={20} />
        </button>

        <button type="button">
          <Pin size={20} />
        </button>

        <button type="button">
          <Users size={20} />
        </button>

        <div className="conversation-header__search">
          <input type="text" placeholder="Buscar..." />

          <Search size={18} />
        </div>

        <button type="button">
          <CircleHelp size={20} />
        </button>
      </div>
    </header>
  );
}
