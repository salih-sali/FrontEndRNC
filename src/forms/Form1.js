import React, { useState } from 'react'
import './forms.css';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

//funded prject

function Form1() {

  const [data3, setData3] = useState({
		Type:"",
		title: "",
    Academic_Year: "",
		agency: "",
		name: "",
    GoP: "",
		amount: "",
    Department:"",
    Status:""
	});
  
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData3({ ...data3, [input.name]: input.value });
    console.log(data3)
	};

	const handleSub = async (e) => {
		e.preventDefault();
		try {
			const url = "http://34.100.147.79:3001/RNC/addFP";
			const { data: res } = await axios.post(url, data3);
			navigate("/home");
			console.log(res.message);
            alert(res.message)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        
				setError(error.response.data.message);
        console.log(error.response.data.message)
        alert(error.response.data.message) //PRINTING EROR
			}
		}
	};

  const q=()=>{
    navigate('/home',{replace:true}) 
    
 }

  return (
    
    <div   className="signupParentDiv">
    <h5 >Enter the details of Funded Projects / Conultancy ..!</h5>
      <form >
        
     
      <select
            style={{width:"200px" , height:"24px" , margin:"10px 10px"}} className= "input" name='Type' onChange={handleChange} value = {data3.Type} required>
              <option value = ''>Choose the Type</option>
              <option value = "Funded Project">Funded Project</option>
              <option value = "Conultancy">Conultancy</option>
          
            </select>
            <select
            style={{width:"200px" , height:"24px" , margin:"10px 20px"}} className= "input" name='Status' onChange={handleChange} value = {data3.Status} required>
              <option value = ''>select the status</option>
              <option value = "Requested">Requested</option>
              <option value = "Approved">Approved</option>
              <option value = "Completed">Completed</option>
          
            </select><br/>
            <label style={{ width:"240px" }}>Academic Year  (eg: 2019-2023 )</label>
        
        <input style={{ width:"120px" }}
          className="input"
          type="texts"
          //id="fname"
          name="Academic_Year"
          
         //value={year}
         placeholder="YYYY-YYYY"
          onChange={handleChange}
          value={data3.Academic_Year}
          required

            //onChange={(e)=>setYear(e.target.value)}
          
        />
        <br />
        <label style={{margin:"10px 0px 0px 0px"}} htmlFor="fname">Project Description</label>
        <br />
        <input
         style={{ width:"500px"}}
             
          className="input"
          type="text"
          id="fname"
          //name="email"
          placeholder="Enter the project Description"
          name="title"
          onChange={handleChange}
          value={data3.title}
          required
          //value={title}
           // onChange={(e)=>setTitle(e.target.value)}
          
        />
       
        <br />
       
        <label  style={{margin:"10px 0px 0px 0px"}} htmlFor="lname">Name & Designation PI / Co-PI</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="Enter name and designation PI / Co-PI"
          name="name"
          onChange={handleChange}
          value={data3.name}
          required

          
        />
         <br />
        <label style={{margin:"10px 0px 0px 0px"}} htmlFor="lname">Funding Agency</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="enter the agency"
          name="agency"
              onChange={handleChange}
              value={data3.agency}
              required
        />
         <br />
        <label style={{ width:"120px",margin:"10px 10px"}} htmlFor="lname">Govt/Private</label>
        
        <input
          style={{ width:"250px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="Govt or PVT"
          name="GoP"
              onChange={handleChange}
              value={data3.GoP}
              required
        />
         <br />
       
        <label style={{ width:"120px",margin:"10px 10px"}} htmlFor="lname">Project Amount</label>
        
        <input
          style={{ width:"250px" }}
          className="input"
          type="number"
          //id="lname"
          //name="phone"
          placeholder="Enter the amount in Rupees"
          name="amount"
              onChange={handleChange}
              value={data3.amount}
              required  />
        
        <br/>
        <label style={{ width:"120px",margin:"10px 10px"}} htmlFor="lname">Department</label>
        
        <input
          style={{ width:"250px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="CSE / ME / CE / EEE / EC ....."
          name="Department"
             
              value={data3.Department}
              onChange={handleChange}
              required
        />
         
         <br />
        <br />
        <button  onClick={handleSub}>Submit</button>
        <br /><br />
        <button  onClick={q}>Cancel</button>
      
      </form>
    </div>

  )
}

export default Form1