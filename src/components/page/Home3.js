import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/Row';
import imh1 from "../../images/logomits.png"
import './Home2.css';
import verify from "./verify.png"


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
    <MDBCard style={{ width: '22rem',marginLeft:'40%',marginTop:'50px' }}>
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
        <MDBBtn href='/ApprovePublication'>verify  </MDBBtn><br/><br/>
        {/* <MDBBtn href='/form-3'>Show list</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
  </Col>
  
   
  </Row>
  </div>
  
  </div>
  
);
}