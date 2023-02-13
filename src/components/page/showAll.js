import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import "./style.css"
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"

function showAll() {
  const navigate = useNavigate()
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [limit,setLimit] = useState('')

const [error, setError] = useState("");
const cols = [
  { title: 'Title', field: 'Title' },
  { title: 'Author', field: 'Faculties' },
  { title: 'Year', field: 'Year', type: 'Number' },
  { title: 'Journal Name', field: 'Name'},
  { title: 'MITS affiliation',field: 'Affiliated'},
  { title: 'Type', field: 'Type'},
  { title: 'Category', field: 'SubType'}
]

   const newArray = listOfUsers.map(({Title,Faculties,Details,Branch,Type,SubType, Year,Name,Affiliated}) => ({Title,Faculties,Details,Branch,Type,SubType, Year,Name,Affiliated}));

//console.log(newArray)

const handleLimit = async (e) => {
  e.preventDefault()

      axios.post("http://localhost:3001/RNC/filter",{"time":limit}).then((response) => {
        if(response.data.status==="FAILED")
        navigate('/home',{replace:true})

          setListOfUsers(response.data.data);
          console.log(listOfUsers)
          alert(response.data.message)
                           
         
        });}



const handleS = async (e) => {
    e.preventDefault()
        axios.post("http://34.100.147.79:3001/RNC/retrieve",{}).then((response) => {
          if(response.data.status==="FAILED")
        navigate('/home',{replace:true})

            setListOfUsers(response.data.data);
            console.log(listOfUsers)
            alert(response.data.message)
           // print_all()                     //all publications retreival
           
          });}

const q=()=>{
  navigate('/home',{replace:true}) 
  }

//  const handleSq= async (e) => {
//             e.preventDefault()
//              try {
//         const url = "http://34.100.147.79:3001/RNC/retrieve";
//         //const { data: res } = await axios.post(url, {title : title})  ### must be post 
//         axios.post(url, data4).then((response) => {
//             setListOfUsers(response.data.data);
//             console.log(listOfUsers)                //required ones
//           })
//         //navigate("/sign-in")
//         //console.log(res.message)
    
//     } catch (error) {
//         if (
//             error.response &&
//             error.response.status >= 400 &&
//             error.response.status <= 500
//         ) {
//             setError(error.response.data.message)
//         }
//     }}
    
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
<div className='search1'><br/>
<h1 className='search'>Verified Publications </h1><br/>
<form>

  <h5>Click to view all the publication details <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
  </h5> 
  <br/>
  <h5> View last &nbsp;<input style={{width:"40px"}} type="number" onChange={(e)=>{setLimit(e.target.value) } } />
   &nbsp; year's the publication details  <button className="btn21 button21" onClick={handleLimit}>View </button>&nbsp;
  </h5> 

<br/>
    
    <button className="btn21 button22" onClick={q}>Home</button>
<br/>
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
      />
        </div>
        
<br/></div>
    )
    }

    
    export default showAll