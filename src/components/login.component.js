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

    // for mgits mail verification
    // var regex = /^[^\s@]+@mgits.ac.in$/; 
    // var result = regex.test(data.email);
    // if(result == true){
    //   console.log("correct email address format!")
    // else{
    //   alert("wrong email address!\nplease use mgits mail id")
    // }

		try {
			const url = "http://localhost:3001/RNC/signin";
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
         
          <h6 className="forgot-password text-right">
          <a href="/sign-up"> new user ? Sign Up</a>
          <a href="/forgot-password"> forgotten password ?</a>
        </h6>
          
         
        </div>
        </div>
       
      </form>
       
       </div>
       </div>
    )
  }

export default Login