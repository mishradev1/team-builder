import React from 'react'
import { ArrowRight } from 'lucide-react'

const PlayerCard = ({ image, level, username, color, className }) => (
  <div className={`rounded-lg overflow-hidden border-2 border-${color}-500 relative ${className}`}>
    <img src={image} alt={username} className="w-full h-full object-cover" />
    <div className="absolute top-2 left-2 bg-black bg-opacity-10 px-2 py-1 rounded">
      <span className="text-white text-xs font-bold">LEVEL</span>
      <img src="/placeholder.svg?height=20&width=20" alt="Level" className="inline-block ml-1 w-5 h-5" />
    </div>
    <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-10 px-2 py-1 rounded">
      <span className="text-white text-sm font-bold">{username}</span>
    </div>
  </div>
)

export default function LobbyPage() {
  const navItems = ['TRACKER', 'ARSENAL', 'MORE', 'DOWNLOAD']
  const players = [
    { image: '/placeholder.svg?height=200&width=150', level: 1, username: 'Player1', color: 'pink' },
    { image: '/placeholder.svg?height=200&width=150', level: 1, username: 'Player2', color: 'blue' },
    { image: '/placeholder.svg?height=200&width=150', level: 1, username: 'Player3', color: 'green' },
    { image: '/placeholder.svg?height=200&width=150', level: 1, username: 'Player4', color: 'purple' },
    { image: '/placeholder.svg?height=200&width=150', level: 1, username: 'Player5', color: 'orange' },
  ]

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=60&width=180" alt="Valorant Logo" className="h-15 w-45" />
            <span className="text-white text-xl font-bold ml-2">TEAM-BUILDER</span>
          </div>
        </div>
        <nav className="flex justify-center space-x-4 mb-8">
          {navItems.map((item) => (
            <button
              key={item}
              className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center text-sm font-bold hover:bg-red-700 transition-colors duration-200"
            >
              {item}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          ))}
        </nav>
        <div className="relative">
          <img src="/placeholder.svg?height=600&width=400" alt="Central Character" className="mx-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 max-w-5xl w-full">
              <PlayerCard {...players[0]} className="col-start-1 row-start-1" />
              <PlayerCard {...players[1]} className="col-start-1 row-start-3" />
              <PlayerCard {...players[2]} className="col-start-2 row-start-4" />
              <PlayerCard {...players[3]} className="col-start-3 row-start-1" />
              <PlayerCard {...players[4]} className="col-start-3 row-start-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}