import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";

import "./style.css"
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import removepic from "./remove.png"

function RemoveMember() {
    const navigate = useNavigate()
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [error, setError] = useState("");

const cols = [
  { title: 'Name', field: 'name' },
  { title: 'Branch', field: 'branch' },
  { title: 'Role', field: 'type', type: 'Text' },
 // { title: 'Journal Name', field: 'nameJ' }
]

const newArray = listOfUsers.map(({name,email,branch,type}) => ({name,email,branch,type}));
console.log(newArray);

const url = "http://34.100.147.79:3001/RNC/remove";
 
             const downloadExcelProps = {
                   type: 'filtered',
                   title: 'List of faculty',
                   showLabel: true
                  }

          const additionalCols = [{
                    header: "Remove member",
                    td: (newArray) => {
                      return<div>
                        <img src={removepic} width="45" height="45" 
                        onClick= {(e)=>
                         
                           axios.post(url, {"name": newArray.name,"branch": newArray.branch,"email":newArray.email}).then((response) => {
                     // console.log("removing :"+newArray.name) 
                      alert(response.data.message)    
                      navigate('/home',{replace:true}) 
                        })
              
                        } /> 
                      </div>
                    }
                  }]


// const title="Mongto"  ###########can be used
const handleS = async (e) => {
    e.preventDefault()
    // try {
        
        axios.get("http://34.100.147.79:3001/RNC/getMember").then((response) => {
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
        const url = "http://34.100.147.79:3001/RNC/getMember";
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
<div className='search1'><br/>
<h1 className='search'>Remove Member</h1><br/>
<form>
<h5>
Click to view the details of Members
</h5>
    <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
    <button className="btn21 button22" onClick={q}>Home</button>

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
                additionalCols={additionalCols}/>

        </div>
        
<br/></div>
    )
    }

    
    export default RemoveMember