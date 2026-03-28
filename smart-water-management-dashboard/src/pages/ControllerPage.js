import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'

function ControllerPage({ flats, onTapChange }) {
  const { id } = useParams()

  const flat = useMemo(() => flats.find((item) => item.flatId === id), [flats, id])

  if (!flat) {
    return (
      <Card className="mx-auto max-w-lg text-center">
        <p className="text-lg font-semibold text-slate-900">Controller not found</p>
        <p className="mt-2 text-slate-600">
          The controller ID <span className="font-medium">{id}</span> does not exist in the
          current demo data.
        </p>
        <Link
          to="/admin"
          className="mt-5 inline-flex rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition hover:bg-sky-700"
        >
          Back to Admin
        </Link>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-sky-700 to-cyan-600 p-6 text-white shadow-lg">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-100">Controller Monitoring</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">📷 Controller {flat.controllerId}</h1>
        <p className="mt-2 text-sky-100">
          Simulated QR code routing: scanning opens
          <span className="ml-1 rounded bg-white/20 px-2 py-1 font-medium text-white">
            /controller/{flat.flatId}
          </span>
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Controller ID
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{flat.controllerId}</p>
          <p className="mt-4 text-sm text-slate-600">Flat: {flat.flatId}</p>
        </Card>

        <Card>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Water Usage
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">💧 {flat.usage}</p>
          <p className="mt-4 text-sm text-slate-600">Tap state: {flat.isTapOn ? 'ON' : 'OFF'}</p>
        </Card>

        <Card>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Status</p>
          <div className="mt-3 inline-flex rounded-full px-3 py-1 text-sm font-semibold">
            <span
              className={
                flat.status === 'Active'
                  ? 'rounded-full bg-emerald-100 px-3 py-1 text-emerald-700'
                  : 'rounded-full bg-rose-100 px-3 py-1 text-rose-700'
              }
            >
              {flat.status === 'Active' ? '🟢 Active' : '🔴 Leakage Detected'}
            </span>
          </div>
          {flat.alerts.length > 0 && (
            <ul className="mt-4 space-y-2">
              {flat.alerts.map((alert) => (
                <li
                  key={alert}
                  className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700"
                >
                  ⚠️ {alert}
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Controller Actions
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onTapChange(flat.flatId, true)}
              className="rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700"
            >
              🚰 ON
            </button>
            <button
              type="button"
              onClick={() => onTapChange(flat.flatId, false)}
              className="rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white transition hover:bg-rose-700"
            >
              🚰 OFF
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            This screen can be opened from Admin cards or QR simulation links.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default ControllerPage
