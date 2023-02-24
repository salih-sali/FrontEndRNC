
import React, { Component } from 'react'

import {useState} from 'react';

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './singup.css'
import './Navbar/Navbar.css'
import imh1 from '../images/logomits.png'




 
function SignUp() {
  const departments = ['CSE','EEE','ECE','ME','CE','AI&DS','BSH']
   
  
 const [branch,setBranch] = useState('cse')


 //111111111111111111
 const [data, setData] = useState({
  name: '',
  branch: ''.toUpperCase(),
  email: '',
  password: '',
  OCRid:''
})

const [error, setError] = useState("")
	const navigate = useNavigate()

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
	}

	const handleSubmit = async (e) => {
    e.preventDefault()
  
        var regex = /^[^\s@]+@mgits.ac.in$/;
        var result = regex.test(data.email);
        if(result == true){
          console.log("correct email address format!")
          console.log(data)
          try {
            const url = "https://rnc-back-end-5zlfsmahea-el.a.run.app/RNC/signup"
            const { data: res } = await axios.post(url, {
              "name": data.name,
              "branch": data.branch,
              "email": data.email,
              "password": data.password,
              "OCRid": data.OCRid
            })
            navigate("/sign-in")
            alert(res.message)
            console.log(res.message)
          } catch (error) {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
              setError(error.response.data.message)
            }
          }

        }
        else{
            alert("wrong email address!\nplease use mgits mail id")
        }
    
		
    
	}

 const handleSub=(e)=>{
  
  e.preventDefault()
    console.log("USER : "+data.email)
    //console.log("pass : "+pass)
    console.log("Name : "+data.name)
    //console.log("dept : "+dept)
}
const handleSelect=(e)=>{
  setBranch(e)
  
}

    return (

      <div className="backG">
      {/* <div className='navbar'> 
      <a href="https://mgmits.ac.in/">
         <img className="logo" src={imh1}></img></a>
         <img className="nba" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nba.png"></img>
         <img className="nirf" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nirf-logo.png"></img>
         <img className="ariia" src="https:/mgmits.ac.in/wp-content/themes/muthoot/images/ariia_logo.jpg"></img>
        
         <a href="/" >
         <h1 className='rnc'>RESEARCH AND CONSULTANCY CELL</h1></a>
         </div> */}

      <div className="ww">
      <form onSubmit={handleSubmit}>
        <div className="signupParentDiv">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label> Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter name"
            //value={name}
            required
            onChange={handleChange}
            name="name"
          // onChange={(e)=>setData.firstName(e.target.value)}
          />
        </div>

        
       {/* <label htmlFor="lname">Branch</label>
            <br />
             <select
            style={{width:"300px"}} className= "input" onChange={handleChange}
            name="branch" required>
              <option value = ''>Choose the Branch</option>
              <option value = "CSE">CSE</option>
              <option value = "EEE">EEE</option>
              <option value = "CE">CE</option>
              <option value = "ME">ME</option>
              <option value = "ECE">ECE</option>
            </select> */}

        <div className="mb-3">
          <label>e-mail address  </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter mgits e-mail"
            onChange={handleChange}
							required
              name='email'
            //2.value={emailaddress}
            //onChange={(e)=>setEmailaddress(e.target.value)}
          />
        </div> 
           

       
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
          
							required
            placeholder="Enter password"
            onChange={handleChange}
            name='password'
           // value={pass}
            //onChange={(e)=>setPass(e.target.value)}
          />
        </div>

     
      
          {/* <input
            type="text"
            className="form-control"
            placeholder="CSE / ME / CE / EEE / EC ....."
            onChange={handleChange}
							required
              name='branch'
            //2.value={emailaddress}
            //onChange={(e)=>setEmailaddress(e.target.value)}
          /> */}

       
       
      

        <div className="mb-3">
          <label>OCRid</label>
          <input
            type="number"
            style={{width:"220px" , height:"30px" , margin:"0px 15px 0px 20px" }}
          
							required
            placeholder="Enter here"
            onChange={handleChange}
            name='OCRid'
           // value={pass}
            //onChange={(e)=>setPass(e.target.value)}
          />
           <select
            style={{width:"170px" , height:"30px" , margin:"0px 0px 0px 20px" }}  name='branch' onChange={handleChange}  required>
               <option value = ''>Choose the Branch</option>

              {departments.map((dep,index)=> <option value = {dep} >{dep}</option>) }
          </select>
        </div>


        
        <div className="d-grid">
{error && <div className="error_msg">{error}</div>}

          <button className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <h6 className="forgot-password text-right">
           <a href="/sign-in">Already registered.? sign in</a>
        </h6>
        </div>
      </form>
      </div>
      </div>
    )
  
}

export default SignUp