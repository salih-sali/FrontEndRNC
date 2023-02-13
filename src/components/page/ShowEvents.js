import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import "./style.css"
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import gdrive from "./Gdrive.png"

function ShowEvents() {
  const navigate = useNavigate()
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [error, setError] = useState("");
const cols = [
    {title: 'Venue', field: 'venue'},
  { title: 'Event Name', field: 'eventN' },
  { title: 'Date', field: 'date' },
  { title: 'Time', field: 'time'},
  { title: 'Organised by', field: 'org'},
 // { title: "Source", field: 'source'}
 // { title: 'Journal Name', field: 'nameJ' }
]
console.log(1)


const newArray = listOfUsers.map(({eventN,venue,date,time,org,source}) => ({venue,eventN,date,time,org,source}));
console.log(newArray);


// const title="Mongto"  ###########can be used
const handleS = async (e) => {
    e.preventDefault()
    // try {
        
        axios.get("http://34.100.147.79:3001/RNC/getEvents").then((response) => {
             if(response.data.status==="FAILED")
            navigate('/home',{replace:true})

            setListOfUsers(response.data.data);
         
            console.log(listOfUsers)
            //alert(response.data.message)
           // print_all()                     //all publications retreival
           
          });}
          const q=()=>{
            navigate('/home',{replace:true}) 
            }


 const handleSq= async (e) => {
            e.preventDefault()
             try {
        const url = "http://34.100.147.79:3001/RNC/getEvents";
        //const { data: res } = await axios.post(url, {title : title})  ### must be post 
        axios.post(url, data4).then((response) => {
            setListOfUsers(response.data.data);
            console.log(listOfUsers)                //required ones
          })
        //navigate("/sign-in")
        //console.log(res.message)
    
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message)
        }
    }}
    const downloadExcelProps = {
      type: 'filtered',
      title: 'Event Details',
      showLabel: true
    }

   
   
     const additionalCols = [{
       header: "click here to open link",
       td: (newArray) => {
         return<div>
           <img src={gdrive} width="45" height="45" 
           onClick= {(e)=>
            window.open(newArray.source)
           } /> 
         </div>
       }
     }]

    return (
<div className='search1'><br/>
<h1  className='search' >Event Details</h1><br/>
<form>
<label>
    <h4>Click to view Event details </h4>
    </label>
    <br></br>
    <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
    <button className="btn21 button22" onClick={q}>Home</button>
<br/>
<br/>
</form>





<div style={{margin:"45px"}}>
  
  <ReactFlexyTable 
             data={newArray} 
             filterable 
             sortable
             nonSortCols={['source']} 
      pageSizeOptions={[5,10,25,50,100,250,500]}
      globalSearch
      downloadExcelProps={downloadExcelProps}
      showExcelButton
      additionalCols={additionalCols}/>

  </div>
</div>
    )
    }

    
    export default ShowEvents