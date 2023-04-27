 import React from "react";
 import { NavLink } from "react-router-dom";
const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  function NavBar(){
    return(
     <div>
        <NavLink to="/" exact style={linkStyles} activeStyle={{background:'darkblue'}}>Home</NavLink>
        <NavLink to="/About" exact state={linkStyles} activeStyle={{background:"darkblue", margin:"10px"}} >About</NavLink>
        <NavLink to="/Login" exact state={linkStyles} activeStyle={{background:"darkblue" , margin:"10px"}} >Login</NavLink>
     </div>
  
  
    )
  }
  export default NavBar;