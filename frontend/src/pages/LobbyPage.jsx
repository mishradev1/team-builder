import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    <div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729529714/lobby_hmamhg.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 p-4">
      <Link to='/' className="bg-black inline-block rounded p-1">
          <img 
            src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
            alt="Valorant Logo" 
            className="h-26 w-40 object-contain"
          />
        </Link>
        <nav className="flex justify-center space-x-4 mb-16">
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