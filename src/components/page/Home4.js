import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/Row';
import imh1 from "../../images/logomits.png"
import './Home2.css'
import profile from "./profile.jpeg"
import addnew from "./addnew.png"
export default function Home2() {
  const slogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    localStorage.removeItem("branch")
    window.location="/sign-in"
  }
  console.log("Branch = ",localStorage.branch,"Name = ",localStorage.name)
return (
 
  <div className='home2'>
  
    <div className='logoutstyle'>
    
    <h4 id="welcomemsg" >Welcome {localStorage.name} of {localStorage.branch}  Department<br/>
    </h4> 
    <button className="button3 " onClick={slogout}>Logout</button>
    </div><br/><br/>
    <div className='mask'>
  <Row>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  &nbsp; &nbsp; &nbsp; &nbsp; 
    <Col>
    <MDBCard style={{ maxWidth: '22rem', height:'25rem'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={addnew} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

            
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      
        <br/>
        <MDBCardTitle>Publication Details</MDBCardTitle>
        <br/>
        {/* <MDBCardText>
          Add details of new Publications  through a form 
        </MDBCardText>
        <MDBBtn href='/add-details'>add new</MDBBtn>
        <br/><br/> */}
        <MDBBtn href='/add-details'>add new</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
   
    <Col>
    <MDBCard style={{ maxWidth: '22rem', height:'25rem'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={profile} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>View profile</MDBCardTitle>
        <MDBCardText>
        
        </MDBCardText>
        <MDBBtn href='/ViewProfile'>view</MDBBtn>
        
      </MDBCardBody>
    </MDBCard>
  </Col>
 </Row>
 </div>
  </div>
);
}