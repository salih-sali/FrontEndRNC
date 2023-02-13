import { useState } from "react"
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import './singup.css'
//import Form1 from './../forms/Form1'
import './Navbar/Navbar.css'
import imh1 from '../images/logomits.png'

function Login() {
 const [emailaddress,setEmailaddress] = useState('')
 const [pass,setPass] = useState('')
const handleSub=(e)=>{
  e.preventDefault()
    console.log("USER : "+emailaddress)
    console.log("pass : "+pass)
    
}

//111111111111111111111
const [data, setData] = useState({ email: "", password: "" })
	const [error, setError] = useState("")

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://34.100.147.79:3001/RNC/signin";
			const { data: res } = await axios.post(url, data);
      // fetch("http://localhost:8080/api/auth")
      // .then(response=>response.json())
     // console.log(res.token)
     if(res.status=="FAILED")
        alert(res.message)
      localStorage.setItem("role", res.data);
			localStorage.setItem("token", res.token);
      localStorage.setItem("name", res.name);
			localStorage.setItem("branch", res.branch);
      console.log(localStorage.role+"~~~~~~~~~~"+localStorage.token)
      console.log("Branch = ",localStorage.branch,"Name = ",localStorage.name)
			window.location = "/home";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	}
// {/* <div className='navbar'> 
//       <a href="https://mgmits.ac.in/">
//          <img className="logo" src={imh1}></img></a>
//          <img className="nba" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nba.png"></img>
//          <img className="nirf" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nirf-logo.png"></img>
//          <img className="ariia" src="https:/mgmits.ac.in/wp-content/themes/muthoot/images/ariia_logo.jpg"></img>
        
//          <a href="/qqq/form-1" >
//          <h1 className='rnc'>RESEARCH AND CONSULTANCY CELL</h1></a>
//          </div> */}

    return (
      <div className="main">
      
 
      <div className="ww">
      <form onSubmit={handleSubmit} >
       
      <div className="signupParentDiv">
      
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            onChange={handleChange}
							value={data.email}
							required
            //value={emailaddress}
            //onChange={(e)=>setEmailaddress(e.target.value)}
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
           // value={pass}
            //onChange={(e)=>setPass(e.target.value)}
            className="form-control"
            onChange={handleChange}
							value={data.password}
							required
              name="password"
            placeholder="Enter password"
          />
        </div>
        {error && <div className="error_msg">{error}</div>}
        <div className="d-grid">
          <button  type="submit" className="btn btn-primary">
            Log In
          </button>
         
          <p className="forgot-password text-right">
          <a href="/sign-up"> new user ? Sign Up</a>
          <a href="/forgot-password"> forgotten password ?</a>
        </p>
          
         
        </div>
        </div>
       
      </form>
       
       </div>
       </div>
    )
  }

export default Login