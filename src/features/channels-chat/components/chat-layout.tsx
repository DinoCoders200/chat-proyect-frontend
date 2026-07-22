import { ChannelsSidebar } from './channels-sidebar';
import { ConversationPanel } from './conversation-panel';
import { MembersSidebar } from './members-sidebar';
import { ServerSidebar } from './server-sidebar';

export function ChatLayout() {
  return (
    <div className="grid h-full grid-cols-[72px_260px_minmax(0,1fr)_280px]">
      <ServerSidebar />

      <ChannelsSidebar />

      <ConversationPanel />

      <MembersSidebar />
    </div>
  );
}
