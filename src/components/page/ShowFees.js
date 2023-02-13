import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import "./style.css"
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import styles from "./flexytable.css"

function ShowFee() {
  const navigate = useNavigate()
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [error, setError] = useState("");
const cols = [
    {header: 'Student Names', key: 'studentnames'},
  { header: 'Name', key: 'name' },
  { header: 'Fee Spent', key: 'totalfee' },
  { header: 'Year', key: 'year'},
 // { title: 'Journal Name', field: 'nameJ' }
]
console.log(1)

const newArray = listOfUsers.map(({title,name,agency,GoP,year,amount,dept}) => ({title,name,agency,GoP,year,amount,dept}));

const downloadExcelProps = {
        type: 'filtered',
        title: 'Fee Reimbursement Details',
        showLabel: cols,
      }
// const title="Mongto"  ###########can be used
const handleS = async (e) => {
    e.preventDefault()
    // try {
        
        axios.get("http://34.100.147.79:3001/RNC/getAll").then((response) => {
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
        const url = "http://34.100.147.79:3001/RNC/getAll";
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
    
    function handleSChange(e) {
        setName1(e.target.value);
        console.log("--"+name1)
      }

    return (
<div className='search1'>
<br/>
<h1 className='search'>Details of Fee Reimbursed</h1><br/>
<form>
<label>
   <h4>Click to view all the details</h4>
    </label><br></br>
    <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
     <button className="btn21 button22" onClick={q}>Home</button>

</form>



<div style={{margin:"45px"}}>
          <ReactFlexyTable 
     data={listOfUsers} 
     filterable 
     sortable
      pageSizeOptions={[5,10,25,50,100,250,500]}
      globalSearch
      downloadExcelProps={downloadExcelProps}
      showExcelButton
      columns={cols}
      />
          </div>
        
<br/></div>
    )
    }

    
    export default ShowFee