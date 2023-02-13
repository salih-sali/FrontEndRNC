import React from 'react'
import "./Navbar.css";
import imh1 from '../../images/logomits.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from '../../App'
import Form1 from '../../forms/Form1';
import SignUp from '../signup.component';
import Login from '../login.component'
import Page from '../page/Home'
import AddD from './addD/AddD';
import Banner from './../Banner/Banner'
import Des from '../Description/Description'
import Foot from '../Footer/Footer'
import Description from '../Description/Description';

import "./Navbar.css"

//import Home from '../page/Home'


function NavBar() {

  const user = localStorage.getItem("token");

  return (
    
    
    <div className='navbar'> 
   
    {/* <a href="https://mgmits.ac.in/">
       <img className="logo" src={imh1}></img></a>
        */}
      
      
        <a href="/sign-in" ><h1 className='rnc'>RESEARCH AND CONSULTANCY CELL</h1></a>
        </div>
       




  )
}

export default NavBar