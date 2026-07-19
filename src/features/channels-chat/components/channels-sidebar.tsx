import { Hash, Headphones, Mic, Volume2 } from 'lucide-react';
import { useState } from 'react';
import '../styles/channels-sidebar.css';
import { SidebarGroup } from './channels-sidebar-group';

const textChannels = ['general', 'anuncios', 'feedback'];

const voiceChannels = ['Sala de Reunión', 'Networking'];

const user = {
  name: 'Julian Rosales Fernandez',
  tag: '#0001',
  status: 'offline', // online | away | busy | offline
};

export function ChannelsSidebar() {
  const [textOpen, setTextOpen] = useState(true);
  const [voiceOpen, setVoiceOpen] = useState(true);

  return (
    <aside className="channels-sidebar">
      <header className="channels-sidebar__header">
        <h2>Echo Professional</h2>
      </header>
      <div className="channels-sidebar__content">
        <section className="channels-sidebar__group">
          <SidebarGroup title="CANALES DE TEXTO" open={textOpen} onToggle={() => setTextOpen(!textOpen)}>
            {textChannels.map((channel) => (
              <button type="button" key={channel} className={'channels-sidebar__item'}>
                <Hash size={18} />

                <span>{channel}</span>
              </button>
            ))}
          </SidebarGroup>
        </section>

        <section className="channels-sidebar__group">
          <SidebarGroup title="CANALES DE VOZ" open={voiceOpen} onToggle={() => setVoiceOpen(!voiceOpen)}>
            {voiceChannels.map((channel) => (
              <button type="button" key={channel} className="channels-sidebar__item">
                <Volume2 size={18} />

                <span>{channel}</span>
              </button>
            ))}
          </SidebarGroup>
        </section>
      </div>

      <footer className="channels-sidebar__footer">
        <div className="channels-sidebar__profile">
          <div className="channels-sidebar__avatar-wrapper">
            <img src="https://i.pravatar.cc/80" alt={user.name} className="channels-sidebar__avatar" />

            <span className={`channels-sidebar__status channels-sidebar__status--${user.status}`} />
          </div>
          <div>
            <div className="channels-sidebar__username-wrapper">
              <p className="channels-sidebar__username">{user.name}</p>

              <div className="channels-sidebar__tooltip">{user.name}</div>
            </div>
            <p className="channels-sidebar__tag" title={user.tag}>
              {user.tag}
            </p>
          </div>
        </div>

        <div className="channels-sidebar__actions">
          <button type="button">
            <Mic size={18} />
          </button>

          <button type="button">
            <Headphones size={18} />
          </button>
        </div>
      </footer>
    </aside>
  );
}
