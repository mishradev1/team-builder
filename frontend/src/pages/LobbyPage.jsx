// import React from 'react'
// import { ArrowRight } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const PlayerCard = ({ image, level, username, color, className }) => (
//   <div className={`rounded-lg overflow-hidden relative ${className}`}>
//     <img src={image} alt={username} className="w-[150px] h-[150px] object-cover" />
//     <div className="absolute top-2 left-2 bg-black bg-opacity-0 px-2 py-1 rounded">
//       <span className="text-white text-xs font-bold flex justify-center ml-4">LEVEL</span>
//       {/* <img src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png" alt="Level" className="inline-block ml-1 w-5 h-5" /> */}
//     </div>
//     <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-0 px-2 py-1 rounded ml-4">
//       <span className="text-white text-sm font-bold">{username}</span>
//     </div>
//   </div>
// )

// export default function LobbyPage() {
//   const navItems = ['TRACKER', 'ARSENAL', 'MORE', 'DOWNLOAD']
//   const players = [
//     { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729532856/img1_jiui9q.png', level: 1, username: 'USERNAME', color: 'pink' },
//     { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729533050/img2_oom9xn.png', level: 1, username: 'USERNAME', color: 'blue' },
//     { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png', level: 1, username: 'USERNAME', color: 'green' },
//     { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729533050/img4_x3zi2n.png', level: 1, username: 'USERNAME', color: 'purple' },
//     { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729533050/img5_nsszls.png', level: 1, username: 'USERNAME', color: 'orange' },
//   ]

