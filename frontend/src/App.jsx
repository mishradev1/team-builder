import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import LobbyPage from './pages/LobbyPage'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/lobby' element={<LobbyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App