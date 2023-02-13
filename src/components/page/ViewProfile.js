import React, { useState } from 'react'
//rcfe
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./flexytable.css"

function ViewProfile() {
    const navigate = useNavigate();
    const [choose,setChoose]=useState("approved")
    const [listOfUsers, setListOfUsers] = useState([]);
    function handleSChange(e) {
        setChoose(e.target.value);
        //console.log("--"+choose)
      }
    const name=localStorage.name //localStorage.name;
    const branch=localStorage.branch //localStorage.branch;

    const columns1=[
        { header: 'Title', key: 'Title' },
        { header: 'Type of paper', key: 'Type' },
        { header: 'Author', key: 'Faculties' },
        { header: 'Year', key: 'Year' },
        { header: 'Journal Name', key: 'Name' },
        { header: 'MITS Affiliation', key: 'Affiliated'}
      ]
//       const newArray = listOfUsers.map(({Title,Type, Year,Name,Faculties,Affiliated}) => ({Title, Type,Year,Name,Faculties,Affiliated}));
// console.log(newArray);

     const q=()=>{
               navigate('/home',{replace:true}) 
              }
                
    const handleSq= async (e) => {
        if(choose==="approved")
        {
            console.log("APPROVED ")

            e.preventDefault()
       const url = "http://34.100.147.79:3001/RNC//viewprofileapp"; // url to fetch details from permanent table
       //const { data: res } = await axios.post(url, {title : title})  ### must be post 
       axios.post(url,{name:name,branch:branch}).then((response) => {
        if(response.data.status==="FAILED")
        navigate('/home',{replace:true})

           setListOfUsers(response.data.data);
           console.log(response.data)
           alert(response.data.message) 
           //alert(response.data.message)               //required ones
         })
        }
        else if(choose==="rejected"){
            console.log("REJECTED...!")
            e.preventDefault()
            const url = "http://34.100.147.79:3001/RNC/viewprofilereject"; //url to fetch details from rejected table
           // const { data: res } = await axios.post(url, {title : title})  // must be post 
            axios.post(url,{name:name,branch:branch}).then((response) => {
              if(response.data.status==="FAILED")
        navigate('/home',{replace:true})
        
                console.log(response.data)
                setListOfUsers(response.data.removed);
                alert(response.data.message)
                //alert(response.data.message)
            //    console.log(setListOfUsers) 
            })
        } 
       
}



const downloadExcelProps = {
  type: 'filtered',
  title: 'Details',
  showLabel: true
}

  return (
<div className='search1'>
    
<h1 className='search'>&nbsp;&nbsp;WELOCME FACULTY</h1>
<h5 className='search'>&nbsp;&nbsp;Name : {name}</h5><br/>
<h5 className='search'>&nbsp;&nbsp;Department : {branch}</h5>
<br/>
<h5 >&nbsp;  &nbsp;Choose to view publications : &nbsp;&nbsp;
<select className='viewDrop' onChange={handleSChange} >
      <option value="approved">Approved publications</option>
      <option value="rejected">Rejected publications</option>
     </select>&nbsp;&nbsp;
     <button className="btn21 button21" onClick={handleSq}>View</button>&nbsp;
     <button className="btn21 button22 " onClick={q}>Home</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </h5>
<div style={{margin:"25px"}}>
     
 

      <ReactFlexyTable 
     
      data={listOfUsers}
      filterable 
      sortable
      pageSizeOptions={[5,10,25,50,100,250,500]}
      globalSearch
      downloadExcelProps={downloadExcelProps}
      showExcelButton
      columns={columns1}
      />

       </div>
    </div>
  )
}

export default ViewProfile