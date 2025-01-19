import React from 'react'
import { Link } from 'react-router'
import './Navber.css'
import Home from '../Home/Home'

const Navber = () => {
  return (
    <div id='navber'>
  
     
        <div id='name'> Mehedi Hasan </div>

        <div id='header'>
            <Link to={'/home'}  id='link'  >  Home</Link>
            <Link to={'/about'} id='link'> About</Link>
            <Link to={'/skills'} id='link'> Skills</Link>
            <Link to={'/Portfolio'} id='link'> Portfolio</Link>
            <Link to={'/contact'} id='link'> Contact</Link>

      
     </div>
     
    </div>
  
  )
}

export default Navber
