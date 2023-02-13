
import React, { Component } from 'react'
import {useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './singup.css'
import './Navbar/Navbar.css'


 
function forgotpassword() {
  const [email,setEmailaddress] = useState('')

const [error, setError] = useState("")
	const navigate = useNavigate()


	const handleSubmit = async (e) => {
		e.preventDefault()
    
		try {
			const url = "http://localhost:3001/RNC//forgot-password"
			const { data: res } = await axios.post(url, {"email":email})
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

 const handleSub=(e)=>{
  
  e.preventDefault()
   
    console.log("email : "+email)
    //console.log("dept : "+dept)
}


    return (

      <div>
      
      <div className="ww">
      <form onSubmit={handleSubmit}>
        <div className="signupParentDiv">
        <h3>Forget password </h3>
        
   
        <div className="mb-3">
          <label>Registered Email address</label>
          <br/>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
           
			required
              name='email'
            
            onChange={(e)=>{setEmailaddress(e.target.value)
                //console.log(email)
            }
            }
          />
        </div>
        
      

        <label>   Please Check the Spam too ..!!!</label><br/><br/>

        
        <div className="d-grid">
{error && <div className="error_msg">{error}</div>}

          <button className="btn btn-primary">
            Request  Password
          </button>
        </div>
        <p className="forgot-password text-right">
           <a href="/sign-in">Got password? go to sign in</a>
           <a href="/sign-up"> Not registered ? new user ? Sign Up</a>
        </p>
        </div>
      </form>
      </div>
      </div>
    )
  
}

export default forgotpassword