import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

function Login({ flats, onAdminLogin, onFlatLogin }) {
  const navigate = useNavigate()
  const [flatId, setFlatId] = useState('Flat101')
  const [userName, setUserName] = useState('Dad')
  const [qrFlatId, setQrFlatId] = useState('Flat101')
  const [error, setError] = useState('')

  const handleAdmin = () => {
    onAdminLogin()
    navigate('/admin')
  }

  const handleFlatSubmit = (event) => {
    event.preventDefault()
    const normalizedFlatId = flatId.trim()
    const normalizedUserName = userName.trim()

    if (!normalizedFlatId || !normalizedUserName) {
      setError('Please enter Flat ID and User Name.')
      return
    }

    const matchingFlat = flats.find(
      (flat) => flat.flatId.toLowerCase() === normalizedFlatId.toLowerCase(),
    )

    if (!matchingFlat) {
      setError('Flat not found. Try Flat101 or Flat102.')
      return
    }

    const isUserInFlat = matchingFlat.users.some(
      (user) => user.toLowerCase() === normalizedUserName.toLowerCase(),
    )

    if (!isUserInFlat) {
      setError(`User "${normalizedUserName}" is not in ${matchingFlat.flatId}.`)
      return
    }

    onFlatLogin({
      flatId: matchingFlat.flatId,
      userName: matchingFlat.users.find(
        (user) => user.toLowerCase() === normalizedUserName.toLowerCase(),
      ),
    })

    setError('')
    navigate('/flat')
  }

  return (
    <section className="grid min-h-[75vh] place-items-center">
      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
        <Card>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">
                Smart Water Management
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">Welcome Back</h1>
              <p className="mt-2 text-sm text-slate-600">
                Track water usage, detect leaks quickly, and control your tap with one clean
                dashboard.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAdmin}
              className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              🧑‍💼 Admin Login
            </button>

            <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-sm text-cyan-900">
              <p className="font-semibold">Demo Tip</p>
              <p>Use Flat101 + Dad or Flat102 + User1 to login as a family member.</p>
            </div>
          </div>
        </Card>

        <Card>
          <form onSubmit={handleFlatSubmit} className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">🏠 Flat Login</h2>
              <p className="mt-2 text-sm text-slate-600">
                Multiple users can share the same flat dashboard using Flat ID + User Name.
              </p>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Flat ID</span>
              <input
                type="text"
                value={flatId}
                onChange={(event) => setFlatId(event.target.value)}
                placeholder="Flat101"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-cyan-500 transition focus:ring-2"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">User Name</span>
              <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                placeholder="Dad"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-cyan-500 transition focus:ring-2"
              />
            </label>

            {error ? (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-500"
            >
              Login
            </button>
          </form>
        </Card>

        <Card className="md:col-span-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">📷 QR Controller Access (Simulation)</h2>
            <p className="text-sm text-slate-600">
              Every flat has a unique controller route. In production this is opened by scanning the
              QR code sticker near the water controller.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={qrFlatId}
                onChange={(event) => setQrFlatId(event.target.value)}
                placeholder="Flat101"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-cyan-500 transition focus:ring-2 sm:max-w-xs"
              />
              <button
                type="button"
                onClick={() => navigate(`/controller/${qrFlatId.trim() || 'Flat101'}`)}
                className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                Simulate QR Scan
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Example route: <span className="font-medium">/controller/Flat101</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Login
