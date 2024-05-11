import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [character, setCharacter] = useState(false)
  const [number, setNumber] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "1234567890"
    if(character) str += `"~!@#$%^&*()[]{}:?><,.;'|`

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, character, number, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg shadow-md px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3 font-semibold text-2xl'>Password Generator</h1>

        <div className='flex shadow rounded-lg mb-4 overflow-hidden'>
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly
            //ref={pass}
           />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex gap-2 mb-4'>
          <div className='flex gap-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Range:{length}</label>
          </div>

          <div className='flex gap-1'>
            <input 
              type="checkbox"
              defaultChecked={number} 
              id="numberInput"
              onChange={() => {setNumber( (prev) => (!prev) )}}
            />
            <label>Number</label>
          </div>

          <div className='flex gap-1'>
            <input 
              type="checkbox" 
              defaultChecked={character} 
              id="characterInput"
              onChange={() => (setCharacter((prev) => (!prev)))} 
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
