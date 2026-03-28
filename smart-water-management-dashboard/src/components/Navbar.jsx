import { Link, NavLink } from 'react-router-dom'

const navBaseClass =
  'rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100'

const navActiveClass = 'bg-slate-900 text-white hover:bg-slate-800'

function Navbar({ session, onLogout }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-blue-100 text-xl">
            💧
          </span>
          <div>
            <Link to="/" className="text-base font-semibold text-slate-900">
              Smart Water Management
            </Link>
            <p className="text-xs text-slate-500">IoT + Shared Flat Access</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navBaseClass} ${isActive ? navActiveClass : 'text-slate-600'}`
            }
          >
            Login
          </NavLink>

          {session?.role === 'admin' && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `${navBaseClass} ${isActive ? navActiveClass : 'text-slate-600'}`
              }
            >
              Admin
            </NavLink>
          )}

          {session?.role === 'flat' && (
            <NavLink
              to="/flat"
              className={({ isActive }) =>
                `${navBaseClass} ${isActive ? navActiveClass : 'text-slate-600'}`
              }
            >
              Flat
            </NavLink>
          )}

          {session && (
            <button
              type="button"
              onClick={onLogout}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
