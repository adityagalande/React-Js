import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
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
      //after user data loading set loading false
      .finally(() => (setLoading(false)))
  }, [])

  return !loading ? (
    <div>No Loading</div>
  ) : (
    <div>"Loading"</div>
  );
}

export default App
