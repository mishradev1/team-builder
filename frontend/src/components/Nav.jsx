import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

const DropdownMenu = ({ items }) => (
  <div className="absolute top-full left-0 w-full bg-red-700 rounded-b-md shadow-lg z-10 mt-1 overflow-hidden">
    {items.map((item, index) => (
      <button
        key={index}
        className="block w-full text-left px-4 py-3 text-white hover:bg-red-800 transition-colors duration-200 border-b border-red-700 last:border-b-0"
        style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}
      >
        {item}
      </button>
    ))}
  </div>
)

export default function ValorantNav() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    { name: 'TRACKER', items: ['Leaderboard', 'Premier', 'LFG'], path: '' },
    { name: 'ARSENAL', items: ['Arsenal'], path: '/arsenal' },
    { name: 'MORE', items: ['News', 'E-Sports', 'Support'], path: ['https://playvalorant.com/en-gb/news/','https://valorantesports.com/en-GB/','https://support-valorant.riotgames.com/hc/en-us/'] },
    { name: 'DOWNLOAD', items: ['Download Valorant'], path: 'https://playvalorant.com/en-gb/download/' },
    { name: 'ROLES', items: ['ROLE-INFO'], path: '/role-info' },
  ]
  const authItems = [
    { name: 'LOGIN', path: '/login' },
    { name: 'SIGNUP', path: '/signup' }
  ]

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <nav className="p-2 flex justify-between items-center h-35" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1728988709/bg_jsot39.png')"}}>
      <div className="flex space-x-4">
        {navItems.map((item, index) => (
          <Link key={item.name} className="relative" to={item.path}>
            <button
              onClick={() => handleDropdownToggle(index)}
              className="w-40 h-10 bg-red-700 text-black px-4 py-2 rounded-full flex items-center justify-between text-sm font-bold hover:bg-red-800 transition-colors duration-200"
              style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}
            >
              {item.name}
              {item.items.length > 0 ? (
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'transform rotate-180' : ''}`} />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </button>
            {activeDropdown === index && item.items.length > 0 && (
              <DropdownMenu items={item.items} />
            )}
          </Link>
        ))}
      </div>
      <div className="flex space-x-4 mr-4">
        {authItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="w-28 h-10 bg-red-700 text-white px-4 py-2 rounded-full flex items-center justify-between text-sm font-bold hover:bg-red-800 transition-colors duration-200"
            style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}
          >
            {item.name}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </nav>
  )
}