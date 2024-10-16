import React from 'react'
import ValorantHeader from './component/header'
import ValorantMainContent from './component/Content'
import ValorantNav from './component/Nav'

function Home() {
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

export default Home