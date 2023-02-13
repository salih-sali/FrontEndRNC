import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import "./style.css"
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"

function ListFP() {
    const navigate = useNavigate();
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [error, setError] = useState("");
    
const cols = [
  { header: 'Title', key: 'title'},
  { header: 'Agency Name', key: 'agency' },
  { header: 'Name', key: 'name' },
  { header: 'GOVT/PVT', key: 'GoP'},
  { header: 'Amount', key: 'amount'},
 { header: 'Branch', key: 'dept' },
 {header: 'Year', key: 'year'}
]
console.log(1)

const newArray = listOfUsers.map(({title,name,agency,GoP,year,amount,dept}) => ({title,name,agency,GoP,year,amount,dept}));
console.log(newArray);


// const title="Mongto"  ###########can be used
const handleS = async (e) => {
    e.preventDefault()
    // try {
        
        axios.get("http://34.100.147.79:3001/RNC/getFP").then((response) => {
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
        const url = "http://34.100.147.79:3001/RNC/getFP";
        //const { data: res } = await axios.post(url, {title : title})  ### must be post 
        axios.get(url, data4).then((response) => {
            if(response.data.status==="FAILED")
            navigate('/home',{replace:true})
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
    
    function handleSChange(e) {
        setName1(e.target.value);
        console.log("--"+name1)
      }

      const downloadExcelProps = {
        type: 'filtered',
        title: 'Funded Project Details',
        showLabel: true
      }

    return (
<div className='search1'>
    <br/>
<h1 className='search'>  Funded Project Details</h1>    <br/>
<form>
<h5>
   Click to view the details of Funded Projects
    </h5>
    <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
    <button className="btn21 button22" onClick={q}>Home</button><br/><br/>

</form>

<div style={{margin:"45px"}}>
             <ReactFlexyTable 
             data={newArray} 
             filterable 
             sortable
      pageSizeOptions={[5,10,25,50,100,250,500]}
      globalSearch
      downloadExcelProps={downloadExcelProps}
      showExcelButton
     // columns={cols}
      />
            </div>
        
<br/></div>
    )
    }

    
    export default ListFP