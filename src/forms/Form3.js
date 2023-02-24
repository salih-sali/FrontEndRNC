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
        institute: '',
        branch: ""
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
      const url = "https://rnc-back-end-5zlfsmahea-el.a.run.app/RNC/reimbursment";
      const {data: res} = await axios.post(url,data)
      alert(res.message)

     window.open('/Data',"_blank")
     navigate('/home')
    }catch(err){
      alert(err)
    }


  }

  return (
    <div> 
      
    <div style={{ width:"700px" }} className="signupParentDiv">
    <h3  style={{ margin:"5px 0px 20px 60px"  }} >Enter the details of fee to be reimbursed</h3>
      <form onSubmit={handleSub}>
      
        <label htmlFor="fname">Name of student</label>
        
        <input
         style={{ width:"500px" ,margin:"5px 10px 5px 30px"}}
          className="input"
          type="text"
          id="fname"
          name="studentnames"
          placeholder="Enter the Students name"
          onChange={handleChange}
          required
        />
         <br />
        <label htmlFor="fname">Faculty in charge</label>
        
        <input
         style={{ width:"500px",margin:"5px 10px 5px 30px" }}
          className="input"
          type="text"
          id="fname"
          name="name"
          placeholder="Enter the faculty name"
          onChange={handleChange}
          required
        />
         <br />
        


        <label htmlFor="fname">Type Of Program</label>
        
        <input
         style={{ width:"500px",margin:"5px 10px 10px 30px" }}
          className="input"
          type="text"
          id="fname"
          name="type"
          placeholder="Enter the type"
          onChange={handleChange}
          required
        />
        <br/>
        <label>Amount</label>
        
        <input style={{ width:"170px",margin:"5px 30px 10px 10px" }}
          className="input"
          type="number"
          //id="fname"
          name="totalfee"
          placeholder="Enter the fee"
          //value={fee}
          onChange={handleChange}
          required
        />


        <label>Reimbursed amount</label>
        
        <input style={{ width:"212px",margin:"5px 10px 10px 10px"  }}
          className="input"
          type="number"
          //id="fname"
          name="reimbursed"
          placeholder="Enter the reimbursed amount"
          //value={fee}
          onChange={handleChange}
          required
        />
 
            
        <br/> 
        <label htmlFor="fname">Year</label>
        
        <input
         style={{ width:"170px",margin:"5px 35px 10px 30px"  }}
          className="input"
          type="number"
          id="fname"
          name="year"
          placeholder="Enter the year"
          onChange={handleChange}
          required
        />
        <label>Branch</label>
        <input style={{ width:"300px",margin:"5px 10px 10px 20px" }}
          className="input"
          type="text"
          //id="fname"
          name="branch"
          placeholder="CSE, ME, EEE, ECE, CE, AI&DS, BSH ..."
          //value={fee}
          onChange={handleChange}   
          required       
        />
        
        <br />
        <label htmlFor="fname">Name of Institute</label>
      
        <input
         style={{ width:"500px" ,margin:"5px 10px 10px 20px" }}
          className="input"
          type="text"
          id="fname"
          name="institute"
          placeholder="Enter name of the institute"
          onChange={handleChange}
          required
        />
              <label htmlFor="fname">Type of institute</label>


            <select
            style={{width:"150px" ,margin:"5px 20px 0px 25px" }} className= "input" onChange={handleChange}
            name="from" required>
              <option value = "">Choose The Type</option>
              <option value = "NIT">NIT</option>
              <option value = "IIT">IIT</option>
              <option value = "GOVT">GOVT</option>
              <option value = "PVT">PVT</option>
              <option value = "Other">Other</option>
            </select>

        

        <br />

        <button style={{ width:"100px",margin:"0px 25px 5px 400px"  }} onClick={q}>Cancel</button>
       
        <button style={{ width:"100px" }} type='submit'>Submit</button> 
      
      </form>
    </div>
  </div>
  )
}

export default Form3