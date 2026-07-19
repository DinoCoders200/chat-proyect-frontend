import '../styles/conversation-panel.css';

import { ConversationHeader } from './conversation-header';
import { MessageInput } from './message-input';

const messages = [
  {
    id: 1,
    author: 'Mateo Design',
    time: 'Hoy a las 10:45',
    avatar: 'https://i.pravatar.cc/60?img=12',
    message: 'He actualizado los assets del sistema de diseño en el Figma central. Por favor revisen la sección de iconografía dorada.',
  },
  {
    id: 2,
    author: 'Sofia Cloud',
    time: 'Hoy a las 11:02',
    avatar: 'https://i.pravatar.cc/60?img=32',
    message: '¡Genial Mateo! Los iconos nuevos tienen una precisión increíble. Ya los estoy implementando.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900',
  },
  {
    id: 3,
    author: 'Admin Root',
    time: 'Hace un momento',
    avatar: '',
    initials: 'AR',
    message: 'Recordatorio: Reunión de sincronización a las 15:00 en Sala de Reunión.',
  },
];

export function ConversationPanel() {
  return (
    <main className="conversation-panel">
      <ConversationHeader />

      <div className="conversation-panel__body">
        {messages.map((message, index) => (
          <article key={message.id} className="conversation-panel__message">
            {message.avatar ? (
              <img src={message.avatar} className="conversation-panel__avatar" alt={message.author} />
            ) : (
              <div className="conversation-panel__avatar conversation-panel__avatar--initials">{message.initials}</div>
            )}

            <div className="conversation-panel__content">
              <div className="conversation-panel__meta">
                <strong>{message.author}</strong>

                <span>{message.time}</span>
              </div>

              <p>{message.message}</p>

              {message.image && <img src={message.image} className="conversation-panel__attachment" alt="" />}

              {index === 1 && <div className="conversation-panel__divider">Nuevos mensajes</div>}
            </div>
          </article>
        ))}
      </div>

      <MessageInput />
    </main>
  );
}
