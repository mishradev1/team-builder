import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import JettImage from '../assets/tbjett.png' 
import pinkbg from '../assets/pink-bg.webp' 
import leftpanel from '../assets/leftpanel.png'
import rightpanel from '../assets/rightpanel.png'

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

export default function TeamBuilderPage() {
  
  const [activeDropdown, setActiveDropdown] = React.useState(null)

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730634884/console-bg_hefktn.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>

      {/* Top-left logo */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/" className="bg-black inline-block rounded p-1">
          <img
            src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png"
            alt="Valorant Logo"
            className="h-26 w-40 object-contain"
          />
        </Link>
      </div>

      {/* Jett Image Overlapping Component */}
      <img
        src={JettImage}
        alt="Jett"
        className="absolute left-500 z-20 -ml-20 h-[350px] object-cover"
        style={{ top: '76.5%', transform: 'translateY(-50%) translateX(245%)' }}
      />

      {/* Centered Component with Image and Dropdown Boxes */}
      <div className="flex items-center justify-center min-h-screen">
        {/* Outer container with flex layout */}
        <div className="flex items-center border-[10px] border-black rounded-lg w-[1400px] h-[450px] bg-transparent">
          
          {/* Left Panel */}
          <div className="flex flex-col items-center justify-center w-[150px] h-full border-r-4 border-black gap-6">
            <img src={leftpanel} className='h-[500px]' />
          </div>

          {/* Center Section with Image and Dropdowns */}
          <div className="flex-grow h-full flex flex-col items-center justify-center relative">
            <img
              src={pinkbg}
              alt="Pink Background"
              className="w-[1150px] h-[425px] object-cover"
            />
            {/* Dropdowns and Search Bar */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="grid grid-cols-4 gap-x-10 gap-y-6 mb-4">
              <div className="relative w-[220px]">
              <select className="p-3 border-8 border-black font-bold rounded-xl bg-transparent text-black appearance-none w-full">
              <option>Current Rank</option>
                     <option>Iron 1</option>
                     <option>Iron 2</option>
                     <option>Iron 3</option>
                     <option>Bronze 1</option>
                     <option>Bronze 2</option>
                     <option>Bronze 3</option>
                     <option>Silver 1</option>
                     <option>Silver 2</option>
                     <option>Silver 3</option>
                     <option>Gold 1</option>
                     <option>Gold 2</option>
                     <option>Gold 3</option>
                     <option>Platinum 1</option>
                     <option>Platinum 2</option>
                     <option>Platinum 3</option>
                     <option>Diamond 1</option>
                     <option>Diamond 2</option>
                     <option>Diamond 3</option>
                     <option>Ascendant 1</option>
                     <option>Ascendant 2</option>
                     <option>Ascendant 3</option>
                     <option>Immortal 1</option>
                     <option>Immortal 2</option>
                     <option>Immortal 3</option>
                     <option>Radiant</option>
                   </select>
                   <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl font-bold pointer-events-none" />
                 </div>
                <div className="relative w-[220px]">
                  <select className="p-3 border-8 border-black font-bold rounded-xl bg-transparent text-black appearance-none w-full">
                    <option>Peak Rank</option>
                    <option>Iron 1</option>
                    <option>Iron 2</option>
                    <option>Iron 3</option>
                    <option>Bronze 1</option>
                    <option>Bronze 2</option>
                    <option>Bronze 3</option>
                    <option>Silver 1</option>
                    <option>Silver 2</option>
                    <option>Silver 3</option>
                    <option>Gold 1</option>
                    <option>Gold 2</option>
                    <option>Gold 3</option>
                    <option>Platinum 1</option>
                    <option>Platinum 2</option>
                    <option>Platinum 3</option>
                    <option>Diamond 1</option>
                    <option>Diamond 2</option>
                    <option>Diamond 3</option>
                    <option>Ascendant 1</option>
                    <option>Ascendant 2</option>
                    <option>Ascendant 3</option>
                    <option>Immortal 1</option>
                    <option>Immortal 2</option>
                    <option>Immortal 3</option>
                    <option>Radiant</option>
                  </select>
                  <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl font-bold pointer-events-none" />
                </div>
                <div className="relative w-[220px]">
                  <select className="p-3 border-8 border-black font-bold rounded-xl bg-transparent text-black appearance-none w-full">
                    <option>Main Agent</option>
                    <option>Brimstone</option>
                    <option>Viper</option>
                    <option>Omen</option>
                    <option>Killjoy</option>
                    <option>Cypher</option>
                    <option>Sova</option>
                    <option>Sage</option>
                    <option>Phoenix</option>
                    <option>Jett</option>
                    <option>Reyna</option>
                    <option>Raze</option>
                    <option>Breach</option>
                    <option>Skye</option>
                    <option>Yoru</option>
                    <option>Astra</option>
                    <option>KAY/O</option>
                    <option>Chamber</option>
                    <option>Neon</option>
                    <option>Fade</option>
                    <option>Harbor</option>
                    <option>Gekko</option>
                    <option>Deadlock</option>
                  </select>
                  <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl font-bold pointer-events-none" />
                </div>
                {/* Text Input for Level */}
                <div className="relative w-[220px]">
                  <input
                    type="text"
                    placeholder="Level"
                    className="p-3 border-8 border-black font-bold rounded-xl bg-transparent text-black placeholder-black w-full"
                  />
                </div>
              </div>

              {/* Center-aligned Player Name and Hashtag as Text Inputs */}
              <div className="grid grid-cols-2 gap-x-10 mb-4 justify-center">
                <div className="relative w-[220px]">
                  <input
                    type="text"
                    placeholder="Player Name"
                    className="p-3 border-8 border-black font-bold rounded-xl bg-transparent text-black placeholder-black w-full"
                  />
                </div>
                <div className="relative w-[220px]">
                  <input
                    type="text"
                    placeholder="Hashtag"
                    className="p-3 border-8 border-black font-bold rounded-xl bg-transparent text-black placeholder-black w-full"
                  />
                </div>
              </div>

              {/* Country as Text Input and Dropdowns for Server and Language */}
              <div className="grid grid-cols-3 gap-x-10 gap-y-6 mb-4">
                <div className="relative w-[220px]">
                  <input
                    type="text"
                    placeholder="Country"
                    className="p-3 border-8 border-black font-bold rounded-xl bg-transparent text-black placeholder-black w-full"
                  />
                </div>
                <div className="relative w-[220px]">
                  <select className="p-3 border-8 border-black font-bold rounded-xl bg-transparent text-black appearance-none w-full">
                    <option>Server</option>
                    <option>North America (NA)</option>
                    <option>Europe (EU)</option>
                    <option>Asia Pacific (AP)</option>
                    <option>Latin America (LATAM)</option>
                    <option>Brazil (BR)</option>
                    <option>Korea (KR)</option>
                    <option>Japan (JP)</option>
                    <option>Middle East (ME)</option>
                    <option>South Asia (SA)</option>
                  </select>
                  <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl font-bold pointer-events-none" />
                </div>
                <div className="relative w-[220px]">
                  <select className="p-3 border-8 font-bold border-black rounded-xl bg-transparent text-black appearance-none w-full">
                    <option>Language</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Espanol</option>
                  </select>
                  <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl font-bold pointer-events-none" />
                </div>
              </div>

              {/* Combined Search Button */}
              <Link to="/lobby" className="flex items-center mt-4 gap-2">
                <button className="flex items-center justify-center p-3 bg-black text-white font-bold rounded-full w-[300px]">
                  <FiSearch size={20} className="mr-2" />
                  Search
                </button>
              </Link>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col items-center justify-center w-[150px] h-full border-l-4 border-black gap-6">
            <img src={rightpanel} className='h-[650px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

