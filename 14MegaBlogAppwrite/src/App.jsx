import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  //when app start loading is true
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //check is user logged-in or logeed-out after starting app and put user data in store
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => (setLoading(false)))
      //after user data loading set loading false
  }, [])

  return !loading ? (
    <div className='flex flex-wrap content-between min-h-screen bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* Todo:  <Outlet /> */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className='bg-red-500 p-8 text-black' >"Loading"</div>
  );
}

export default App
