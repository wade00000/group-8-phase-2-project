import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10000)

  return (
    <>
      <div>
        <h1>Our Project</h1>
        {useEffect(()=>{
          const timerId = setTimeout(()=>{
            setCount((prevCount)=>prevCount-1)
          },1000)

          return () => clearTimeout(timerId)
        }

        ,[count])}
        <h2>{count}</h2>
      </div>
      
    </>
  )
}

export default App
