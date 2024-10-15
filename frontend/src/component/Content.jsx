import React from 'react'
import { Search } from 'lucide-react'

export default function ValorantMainContent() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{backgroundImage: "url('frontend/src/assets/Valorant.png')"}}>
      <div className="bg-black bg-opacity-70 min-h-screen p-6 text-white flex flex-col items-center">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-2xl font-bold mb-4">SEARCH FOR A PLAYER</h2>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="VALORANT ID"
              className="w-1/4 bg-white text-black p-2 rounded-l-md mr-4"
              aria-label="Valorant ID"
            />
            <input
              type="text"
              placeholder="HASH TAG"
              className="w-1/4 bg-white text-black p-2"
              aria-label="Hash Tag"
            />
            <button className="bg-red-600 p-2 rounded-r-md" aria-label="Search">
              <Search className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full">
              SIGN IN WITH RIOT ID
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 flex items-center border-2 border-white">
              <img src="https://as1.ftcdn.net/v2/jpg/03/88/07/84/1000_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg" alt="Google logo" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1728946258/card_i4im3y.png" 
                alt="Esports section" 
                className="w-full h-auto rounded-lg"
              />
              {/* <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded text-sm font-bold">
                Esports
              </div> */}
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md mb-4 z-10 border-yellow-500 border-4">
                TEAM BUILDER
              </button>
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1728946258/card_i4im3y.png" 
                  alt="Lineups section" 
                  className="w-full h-auto rounded-lg"
                />
                {/* <div className="absolute top-8 left-2 bg-red-600 px-2 py-1 rounded text-sm font-bold">
                  Lineups
                </div> */}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1728946258/card_i4im3y.png" 
                alt="Insights section" 
                className="w-full h-auto rounded-lg"
              />
              {/* <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded text-sm font-bold">
                Insights
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}