import React, { useState } from 'react'
import './forms.css';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

//event

function Form4() {

  const [data4, setData4] = useState({
		
		Event_Name: "",
    Venue: "",
		Organisation: "",
		Date: "",
    Time: "",
    Source: "",
    Branch:""

	})
  let eventl
  const navigate = useNavigate();

  const q=()=>{
    navigate('/home',{replace:true}) 
    
 }
	const [error, setError] = useState("");
	
	const handleChange = ({ currentTarget: input }) => {
		setData4({ ...data4, [input.name]: input.value });
	};

	const handleSub = async (e) => {
		e.preventDefault();
		try {
			const url = "https://rnc-back-end-5zlfsmahea-el.a.run.app/RNC/AddEvent";
			const { data: res } = await axios.post(url, data4);
      //console.log("______"+res.data.Event_Name);
      console.log("______"+res.data.Event_Name);
       eventl= res.data;
      console.log(eventl);
			//navigate("/home");
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
    q()
	}

  return (
    
    <div className="signupParentDiv">
    <h3 >Enter the Details of Event</h3>
      <form onSubmit={handleSub}>
        <label style={{margin:"10px 0px 0px 0px"}}>Name of event</label>
        <br />
        <input style={{ width:"500px" }}
          className="input"
          type="text"
          //id="fname"
          //name="name"
          placeholder="Enter the Name of Event"
         // value={year}
          name="Event_Name"
          onChange={handleChange}
          value={data4.Event_Name}
          required

            //onChange={(e)=>setYear(e.target.value)}
          
        />
        <br />
        <label style={{margin:"10px 0px 0px 0px"}} htmlFor="fname">Venue</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          
          placeholder="Enter the Venue"
          name="Venue"
          onChange={handleChange}
          value={data4.Venue}
          required
          //value={title}
           // onChange={(e)=>setTitle(e.target.value)}
          
        />
        <br />
        <label style={{margin:"10px 0px 0px 0px"}} htmlFor="lname">Organized by</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="organizer's name"
          name="Organisation"
          onChange={handleChange}
          value={data4.Organisation}
          required

          
        />
         <br />
        <label style={{margin:"20px 10px 0px 10px"}} htmlFor="lname">Date of event</label>
        
        <input
          style={{ width:"120px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="MM/DD/YYY"
          name="Date"
              onChange={handleChange}
              value={data4.Date}
              required
        />
         
        <label style={{margin:"10px 10px 0px 30px"}} htmlFor="lname">Time</label>
        
        <input
          style={{ width:"130px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="HH:MM AM/PM"
          name="Time"
              onChange={handleChange}
              value={data4.Time}
              required
        />

<br />
        <label style={{margin:"10px 0px 0px 0px"}} htmlFor="lname">Source</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="Drive/OneDrive/Source Link"
          name="Source"
              onChange={handleChange}
              value={data4.Source}
              
        />
        
        
        <br />
        <label style={{margin:"10px 0px 0px 0px"}} htmlFor="lname">Branch</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="CSE/ ME/ AI/ CE/ ECE/ EEE/ AI&DS/ BSH..."
          name="Branch"
              onChange={handleChange}
              value={data4.Branch}
              required
        />
        
        <br />
        
        <br />
        <button style={{ width:"150px",margin:"0px 25px 15px 200px"  }} onClick={q} >Cancel</button>
       
        <button style={{ width:"150px" }} type='submit'>Submit</button>
      
      </form>

   
        </div>

  )
}

export default Form4

