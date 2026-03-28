import { useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AdminDashboard from './pages/AdminDashboard'
import ControllerPage from './pages/ControllerPage'
import FlatDashboard from './pages/FlatDashboard'
import Login from './pages/Login'
import { initialFlatsData } from './data/flatsData'

const SESSION_STORAGE_KEY = 'smart-water-session'

const getInitialSession = () => {
  const stored = localStorage.getItem(SESSION_STORAGE_KEY)
  if (!stored) return null

  try {
    return JSON.parse(stored)
  } catch {
    return null
  }
}

function App() {
  const [session, setSession] = useState(getInitialSession)
  const [flats, setFlats] = useState(initialFlatsData)

  const flatForCurrentUser = useMemo(() => {
    if (!session || session.role !== 'flat') return null
    return flats.find((item) => item.flatId === session.flatId) ?? null
  }, [flats, session])

  const saveSession = (nextSession) => {
    setSession(nextSession)
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(nextSession))
  }

  const handleAdminLogin = () => {
    saveSession({
      role: 'admin',
      name: 'Admin',
    })
  }

  const handleFlatLogin = ({ flatId, userName }) => {
    saveSession({
      role: 'flat',
      flatId,
      userName,
    })
  }

  const handleLogout = () => {
    setSession(null)
    localStorage.removeItem(SESSION_STORAGE_KEY)
  }

  const updateTapState = (flatId, isTapOn) => {
    setFlats((currentFlats) =>
      currentFlats.map((flat) =>
        flat.flatId === flatId
          ? {
              ...flat,
              isTapOn,
            }
          : flat,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar session={session} onLogout={handleLogout} />

      <main className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <Routes>
          <Route
            path="/"
            element={
              <Login
                flats={flats}
                onAdminLogin={handleAdminLogin}
                onFlatLogin={handleFlatLogin}
              />
            }
          />
          <Route
            path="/admin"
            element={
              session?.role === 'admin' ? (
                <AdminDashboard flats={flats} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/flat"
            element={
              session?.role === 'flat' ? (
                <FlatDashboard
                  session={session}
                  flat={flatForCurrentUser}
                  onTapChange={updateTapState}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/controller/:id"
            element={<ControllerPage flats={flats} onTapChange={updateTapState} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
