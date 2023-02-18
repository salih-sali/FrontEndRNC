import React from 'react'
import "./Navbar.css";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from '../login.component'

import "./Navbar.css"



function NavBar() {

  const user = localStorage.getItem("token");
  
  return (
    
    <div >
    <div className='navbar'> 
   
    {/* <a href="https://mgmits.ac.in/">
       <img className="logo" src={imh1}></img></a>
        */}
      
      
        <a href="/sign-in" ><h1 className='rnc'>RESEARCH AND CONSULTANCY CELL</h1></a>
       
        </div>
        { !user &&  <Login /> }
          

</div>


  )
}

export default NavBar