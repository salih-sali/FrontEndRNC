import React, { useState } from 'react'

import axios from "axios"
import { Link, useNavigate } from "react-router-dom";


function AddD() {
    const [data2, setData2] = useState({
		
		title: "",
    year: "",
		author: "",
		nameJ: "",
        aff: "",
        details: "",
		detailsI: ""
	});
  
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData2({ ...data2, [input.name]: input.value });
	};

  
  const q=()=>{
    navigate('/home',{replace:true}) 
    
 }
	const handleSub = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/addDeatails";
			const { data: res } = await axios.post(url, data2);
			navigate("/");
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
    
        <div className="signupParentDiv">
        <h3 >Enter the details of published papers only..!!</h3>
          <form >
            <label>Date</label>
            <br />
            <input style={{ width:"500px" }}
              className="input"
              type={date}
              //id="fname"
              //name="name"
              placeholder="Enter the year"
              name="year"
              onChange={handleChange}
              value={data2.year}
              required
            />
            <br />
            <label htmlFor="fname"> Title </label>
            <br />
            <input
             style={{ width:"500px" }}
              className="input"
              type="text"
              id="fname"
              //name="email"
              placeholder="Enter the title in capital letter"
              name="title"
              onChange={handleChange}
              value={data2.title}
              required
            />
            <br />
            <label htmlFor="lname">Authors</label>
            <br />
            <input
             style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter name of authors seperated by coma"
              name="author"
              onChange={handleChange}
              value={data2.author}
              required
              
            />
             <br />
            <label htmlFor="lname"> Name of journel/conference/publisher of book</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter"
              name="nameJ"
              onChange={handleChange}
              value={data2.nameJ}
              required
            />
             <br />
            <label htmlFor="lname">publication Details (volume,issue,pages) or DOI</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="enter publication Details "
              name="details"
              onChange={handleChange}
              value={data2.details}
              required
            />
             <br />
            <label htmlFor="lname">Details of indexing and impact factor</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="number"
              //id="lname"
              //name="phone"
              placeholder="enter deatils"
              name="detailsI"
              onChange={handleChange}
              value={data2.detailsI}
              required
              />
            <br />
            <label htmlFor="lname">MITS affiliated</label>
            <br />
            <input
              style={{ width:"500px" }}
              className="input"
              type="text"
              //id="lname"
              //name="phone"
              placeholder="Yes or No "
              name="aff"
              onChange={handleChange}
              value={data2.aff}
              required
            />
            <br />
            <br />
            
            <button  onClick={handleSub}>Submit</button>
            <br /><br />
            <button onClick={q}>Cancel</button>
          
          </form>
        </div>
    
      )
    }
    
    export default AddD
    