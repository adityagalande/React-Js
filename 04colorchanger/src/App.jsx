import {useState} from 'react';

function App() {

  const [color, setColor] = useState("olive");

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='fixed flex flex-wrap justify-center bg-white shadow-lg py-2 rounded-3xl gap-3 px-5'>

          <button onClick={() => (setColor("Purple"))} className='outline-none px-4 bg-violet-500 rounded-full'>Purple</button>
          <button onClick={() => (setColor("Red"))} className='outline-none px-4 bg-red-600 rounded-full'>Red</button>
          <button onClick={() => (setColor("blue"))} className='outline-none px-4 bg-blue-500 rounded-full'>Blue</button>
          <button onClick={() => (setColor("orange"))} className='outline-none px-4 bg-orange-500 rounded-full'>Orange</button>
          <button onClick={() => (setColor("green"))} className='outline-none px-4 bg-teal-500 rounded-full'>Green</button>
          <button onClick={() => (setColor("yellow"))} className='outline-none px-4 bg-yellow-400 rounded-full'>Yellow</button>
          <button onClick={() => (setColor("pink"))} className='outline-none px-4 bg-red-200 rounded-full'>Pink</button>
          <button onClick={() => (setColor("Grey"))} className='outline-none px-4 bg-slate-500 rounded-full'>Gery</button>
          <button onClick={() => (setColor("#E6E6FA"))} className='outline-none px-4 bg-indigo-500 rounded-full'>Lavender</button>
          <button onClick={() => (setColor("black"))} className='outline-none px-4 bg-black rounded-full text-white'>Black</button>

        </div>

        </div>
      </div>
  )
}

export default App
