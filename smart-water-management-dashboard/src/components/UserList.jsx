function UserList({ users = [] }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h3 className="mb-4 text-lg font-semibold text-slate-800">👨‍👩‍👧 Family Members</h3>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-slate-700"
          >
            <span>{user}</span>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              user
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
