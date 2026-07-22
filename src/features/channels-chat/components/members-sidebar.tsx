import '../styles/members-sidebar.css';

const groups = [
  {
    title: 'Administradores',
    members: [
      {
        id: 1,
        name: 'William',
        status: 'online',
      },
      {
        id: 2,
        name: 'Carlos',
        status: 'busy',
      },
    ],
  },

  {
    title: 'Colaboradores',
    members: [
      {
        id: 3,
        name: 'Mateo',
        status: 'online',
      },
      {
        id: 4,
        name: 'Julian',
        status: 'away',
      },
      {
        id: 5,
        name: 'Sofía',
        status: 'offline',
      },
    ],
  },
];

export function MembersSidebar() {
  const totalMembers = groups.reduce((total, group) => total + group.members.length, 0);
  return (
    <aside className="members-sidebar">
      <header className="members-sidebar__header">
        <span>Miembros</span>
        <span>— {totalMembers}</span>
      </header>

      <div className="members-sidebar__body">
        {groups.map((group) => (
          <section key={group.title} className="members-sidebar__group">
            <h3 className="members-sidebar__title">
              <span>{group.title}</span>
              <span>— {group.members.length}</span>
            </h3>

            {group.members.map((member) => (
              <button type="button" key={member.id} className="members-sidebar__member">
                <div className="members-sidebar__avatar">
                  <img src={`https://i.pravatar.cc/60?u=${member.id}`} alt={member.name} />

                  <span className={`members-sidebar__status members-sidebar__status--${member.status}`} />
                </div>

                <span>{member.name}</span>
              </button>
            ))}
          </section>
        ))}
      </div>
    </aside>
  );
}
