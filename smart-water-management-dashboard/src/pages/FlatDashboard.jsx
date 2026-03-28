import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'
import UserList from '../components/UserList.jsx'

const statusBadgeClass = {
  Active: 'bg-emerald-100 text-emerald-700',
  'Leakage Detected': 'bg-red-100 text-red-700',
}

function FlatDashboard({ session, flat, onTapChange }) {
  if (!flat || !session) {
    return (
      <Card>
        <p className="text-sm text-slate-600">
          Flat details are unavailable. Please log in again.
        </p>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Welcome, {session.userName} 👋
        </h1>
        <p className="text-sm text-slate-600">
          Smart control panel for <strong>{flat.flatId}</strong>
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card className="xl:col-span-1">
          <p className="text-xs uppercase tracking-wide text-slate-500">Flat ID</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{flat.flatId}</p>
        </Card>

        <Card className="xl:col-span-1">
          <p className="text-xs uppercase tracking-wide text-slate-500">💧 Total Water Usage</p>
          <p className="mt-2 text-2xl font-semibold text-blue-600">{flat.usage}L</p>
        </Card>

        <Card className="xl:col-span-1">
          <p className="text-xs uppercase tracking-wide text-slate-500">🚰 Tap Status</p>
          <p
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
              flat.isTapOn ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {flat.isTapOn ? 'ON' : 'OFF'}
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
              onClick={() => onTapChange(flat.flatId, true)}
            >
              Turn ON Tap
            </button>
            <button
              type="button"
              className="rounded-lg bg-slate-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              onClick={() => onTapChange(flat.flatId, false)}
            >
              Turn OFF Tap
            </button>
          </div>
        </Card>

        <Card className="xl:col-span-1">
          <p className="text-xs uppercase tracking-wide text-slate-500">Connection Status</p>
          <p
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
              statusBadgeClass[flat.status]
            }`}
          >
            {flat.status}
          </p>
          <p className="mt-3 text-xs text-slate-500">Controller: {flat.controllerId}</p>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">⚠️ Alerts</h2>
          <div className="mt-4 space-y-2">
            {flat.alerts.length > 0 ? (
              flat.alerts.map((alert) => (
                <div
                  key={alert}
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    alert.toLowerCase().includes('leakage')
                      ? 'border-red-200 bg-red-50 text-red-700'
                      : 'border-amber-200 bg-amber-50 text-amber-700'
                  }`}
                >
                  <span className="font-medium">{alert}</span>
                </div>
              ))
            ) : (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                No alerts. Water flow is normal.
              </div>
            )}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Need hardware controls? Open dedicated controller page.
          </p>
          <Link
            to={`/controller/${flat.flatId}`}
            className="mt-3 inline-flex rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Open Controller Page
          </Link>
        </Card>

        <UserList users={flat.users} />
      </div>
    </div>
  )
}

export default FlatDashboard
