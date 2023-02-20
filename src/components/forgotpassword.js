
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
    var regex = /^[^\s@]+@mgits.ac.in$/;
        var result = regex.test(email);
        if(result == true){
		try {
			const url = "http://localhost:3001/RNC/forgot-password"
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
  else{
    alert("wrong email address format ..!!\nplease enter your registered mgits mail id")
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
        <br/>
   
        <div className="mb-3">
          <label>Registered mgits e-mail address</label>
          <br/>
          <input
            type="email"
            className="form-control"
            placeholder="Enter mgits e-mail"
           
			required
              name='email'
            
            onChange={(e)=>{setEmailaddress(e.target.value)
                //console.log(email)
            }
            }
          />
        </div>
        
      

        <label>   Please Check your mail for password </label><br/><br/>

        
        <div className="d-grid">
{error && <div className="error_msg">{error}</div>}

          <button className="btn btn-primary">
            Request  Password
          </button>
        </div>
        <h6 className="forgot-password text-right">
           <a href="/sign-in">Got password? go to sign in</a>
           <a href="/sign-up"> Not registered ? new user ? Sign Up</a>
        </h6><br/>
        </div>
      </form>
      </div>
      </div>
    )
  
}

export default forgotpassword