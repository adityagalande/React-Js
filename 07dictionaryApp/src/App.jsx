
function App() {


  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col sm:w-1/2 rounded shadow-lg bg-slate-100 p-3 my-auto flex-wrap'>
          <div className='text-center mb-2'>
            <h1 className='text-black sm:font-semibold md:font-bold text-xl'>Dictionary Application</h1>
          </div>

          <div className='flex w-1/2justify-center items-center mx-2 mb-1 shadow-sm'>
            <input type="text" name="" id="" placeholder='Enter Word' className='flex-grow p-2 rounded-l border-none focus:outline-none focus:shadow-md' />
            <button className='flex-grow-2/3 text-white font-semibold lg:font-bold bg-blue-500 hover:bg-blue-600 px-2 md:px-5 lg:px-10 py-2 rounded-r'>Search</button>
          </div>

          <div class="p-2  rounded-full">
            <audio controls class="w-full hover:shadow-md">
              <source src="//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3" type="audio/mpeg"></source>
            </audio>
          </div>


          <div className='flex-col justify-start text-left'>
            <p> <span className="font-semibold">Word : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p> <span className="font-semibold">Definition : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p> <span className="font-semibold">Example : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p></p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
