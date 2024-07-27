import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <span className='text-black' >Redux ToolKit</span>
      <AddTodo />
      <Todos />
    </>
  );
}
export default App
