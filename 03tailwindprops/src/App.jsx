import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    city: "Seattle",
    country: "USA",
    years: 5
  }
  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-10 mb-4'>Tailwind test</h1>
      <Card userName="Aditya" myObj={obj} btnText="Click me"/>
      <Card userName="Nisha" btnText="Visit me"/>
      <Card/>
    </>
  )
}

export default App
