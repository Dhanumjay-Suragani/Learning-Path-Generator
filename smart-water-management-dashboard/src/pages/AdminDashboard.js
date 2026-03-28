import { Link } from 'react-router-dom'
import Card from '../components/Card'

const statusStyles = {
  Active: 'bg-emerald-100 text-emerald-700',
  'Leakage Detected': 'bg-red-100 text-red-700',
}

function AdminDashboard({ flats }) {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-sm text-slate-600">
          Monitor all flats, device health, and potential water issues in one view.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {flats.map((flat) => (
          <Card key={flat.flatId} className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">Flat ID</p>
                <h3 className="text-xl font-semibold text-slate-900">{flat.flatId}</h3>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  statusStyles[flat.status] ?? 'bg-slate-100 text-slate-700'
                }`}
              >
                {flat.status === 'Active' ? '🟢 Active' : '🔴 Leakage Detected'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-sky-50 p-3">
                <p className="text-xs text-slate-500">Water Usage</p>
                <p className="text-lg font-semibold text-slate-900">💧 {flat.usage}L</p>
              </div>
              <div className="rounded-xl bg-indigo-50 p-3">
                <p className="text-xs text-slate-500">Users</p>
                <p className="text-lg font-semibold text-slate-900">👨‍👩‍👧 {flat.users.length}</p>
              </div>
            </div>

            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
              <p>
                Controller ID: <span className="font-medium text-slate-900">{flat.controllerId}</span>
              </p>
              QR simulation link:{' '}
              <span className="font-medium text-slate-900">/controller/{flat.flatId}</span>
            </div>

            <Link
              to={`/controller/${flat.flatId}`}
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              View Details
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default AdminDashboard
