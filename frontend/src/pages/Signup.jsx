import React, { useState } from 'react'
import { User, Eye, EyeOff } from 'lucide-react'

export default function SignupPage() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729418841/bg4_i1kg2f.png')"}}>
      <div className="absolute top-4 left-4">
        <div className="bg-black inline-block rounded">
          <img 
            src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
            alt="Valorant Logo" 
            className="h-26 w-40 object-contain"
          />
        </div>
      </div>
      
      <div className="bg-green-900 bg-opacity-90 rounded-[70px] p-8 w-[500px] shadow-lg border-4 border-green-400 relative mt-9">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729421385/signup-bg_mx7art.png')] bg-center bg-no-repeat opacity-10"></div>
        <h2 className="text-2xl font-bold text-green-400 text-center mb-6">SIGN-UP:TEAM BUILDER</h2>
        <div className="flex justify-center mb-6 relative">
          <div className="">
            <img src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729421226/signup_nwmotb.png" alt="Avatar" className="w-[120px] h-[120px] rounded-full border-4 border-white mb-2" />
          </div>
          <button className="absolute bottom-0 right-1/3 bg-green-500 rounded-full p-1">
            <User className="text-green-900" size={16} />
          </button>
        </div>
        
        <form className="space-y-4 relative">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="FIRST NAME" 
              className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input 
              type="text" 
              placeholder="LAST NAME" 
              className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <input 
            type="email" 
            placeholder="EMAIL" 
            className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <input 
            type="tel" 
            placeholder="PHONE NUMBER" 
            className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <input 
            type="date" 
            placeholder="DATE OF BIRTH" 
            className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="RIOT ID" 
              className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input 
              type="text" 
              placeholder="#TAGLINE" 
              className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <select 
            className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">SELECT YOUR REGION</option>
            <option value="na">North America</option>
            <option value="eu">Europe</option>
            <option value="asia">Asia</option>
          </select>
          
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="SET A PASSWORD" 
              className="ring-2 ring-green-500 w-full py-2 pr-10 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-green-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <div className="ml-7 mt-2 flex items-center">
            <label htmlFor="terms" className="text-green-400 text-sm ml-9">I ACCEPT ALL THE TERMS AND CONDITIONS</label>
            <input 
              type="checkbox" 
              id="terms" 
              className="ml-5 mt-1"
            />
          </div>
          
          <button 
            type="submit" 
            className="ml-[105px] w-[55%] py-2 px-4 bg-green-500 text-green-900 rounded-full font-bold hover:bg-green-400 transition duration-200"
          >
            SIGN-UP
          </button>

          <div className="mt-5 ml-32">
            <button className="bg-blue-500 text-white px-4 py-2 flex items-center border-2 border-white hover:bg-blue-700 h-10 w-48 text-sm">
              <img src="https://as1.ftcdn.net/v2/jpg/03/88/07/84/1000_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg" alt="Google logo" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
        </div>

        </form>
      </div>
    </div>
  )
}