import { useState } from 'react'
// import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='font-bold text-2xl text-black text-center'>United States & Canada</h1>
    </>
  )
}

export default App
