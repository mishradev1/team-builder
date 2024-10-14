import React from 'react'
import ValorantHeader from './component/header'
import ValorantMainContent from './component/Content'
import ValorantNav from './component/Nav'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <ValorantHeader />
      <ValorantNav />
      <main className="flex-grow">
        <ValorantMainContent />
      </main>
    </div>
  )
}