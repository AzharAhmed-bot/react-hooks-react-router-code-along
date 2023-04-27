import React from "react"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./NavBar"
import About from "./About"
import { Route,Routes } from "react-router-dom"
function App(){
    return (
    <div>
        <NavBar/>
       <Routes> 
          <Route exact path="/About" element={<About/>} />
          <Route exact  path="/Login" element={<Login />}/>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<h1>404 Page not found</h1>}/>
        </Routes>
    </div>
    )
}



  export default App;
