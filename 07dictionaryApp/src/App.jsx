import { useEffect, useState } from "react"
import useDictionaryApi from "./custom_hook/useDictionaryApi";

function App() {

  // const [inputText, setInputText] = useState("")
  const [audio, setAudio] = useState("")

  const [temp, setTemp] = useState("");
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue)
  
  const getDictionaryWord = useDictionaryApi(inputValue)
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  
  const convert = () => {
    setTemp(getDictionaryWord[0].phonetic)
    setAudio(getDictionaryWord[0].phonetics[0].audio)
  }
  

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col sm:w-1/2 rounded shadow-lg bg-slate-100 p-3 my-auto flex-wrap'>
          <div className='text-center mb-2'>
            <h1 className='text-black sm:font-semibold md:font-bold text-xl'>Dictionary {inputValue} Application</h1>
          </div>

          <div className='flex w-1/2justify-center items-center mx-2 mb-1 shadow-sm'>
            <input 
            type="text" 
            id="inputField" 
            placeholder='Enter Word' 
            value={inputValue}
            onChange={handleInputChange}
            className='flex-grow p-2 rounded-l border-none focus:outline-none focus:shadow-md' />
            
            <button onClick={convert} 
            className='flex-grow-2/3 text-white font-semibold lg:font-bold bg-blue-500 hover:bg-blue-600 px-2 md:px-5 lg:px-10 py-2 rounded-r'>Search</button>
          </div>

          <div className="p-2  rounded-full">
            <audio controls className="w-full hover:shadow-md">
              <source src={audio} type="audio/mpeg" />
              <source src={audio} type="audio/mpeg"></source>
              <source src={audio} type="audio/ogg"></source>
            </audio>
          </div>


          <div className='flex-col justify-start text-left'>
            <p> <span className="font-semibold">Word : </span>{temp}</p>
            <p> <span className="font-semibold">Definition : {audio}</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p> <span className="font-semibold">Example : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p></p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
