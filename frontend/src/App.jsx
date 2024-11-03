import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import LobbyPage from './pages/LobbyPage'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import RoleInfo from './pages/RoleInfo'
import TeamBuilderPage from './pages/Console'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-black text-white">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/role-info" element={<RoleInfo />} />
              <Route path="/console" element={<TeamBuilderPage />} />
              <Route path='/lobby' element={
                <PrivateRoute>
                  <LobbyPage />
                </PrivateRoute>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
