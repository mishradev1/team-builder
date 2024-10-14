import React from 'react'

export default function ValorantHeader() {
  return (
    <header className="bg-red-900 text-black p-4 flex items-center">
      <div className="flex-shrink-0 mr-4">
        <div className="bg-black p-2 inline-block">
          <img 
            src="/placeholder.svg?height=40&width=120" 
            alt="Valorant Logo" 
            className="h-10 w-30 object-contain"
          />
          <div className="text-white text-sm font-bold mt-1">TEAM-BUILDER</div>
        </div>
      </div>
      <div className="flex-grow ml-8">
        <p className="text-s leading-tight">
          WELCOME TO THE ULTIMATE VALORANT TEAM BUILDER, WHERE STRATEGY MEETS SYNERGY! OUR PLATFORM EMPOWERS YOU TO **CRAFT YOUR DREAM TEAM** WITH PRECISION AND CREATIVITY. DIVE INTO A USER-FRIENDLY INTERFACE THAT LETS YOU HANDPICK EACH MEMBER OF YOUR SQUAD BASED ON THEIR UNIQUE ABILITIES AND YOUR TACTICAL PREFERENCES. WHETHER YOU'RE GEARING UP FOR COMPETITIVE PLAY OR JUST LOOKING TO DOMINATE CASUAL MATCHES, OUR CUSTOM TEAM BUILDER IS YOUR FIRST STEP TO VICTORY. ASSEMBLE YOUR TEAM, STRATEGIZE YOUR MOVES, AND BECOME A LEGEND IN THE VALORANT UNIVERSE!
        </p>
      </div>
    </header>
  )
}