import {useState} from 'react';
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(10); //Here 0 is default value for counter variable this value we can set any

  let addValue = () => { 
    setCounter(counter++)
  }

  return (
    <>
      <h1>Unites States of America & Canada</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