//   return (
//     <div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729529714/lobby_hmamhg.png')"}}>
//       <div className="absolute inset-0 bg-black bg-opacity-5"></div>
//       <div className="relative z-10 p-4">
//         <Link to='/' className="bg-black inline-block rounded p-1">
//           <img 
//             src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
//             alt="Valorant Logo" 
//             className="h-26 w-40 object-contain"
//           />
//         </Link>
//         <nav className="flex justify-center space-x-4 mb-8">
//           {navItems.map((item) => (
//             <button
//               key={item}
//               className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center text-sm font-bold hover:bg-red-700 transition-colors duration-200"
//             >
//               {item}
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </button>
//           ))}
//         </nav>
//         <div className="relative max-w-3xl mx-72">
//           {/* <img src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530636/silver_hduzwi.png" alt="Central Character" className="mx-auto w-1/2" /> */}
//           <div className="absolute flex items-center justify-center p-9">
//             <div className="grid grid-cols-12 gap-20">
//               <PlayerCard {...players[0]} className="col-start-1 col-span-4 row-start-1 row-span-2 z-20" />
//               <PlayerCard {...players[1]} className="col-start-3 col-span-4 row-start-2 row-span-2 z-20" />
//               <PlayerCard {...players[2]} className="col-start-5 col-span-4 row-start-3 row-span-2 z-30" />
//               <PlayerCard {...players[3]} className="col-start-7 col-span-4 row-start-2 row-span-2 z-20" />
//               <PlayerCard {...players[4]} className="col-start-9 col-span-4 row-start-1 row-span-2 z-10" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LobbyPage() {
  const navItems = ['TRACKER', 'ARSENAL', 'MORE', 'DOWNLOAD']

    const players = [
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729532856/img1_jiui9q.png', level: 'level', username: 'USERNAME', Rate:'1.4', PreferredWeapon: 'Vandal', PreferredRole: 'Duelist', PreferredAgent:'Reyna'},
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729533050/img2_oom9xn.png', level: 'level', username: 'USERNAME', Rate:'1.3', PreferredWeapon: 'Phantom', PreferredRole: 'Duelist', PreferredAgent:'Neon' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png', level: 'level', username: 'USERNAME', Rate:'1.5', PreferredWeapon: 'Vandal', PreferredRole: 'Duelist', PreferredAgent:'Flying Jaat' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729533050/img4_x3zi2n.png', level: 'level', username: 'USERNAME', Rate:'1.6', PreferredWeapon: 'Guardian', PreferredRole: 'Controller', PreferredAgent:'Omen' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729533050/img5_nsszls.png', level: 'level', username: 'USERNAME', Rate:'1.7', PreferredWeapon: 'Vandal', PreferredRole: 'Duelist', PreferredAgent:'Raze' },
  ]

  return (
    <div className="min-h-screen bg-center relative" style={{ backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729529714/lobby_hmamhg.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      {/* Container for logo and nav bar */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          {/* Valorant Logo on the left side */}
          <Link to='/' className="bg-black inline-block rounded p-2">
            <img 
              src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
              alt="Valorant Logo" 
              className="h-24 w-40 object-contain"
            />
          </Link>

          {/* Centered Navigation Bar */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="bg-red-600 text-black px-6 py-3 rounded-full flex items-center text-lg font-bold hover:bg-red-800 transition-colors duration-200"
              >
                {item}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            ))}
          </nav>
        </div>

        {/* Character Images Section */}
        <div className="relative max-w-6xl mx-auto mt-10">
          <div className="group relative inline-block" style={{ bottom: '-750px', left: '42.5%', position: 'absolute' }}>
            <div className="transition-transform duration-300 group-hover:translate-y-[-190px]">
              {/* <span className="text-white text-sm font-bold flex justify-center ml-2">LEVEL</span> */}
              <img
                src={players[2].image}
                alt="Jett"
                className="w-[200px] h-auto"
              />
              {/* <span className="text-white text-sm font-bold ml-[68px]">{players[0].username}</span> */}

              {/* Hidden Buttons (Visible on Hover) */}
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">H/S Rate: {players[2].Rate}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Weapon: {players[2].PreferredWeapon}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Role: {players[2].PreferredRole}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Agent: {players[2].PreferredAgent}  </button>
              </div>
            </div>
          </div>
          <div className="group relative inline-block" style={{ left: '-65px', bottom: '-510px', position: 'absolute' }}>
            {/* Container that moves on hover */}
            <div className="transition-transform duration-300 group-hover:translate-y-[-30px]">
              {/* Reyna Image */}
              <img
                src={players[0].image}
                alt="Reyna"
                className="w-[190px] h-auto"
              />

              {/* Hidden Buttons (Visible on Hover) */}
              <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">H/S Rate: {players[0].Rate}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Weapon: {players[0].PreferredWeapon}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Role: {players[0].PreferredRole}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Agent: {players[0].PreferredAgent}  </button>
              </div>
            </div>
          </div>
          <div className="group relative inline-block" style={{ left: '200px', bottom: '-650px', position: 'absolute' }}>
            {/* Container that moves on hover */}
            <div className="transition-transform duration-300 group-hover:translate-y-[-75px]">
              {/* Neon Image */}
              <img
                src={players[1].image}
                alt="Neon"
                className="w-[250px] h-auto"
              />

              {/* Hidden Buttons (Visible on Hover) */}
              <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">H/S Rate: {players[1].Rate}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Weapon: {players[1].PreferredWeapon}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Role: {players[1].PreferredRole}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Agent: {players[1].PreferredAgent}  </button>
              </div>
            </div>
          </div>
          <div className="group relative inline-block" style={{ left: '760px', bottom: '-650px', position: 'absolute' }}>
            {/* Container that moves on hover */}
            <div className="transition-transform duration-300 group-hover:translate-y-[-75px]">
              {/* Omen Image */}
              <img
                src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729533050/img4_x3zi2n.png"
                alt="Omen"
                className="w-[220px] h-auto"
              />

              {/* Hidden Buttons (Visible on Hover) */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">H/S Rate: {players[3].Rate}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Weapon: {players[3].PreferredWeapon}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Role: {players[3].PreferredRole}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Agent: {players[3].PreferredAgent}  </button>
              </div>
            </div>
          </div>
          <div className="group relative inline-block" style={{ left: '1050px', bottom: '-510px', position: 'absolute' }}>
            {/* Container that moves on hover */}
            <div className="transition-transform duration-300 group-hover:translate-y-[-30px]">
              {/* Raze Image */}
              <img
                src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729533050/img5_nsszls.png"
                alt="Raze"
                className="w-[200px] h-auto"
              />

              {/* Hidden Buttons (Visible on Hover) */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">H/S Rate: {players[4].Rate}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Weapon: {players[4].PreferredWeapon}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Role: {players[4].PreferredRole}</button>
                <button className="bg-red-600 text-white py-2 px-4 w-48 font-bold">Preferred Agent: {players[4].PreferredAgent}  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}