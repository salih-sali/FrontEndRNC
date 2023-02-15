import React, { useState } from 'react'

import axios from "axios"
import { Link, useNavigate } from "react-router-dom";


function AddD() {
    const [data2, setData2] = useState({
		
		Year: 0,
    Title:"",
    Faculties:"",
    Type:"",
    SubType:"",
    Name:"",
    Details:"",
    ImpactFactor:"",
    Affiliated: "",
    Branch:""
	});
  
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData2({ ...data2, [input.name]: input.value });
    console.log(data2)
	};

  
  const q=()=>{
    navigate('/home',{replace:true}) 
    
 }
	const handleSub = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3001/RNC/add";
			const { data: res } = await axios.post(url, data2);
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


    return (
    
        <div className="ParentDiv">
        <h3 style={{ padding:"20px"}}>Enter the details of published papers only..!!</h3>
        
          <form >
            
            <label htmlFor="fname"> Title </label>
            &nbsp;
            <input
             style={{ width:"670px" , height:"24px"}}
              className="input"
              type="text"
              id="fname"
              //name="email"
              placeholder="Enter the title in capital letter"
              name="Title"
              onChange={handleChange}
              value={data2.Title}
              required
            />&nbsp;&nbsp;
            <label>Year</label>
            &nbsp;
           <input style={{ width:"70px",height:"24px" }}
             className="input"
             type="Number"
             //id="fname"
             //name="name"
             placeholder="Year"
             name="Year"
             onChange={handleChange}
             value={data2.Year}
             required
           />
           
            <br /> <br />
            <label htmlFor="lname">Faculties</label>
            &nbsp;&nbsp;
            <input
             style={{ width:"86%"  , height:"24px"}}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter name of authors seperated by coma"
              name="Faculties"
              onChange={handleChange}
              value={data2.Faculties}
              required
              
            />
               
               <br /><br/>
            <label htmlFor="lname">Name of publication</label>
            &nbsp;&nbsp;
            <input
              style={{ width:"419px" , height:"24px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter the name"
              name="Name"
              onChange={handleChange}
              value={data2.Name}
              required
            />&nbsp;&nbsp;

            <label htmlFor="lname">Type</label>
            &nbsp;
            <select
            style={{width:"200px" , height:"24px"}} className= "input" name='Type' onChange={handleChange} value = {data2.Type} required>
              <option value = ''>Choose the Type</option>
              <option value = "journel">Journal</option>
              <option value = "conference">Conference</option>
              <option value = "publisher of book">Publisher of book</option>

            </select>
            
            <br/> <br />
            <label htmlFor="lname">SubType(SCI/SCOPUS/National/International/Other)</label>
            &nbsp;
            <input
              style={{ width:"436px" , height:"24px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter"
              name="SubType"
              onChange={handleChange}
              value={data2.SubType}
              required
            />



             <br /> <br />
            <label htmlFor="lname">publication Details (volume,issue,pages) or DOI</label>
            &nbsp;
            <input
              style={{ width:"477px"  , height:"24px"}}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter publication Details "
              name="Details"
              onChange={handleChange}
              value={data2.Details}
              required
            />
             <br /> <br />
            <label htmlFor="lname">Details of indexing and impact factor</label>
            &nbsp;
            <input
              style={{ width:"555px"  , height:"24px"}}
              className="input"
              type="Text"
              //id="lname"
              //name="phone"
              placeholder="enter details"
              name="ImpactFactor"
              onChange={handleChange}
              value={data2.ImpactFactor}
              required
              />
            <br /> <br />
            <label htmlFor="lname">MITS affiliated</label>
            &nbsp;&nbsp;
            <select
            style={{width:"100px" , height:"24px"}} className= "input" name='Affiliated' onChange={handleChange} value = {data2.Affiliated} required>
              <option value=''>Yes/No</option>
              <option value = "Yes">Yes</option>
              <option value = "No">No</option>
            </select>
          
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="lname">Branch</label>
            &nbsp;&nbsp;
            <select
            style={{width:"200px" , height:"24px"}} className= "input" name='Branch' onChange={handleChange} value = {data2.Branch} required>
              <option value = ''>Choose the Branch</option>
              <option value = "CSE">CSE</option>
              <option value = "EEE">EEE</option>
              <option value = "CE">CE</option>
              <option value = "ME">ME</option>
              <option value = "ECE">ECE</option>
            </select>
            
            <br/>
            <br/>
            
            <div className='move'>
            <button className="btn1 button2" onClick={q}>Cancel</button>
             <button  className="btn1 button1 " onClick={handleSub}>Submit</button>
             </div>
           
          </form>
        </div>
    
      )
    }
    
    export default AddD
    