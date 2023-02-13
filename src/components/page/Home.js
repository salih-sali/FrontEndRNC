import React from 'react'
import './home.css'
import { Link, useNavigate } from "react-router-dom";
import AddD from '../Navbar/addD/AddD'



function Home() {


  return (
    <div className='homeq'>
      <h1 style={{color:"black"}}>   Welcome Admin</h1>
      <br/>
      <br/>
      <a href='/add-details'>
      <h4 style={{color:"white"}}>1.   Add New Publications details</h4></a>
      <br/>
      <a href='/form-1'>
      <h4 style={{color:"white"}}>2.     Add New Funded Project details</h4></a>
      <br/>
      <a href='/form-4'>
      <h4 style={{color:"white"}}>3.  Add New Event Details</h4></a>
      <br/>
      <a href='/form-3'>
      <h4 style={{color:"white"}}>4.  Add New Fee Reimbursment details</h4></a>

      <br/>
      
      
         
    </div>
  )
}

export default Home