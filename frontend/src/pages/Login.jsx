import React, { useState } from 'react'
import { User, Lock, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1728972096/bg1_u5arhl.jpg')"}}>
      <div className="absolute top-4 left-4">
        <div className="bg-black inline-block rounded">
          <img 
            src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
            alt="Valorant Logo" 
            className="h-26 w-40 object-contain"
          />
        </div>
      </div>
      
      <div className="bg-yellow-400 rounded-[70px] p-8 w-[400px] shadow-lg border-4 border-[#e47b31]">
        <div className="flex flex-col items-center mb-5">
        <h2 className="text-[20px] font-bold text-[#e47b31] text-center mb-4">SIGN-IN-TEAM BUILDER</h2>
          <img 
            src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729414596/profilepic_naokey.png" 
            alt="Avatar" 
            className="w-[120px] h-[120px] rounded-full border-4 border-white mb-2"
          />
        </div>
        
        <form className="space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full py-2 px-4 bg-yellow-300 rounded-full text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <User className="absolute right-3 top-2.5 text-gray-600" size={20} />
          </div>
          
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Password" 
              className="w-full py-2 px-4 bg-yellow-300 rounded-full text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <button 
            type="submit" 
            className=" ml-24 w-[50%] py-2 px-4 bg-[#e47b31] text-white rounded-full font-bold hover:bg-red-600 transition duration-200 text-base"
          >
            LOGIN
          </button>
        </form>
        
        <div className="mt-4 ml-20">
            <button className="bg-blue-500 text-white px-4 py-2 flex items-center border-2 border-white hover:bg-blue-700 h-10 w-48 text-sm">
              <img src="https://as1.ftcdn.net/v2/jpg/03/88/07/84/1000_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg" alt="Google logo" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
        </div>
      </div>
    </div>
  )
}