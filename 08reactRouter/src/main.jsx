import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
// import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "github",
        element: <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
