
import './App.css'
import Navber from './component/Navber/Navber'
import {Outlet} from "react-router";

function App() {
  

  return (
    <div> 
      <Navber></Navber>
        <Outlet></Outlet>

    </div>
  )
}

export default App
