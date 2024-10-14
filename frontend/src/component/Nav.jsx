import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function ValorantNav() {
  const navItems = ['TRACKER', 'ARSENAL', 'MORE', 'DOWNLOAD']
  const authItems = ['LOGIN', 'SIGNUP']

  return (
    <nav className="bg-gray-300 bg-opacity-50 p-2 flex justify-between items-center">
      <div className="flex space-x-2">
        {navItems.map((item) => (
          <button
            key={item}
            className="bg-red-600 text-black px-4 py-2 rounded-full flex items-center text-sm font-bold hover:bg-red-700 transition-colors duration-200"
          >
            {item}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {authItems.map((item) => (
          <button
            key={item}
            className="bg-red-600 text-black px-4 py-2 rounded-full flex items-center text-sm font-bold hover:bg-red-700 transition-colors duration-200"
          >
            {item}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        ))}
      </div>
    </nav>
  )
}