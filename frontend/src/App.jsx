import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import LobbyPage from './pages/LobbyPage'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/lobby' element={<LobbyPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App