import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => clearInterval(timer)
    
  }, [count])

  return (
    <>
    <h1 className='text-3xl bg-blue-700 p-5'>Welcome to React</h1>
    <Header/>
    </>
  )
}

export default App
