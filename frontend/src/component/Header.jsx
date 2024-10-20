import React from 'react'

export default function Header() {
  return (
    <header className="bg-cover bg-center text-black p-4 flex items-center" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729155085/bg5_wamxl3.jpg')"}}>
      <div className="flex-shrink-0 mr-4">
        <div className="bg-black p-0 inline-block">
          <img 
            src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
            alt="Valorant Logo" 
            className="h-22 w-40"
          />
        </div>
      </div>
      <div className="flex-grow ml-8">
        <p className="text-s leading-tight font-bold" style={{ fontFamily: "'Courier New', monospace"}}>
          WELCOME TO THE ULTIMATE VALORANT TEAM BUILDER, WHERE STRATEGY MEETS SYNERGY! OUR PLATFORM EMPOWERS YOU TO **CRAFT YOUR DREAM TEAM** WITH PRECISION AND CREATIVITY. DIVE INTO A USER-FRIENDLY INTERFACE THAT LETS YOU HANDPICK EACH MEMBER OF YOUR SQUAD BASED ON THEIR UNIQUE ABILITIES AND YOUR TACTICAL PREFERENCES. WHETHER YOU'RE GEARING UP FOR COMPETITIVE PLAY OR JUST LOOKING TO DOMINATE CASUAL MATCHES, OUR CUSTOM TEAM BUILDER IS YOUR FIRST STEP TO VICTORY. ASSEMBLE YOUR TEAM, STRATEGIZE YOUR MOVES, AND BECOME A LEGEND IN THE VALORANT UNIVERSE!
        </p>
      </div>
    </header>
  )
}