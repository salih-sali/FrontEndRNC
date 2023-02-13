import React, { useState } from 'react'
import './forms.css';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

//event

function Form4() {

  const [data4, setData4] = useState({
		
		eventN: "",
    venue: "",
		org: "",
		date: "",
    time: ""
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
			const url = "http://34.100.147.79:3001/RNC/AddEvent";
			const { data: res } = await axios.post(url, data4);
      //console.log("______"+res.data.eventN);
      console.log("______"+res.data.eventN);
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
    <h3 >enter the details of event..</h3>
      <form >
        <label>Name of event</label>
        <br />
        <input style={{ width:"500px" }}
          className="input"
          type="text"
          //id="fname"
          //name="name"
          placeholder="Enter the Name of Event"
         // value={year}
          name="eventN"
          onChange={handleChange}
          value={data4.eventN}
          required

            //onChange={(e)=>setYear(e.target.value)}
          
        />
        <br />
        <label htmlFor="fname">venue</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          
          placeholder="Enter the Venue"
          name="venue"
          onChange={handleChange}
          value={data4.venue}
          required
          //value={title}
           // onChange={(e)=>setTitle(e.target.value)}
          
        />
        <br />
        <label htmlFor="lname">Organized by</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="organizer's name"
          name="org"
          onChange={handleChange}
          value={data4.org}
          required

          
        />
         <br />
        <label htmlFor="lname">Date of event</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="MM/DD/YYY"
          name="date"
              onChange={handleChange}
              value={data4.date}
              required
        />
         <br />
        <label htmlFor="lname">Time</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="HH:MM AM/PM"
          name="time"
              onChange={handleChange}
              value={data4.time}
              required
        />

<br />
        <label htmlFor="lname">Source</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="text"
          //id="lname"
          //name="phone"
          placeholder="Drive/OneDrive/Source Link"
          name="source"
              onChange={handleChange}
              value={data4.source}
              required
        />
        
        <br />
        <br />
        <button  onClick={handleSub}>Submit</button>
        <br /><br />
        <button onClick={q} >Cancel</button>
      
      </form>

   
        </div>

  )
}

export default Form4


