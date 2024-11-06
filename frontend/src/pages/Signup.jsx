// import { useState } from 'react'
// import { User, Eye, EyeOff } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
// import { auth } from '../firebase'

// export default function SignupPage() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     dateOfBirth: '',
//     riotId: '',
//     tagline: '',
//     region: '',
//     password: '',
//   })
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError('')

//     // Email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//     // Validation checks
//     if (!emailRegex.test(formData.email)) {
//       setError('Please enter a valid email address')
//       return
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long')
//       return
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
//       await updateProfile(userCredential.user, {
//         displayName: `${formData.firstName} ${formData.lastName}`,
//       })

//       navigate('/') 
//     } catch (error) {
//       setError(error.message)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729418841/bg4_i1kg2f.png')"}}>
//       <div className="absolute top-4 left-4">
//         <Link to='/' className="bg-black inline-block rounded p-1">
//           <img 
//             src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
//             alt="Valorant Logo" 
//             className="h-26 w-40 object-contain"
//           />
//         </Link>
//       </div>
      
//       <div className="bg-green-900 bg-opacity-90 rounded-[70px] p-8 w-[500px] shadow-lg border-4 border-green-400 relative mt-2">
//         <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729449934/signup-bg_jz17r3.png')] bg-center bg-no-repeat opacity-10"></div>
//         <h2 className="text-2xl font-bold text-green-400 text-center mb-6">SIGN-UP:TEAM BUILDER</h2>
//         <div className="flex justify-center mb-6 relative">
//           <div className="">
//             <img src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729421226/signup_nwmotb.png" alt="Avatar" className="w-[120px] h-[120px] rounded-full border-4 border-white mb-2" />
//           </div>
//           <button className="absolute bottom-0 right-1/3 bg-green-500 rounded-full p-1">
//             <User className="text-green-900" size={16} />
//           </button>
//         </div>
        
//         <form onSubmit={handleSubmit} className="space-y-4 relative">
//           <div className="grid grid-cols-2 gap-4">
//             <input 
//               type="text" 
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="FIRST NAME" 
//               className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <input 
//               type="text" 
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="LAST NAME" 
//               className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
          
//           <input 
//             type="email" 
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="EMAIL" 
//             className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />
          
//           <input 
//             type="tel" 
//             placeholder="PHONE NUMBER" 
//             className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
          
//           <input 
//             type="date" 
//             placeholder="DATE OF BIRTH" 
//             className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
          
//           <div className="grid grid-cols-2 gap-4">
//             <input 
//               type="text" 
//               placeholder="RIOT ID" 
//               className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <input 
//               type="text" 
//               placeholder="#TAGLINE" 
//               className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
          
//           <select 
//             className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <option value="">SELECT YOUR REGION</option>
//             <option value="na">North America</option>
//             <option value="eu">Europe</option>
//             <option value="asia">Asia</option>
//           </select>
          
//           <div className="relative">
//             <input 
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="SET A PASSWORD" 
//               className="ring-2 ring-green-500 w-full py-2 pr-10 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-2.5 text-green-400"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
          
//           <div className="ml-7 mt-2 flex items-center">
//             <label htmlFor="terms" className="text-green-400 text-sm ml-9">I ACCEPT ALL THE TERMS AND CONDITIONS</label>
//             <input 
//               type="checkbox" 
//               id="terms" 
//               className="ml-5 mt-1"
//               required
//             />
//           </div>
          
//           {error && <p className="text-red-500 text-sm">{error}</p>}
          
//           <button 
//             type="submit" 
//             className="ml-[105px] w-[55%] py-2 px-4 bg-green-500 text-green-900 rounded-full font-bold hover:bg-green-400 transition duration-200"
//           >
//             SIGN-UP
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react'
import { User, Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../firebase'; // Ensure db is imported from your Firebase config
import { collection, addDoc } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore"; 

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    riotId: '',
    tagline: '',
    region: '',
    password: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      // Create a new user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      
      // Update user profile with displayName in Authentication
      await updateProfile(userCredential.user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      })

      // Save the user info in Firestore, excluding password
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        dateOfBirth: formData.dateOfBirth,
        riotId: formData.riotId,
        tagline: formData.tagline,
        region: formData.region,
        createdAt: new Date(),
    });

      // Navigate to the console page after successful signup
      navigate('/console') 
    } catch (error) {
      console.error('Firebase Signup Error:', error);
      setError(error.message);
    }
}

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729418841/bg4_i1kg2f.png')"}}>
      <div className="absolute top-4 left-4">
        <Link to='/' className="bg-black inline-block rounded p-1">
          <img 
            src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
            alt="Valorant Logo" 
            className="h-26 w-40 object-contain"
          />
        </Link>
      </div>
      
      <div className="bg-green-900 bg-opacity-90 rounded-[70px] p-8 w-[500px] shadow-lg border-4 border-green-400 relative mt-2">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729449934/signup-bg_jz17r3.png')] bg-center bg-no-repeat opacity-10"></div>
        <h2 className="text-2xl font-bold text-green-400 text-center mb-6">SIGN-UP:TEAM BUILDER</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 relative">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="FIRST NAME" 
              className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="LAST NAME" 
              className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL" 
            className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          
          <input 
            type="tel" 
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="PHONE NUMBER" 
            className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <input 
            type="date" 
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="DATE OF BIRTH" 
            className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              name="riotId"
              value={formData.riotId}
              onChange={handleChange}
              placeholder="RIOT ID" 
              className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input 
              type="text" 
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              placeholder="#TAGLINE" 
              className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <select 
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="ring-2 ring-green-500 w-full py-2 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">SELECT YOUR REGION</option>
            <option value="na">North America</option>
            <option value="eu">Europe</option>
            <option value="asia">Asia</option>
          </select>
          
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="SET A PASSWORD" 
              className="ring-2 ring-green-500 w-full py-2 pr-10 px-4 bg-green-800 bg-opacity-50 rounded-full text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
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
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button 
            type="submit" 
            className="ml-[105px] w-[55%] py-2 px-4 bg-green-500 text-green-900 rounded-full font-bold hover:bg-green-400 transition duration-200"
          >
            SIGN-UP
          </button>
        </form>
      </div>
    </div>
  )
}