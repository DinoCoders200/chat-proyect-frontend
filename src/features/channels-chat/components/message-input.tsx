import { CirclePlus, Gift, Images, Smile } from 'lucide-react';

export function MessageInput() {
  return (
    <footer className="message-input">
      <button type="button">
        <CirclePlus size={22} />
      </button>

      <input type="text" placeholder="Enviar mensaje a #general" />

      <div className="message-input__actions">
        <button type="button">
          <Gift size={20} />
        </button>

        <button type="button">
          <Images size={20} />
        </button>

        <button type="button">
          <Smile size={20} />
        </button>
      </div>
    </footer>
  );
}
