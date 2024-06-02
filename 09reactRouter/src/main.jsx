import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './component/About'
import Home from './component/Home'
import Login from './component/Login'
import User from './component/User.jsx'
import Navabar from './component/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/* RouterProvider is a component from react-router-dom that takes a router instance(created with createBrowserRouter) 
and makes it available to the entire React application. */

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <><Navabar /><Home /></>
  },

  {
    path: '/login',
    element: <><Navabar /><Login /></>
  },

  {
    path: '/about',
    element: <><Navabar /><About /></>
  },

  {
    path: '/user/:username',
    element: <><Navabar /><User /></>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navabar/> */}
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
