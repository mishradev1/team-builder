import React from 'react'
import Header from "../component/Header";
import ValorantMainContent from '../component/Content'
import ValorantNav from '../component/Nav'

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <ValorantNav />
      <main className="flex-grow">
        <ValorantMainContent />
      </main>
    </div>
  )
}

