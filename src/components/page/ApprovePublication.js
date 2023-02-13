import React from 'react'
import "./Search.css"
import { useState } from 'react'
import axios from "axios";
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import {useNavigate} from "react-router-dom"
import approve from "./approve.jpeg"
import reject from "./deleteIcon.png"


function ApprovePublication() {
    //const branch="qwwee"
    const navigate = useNavigate()
    const branch =localStorage.branch;
    const [listOfUsers, setListOfUsers] = useState([]);
    
      const q=()=>{
        navigate('/home',{replace:true}) 
        }
  
      
        const [choose,setChoose]=useState("")
        const [choose2,setChoose2]=useState("")//initiating choose2 as null
        const [choose3,setChoose3]=useState("")
    
        const handle= async (e) => {
               console.log("__"+choose)
               const url ='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q='  +choose+ '&btnG='
               window.open(url); //new tab
             // window.location.href =url ; //same window reload cheyyan
        }
        const handle2= async (e) => {
            console.log("__"+choose)
            
            const url ='https://www.google.com/search?q='  +choose2
             window.open(url); //new tab
             // window.location.href =url ; //same window reload cheyyan
     }
    
     const handle3= async (e) => {
        console.log("__"+choose)
        
        const url1 ='https://www.google.com/search?q='  +choose3
        const url='https://www.scopus.com/results/authorNamesList.uri?sort=count-f&src=al&sid=c2623b7d81c5b6c13b56b38f232518c7&sot=al&sdt=al&sl=20&s=AUTHLASTNAME%28'+choose3+'%29&st1='+choose3+'&orcidId=&selectionPageSearch=anl&reselectAuthor=false&activeFlag=true&showDocument=false&resultsPerPage=20&offset=1&jtp=false&currentPage=1&previousSelectionCount=0&tooManySelections=false&previousResultCount=0&authSubject=LFSC&authSubject=HLSC&authSubject=PHSC&authSubject=SOSC&exactAuthorSearch=false&showFullList=false&authorPreferredName=&origin=searchauthorfreelookup&affiliationId=&txGid=40694e9b93d6bdf7d18a4a0e07cf9b9f'
        window.open(url); //new tab
         // window.location.href =url ; //same window reload cheyyan
    }
   
 const handleS= async (e) => {
           e.preventDefault()
            
            axios.post("http://34.100.147.79:3001/RNC/public",{Branch: branch}).then((response) => {
                console.log(response.data)
                if(response.data.status==="FAILED")
               navigate('/home',{replace:true})
                setListOfUsers(response.data.data);
                //console.log(response.data)
                 //navigate("/home")
                  console.log(response.data.message)  
                alert(response.data.message)
                
              }); 
            }

         const newArray = listOfUsers.map(({Title,Faculties,Branch,Affiliated, ImpactFactor,Name,SubType,Type,Year}) => ({Affiliated, Branch,Faculties,ImpactFactor,Name,SubType,Title,Type,Year}));
               console.log(newArray);
                      
                    
           
            
       
              // var ab="name"
              // var url = "http://www.google.comsearch?q="+{ab};
              //const id="abc"
             // <a href={'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q='  +id+ '&btnG='} target="_blank">click here</a>
   
   
             const url = "http://34.100.147.79:3001/RNC/verified"; //link of api,which delete from temp table n store details to rejected table  
 
             const downloadExcelProps = {
                   type: 'filtered',
                   title: 'Details',
                   showLabel: true
                  }
   
                  const additionalCols = [{
                    header: "Approve",
                    td: (newArray) => {
                      return<div>
                        <img src={approve} width="45" height="45" 
                        onClick= {(e)=>
                         
                           axios.post(url, {"Title": newArray.Title,"Confirm": "Yes"}).then((response) => {
                      console.log("approve :"+newArray.Title) 
                      alert(response.data.message)    
                        //  e.preventDefault() no need
                        })
              
                        } /> 
                      </div>
                    }
                  },{
                   header: "Reject",
                   td: (newArray) => {
                    return<div>
                    <img src={reject} width="40" height="40" 
                    onClick= {(e)=>
                     
                       axios.post(url, {"Title":newArray.Title,"Confirm": "No"}).then((response) => {
                  console.log("Rejecting :"+newArray.Title) 
                  alert(response.data.message)    
                       //  e.preventDefault() no need
                    })
          
                    } /> 
                       </div>
                   }
                 }
                 ]
   
             return (
      <div>
<div className='details'>
<h1 className='search'>Verification of publication details </h1>
<form>
<h5 >
    View all non-verified publications
    </h5>
    &nbsp;&nbsp;
    <button className="btn21 button21" onClick={handleS}>View all</button>&nbsp;
    <button className="btn21 button21" onClick={q}>Home</button>

</form>
<br/>
</div>
<div className='google'>
<h6>
Enter book title to search on Google Scholar &nbsp;:&nbsp;&nbsp;
<input onChange={event => setChoose(event.target.value)} />&nbsp;
<button className="btn21 button21" onClick={handle}>Search on Scholar</button> &nbsp;&nbsp;<br/><br/>
Enter book title to search on Google 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
<input onChange={event => setChoose2(event.target.value)} />
&nbsp;
<button className="btn21 button21" onClick={handle2}>Search on Google</button>
<br/><br/>
Enter name of author to search on Scopus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
<input onChange={event => setChoose3(event.target.value)} />
&nbsp;
<button className="btn21 button21" onClick={handle3}>Search on Scopus</button><br/><br/>
</h6><br/>
</div>


<div style={{margin:"25px"}}>

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
export default ApprovePublication