import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Portfolio from "./component/Portfolio/Portfolio.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Skill from "./component/Skill/Skill.jsx";
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children: [
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/skills',
        element:<Skill></Skill>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }

    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
