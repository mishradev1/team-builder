import React from 'react'
import Header from "../components/Header";
import ValorantMainContent from '../components/Content'
import ValorantNav from '../components/Nav'

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

