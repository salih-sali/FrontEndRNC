import React, { useState } from 'react'
import './forms.css';
import { Navigate, useNavigate } from 'react-router-dom';

import axios from 'axios';
//import App from './Data';
//import { pdf } from '@react-pdf/renderer';

//fee reimbursement

function Form3() {

  const [data, setData] = useState({
    studentnames: '',
        name: '',
        year: 0,
        totalfee: 0,
        from: '',
        type: '',
        institute: ''
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }
  const [fee,setFee] = useState('')
  //const [venue,setVenue] = useState('')
 // const [date,setDate] = useState('')
  //const [time,setTime] = useState('')
 // const [govt,setGovt] = useState('')
 // const [amount,setAmount] = useState('')
 const q=()=>{
  navigate('/home',{replace:true}) 
  
}
const navigate =useNavigate();
  const handleSub = async (e)=>{
    e.preventDefault()
      console.log("fee : "+fee)
      //console.log("venue : "+venue)
      //console.log("date : "+date)
     // console.log("time : "+time)
     // console.log("govt or private : "+govt)
    // console.log("amount : "+amount)
    console.log(data)
    try{
      const url = "http://34.100.147.79:3001/RNC/reimbursment";
      const {data: res} = await axios.post(url,data)
      alert(res.message)

     window.open('/Data',"_blank")
     //navigate('/home')
    }catch(err){
      alert(err)
    }


  }

  return (
    <div> 
      
    <div className="signupParentDiv">
    <h3 >Enter the details of fee to be reimbursed</h3>
      <form onSubmit={handleSub}>
      <br />
        <label htmlFor="fname">Name of student</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          name="studentnames"
          placeholder="Enter the name"
          onChange={handleChange}
        />
         <br />
        <label htmlFor="fname">Faculty in charge</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          name="name"
          placeholder="Enter the faculty name"
          onChange={handleChange}
        />
         <br />
        <label htmlFor="fname">Year</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="number"
          id="fname"
          name="year"
          placeholder="Enter the year"
          onChange={handleChange}
        />

<br />
        <label htmlFor="fname">Type Of Program</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          name="type"
          placeholder="Enter the type"
          onChange={handleChange}
        />
        <br/>
        <label>Fee</label>
        <br />
        <input style={{ width:"500px" }}
          className="input"
          type="number"
          //id="fname"
          name="totalfee"
          placeholder="Enter the fee"
          //value={fee}
          onChange={handleChange}
          
        />
 
            <br />
        <label htmlFor="fname">Name of Institute</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          name="institute"
          placeholder="Enter name of the institute"
          onChange={handleChange}
        /><br/>  <br />
              <label htmlFor="fname">Type of institute</label>
        
        {/* <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          name="from"
          placeholder="NIT/IIT/GOVT/PVT"
          onChange={handleChange}
        /> */}

&nbsp; &nbsp; 
<select
            style={{width:"150px"}} className= "input" onChange={handleChange}
            name="from" required>
              
              <option value = "NIT">NIT</option>
              <option value = "IIT">IIT</option>
              <option value = "GOVT">GOVT</option>
              <option value = "PVT">PVT</option>

            </select>

        <br />
        <br />
        <button type='submit'>Submit</button>
        <br /><br />
        <button onClick={q}>Cancel</button>
      
      </form>
    </div>
  </div>
  )
}

export default Form3
