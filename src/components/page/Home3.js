import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/Row';
import imh1 from "../../images/logomits.png"
import './Home2.css';
import verify from "./verify.png"
import fdpic from "./fdpic.jpeg"

export default function Home2() {
  const slogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    localStorage.removeItem("branch")
    window.location="/sign-in"
  }

return (
 
  <div>
    {/* {
     console.log("oooo"+localStorage.token)

    } */}
    <div className='logoutstyle'>
   
     
      <h4 id="welcomemsg">Welcome {localStorage.name} of {localStorage.branch} Department <br/>
      </h4> 
    <button className="button3 "  onClick={slogout}>Logout</button></div>
   
   <div className='mask'> 
  <Row>
    <Col>
    <MDBCard style={{ width: '22rem',marginLeft:'30%',marginTop:'40px',height:"390px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={verify}  width="90%" fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Verify Publication</MDBCardTitle>
        <MDBCardText>
        Verify Publication details
        </MDBCardText>
        <MDBBtn href='/ApprovePublication'>verify  </MDBBtn>

      </MDBCardBody>
    </MDBCard>
  </Col>
  <Col>
    <MDBCard style={{ width: '22rem',marginLeft:'20%',marginTop:'40px',height:"390px" }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={fdpic} fluid alt='...' />
       
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Funded Projects & consultancy</MDBCardTitle>
        <MDBCardText>
        Store the details of funded projects and consultancy details
        </MDBCardText>
        <MDBBtn href='form-1'>add new</MDBBtn>
        &nbsp; &nbsp; &nbsp; 
        <MDBBtn href='/ListFP'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
  </Row>
  <br/>  <br/>
  </div>
  <br/>  <br/>
  </div>
  
);
}