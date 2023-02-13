import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/Row';
import imh1 from "../../images/logomits.png"
import './Home2.css'
import feepic from "./feepic.jpeg"
import eventpic from "./eventpic.jpeg"
import fdpic from "./fdpic.jpeg"
import publicpic from "./public.jpeg"
import memberpic from "./memberpic.jpeg"
import official from "./official.jpeg"

export default function Home2() {
  const slogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    localStorage.removeItem("branch")
    window.location="/sign-in"
  }
  
return (
 
  <div className='home2'>
    {/* {
     console.log("oooo"+localStorage.token)

    } */}
    <div className='logoutstyle'>
    <div >
    <h4 id="  msg">Welcome {localStorage.name}
    <br/> </h4>
    <button className="button3 " onClick={slogout}>Logout</button>
    </div>
    <br/>
    </div>
    
    <div className='mask'>
  <Row>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <Col>
    <MDBCard style={{ maxWidth: '22rem', height:'25rem'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={feepic} fluid alt='...' />
        <a>
          <div className='maskk' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Fee Reimbursement</MDBCardTitle>
        <MDBCardText>
          Reimburesement of fees based on Organizational structure and criterias.
        </MDBCardText>
        <MDBBtn href='/form-3'>Add new  </MDBBtn><br/><br/>
        <MDBBtn href='/ShowFee'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
    <Col>
    <MDBCard style={{ maxWidth: '22rem', height:'25rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={eventpic} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Event Details</MDBCardTitle>
        <MDBCardText>
          Details of every events under R and C Cell MITS 
        </MDBCardText>
        <MDBBtn href='/form-4'>add new</MDBBtn>
        <br/><br/>
        <MDBBtn href='/ShowEvents'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
  <Col>
    <MDBCard style={{ maxWidth: '22rem', height:'25rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={fdpic} fluid alt='...' />
       
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Funded Projects</MDBCardTitle>
        <MDBCardText>
          Immediate reciept generation of funded projects based on certain criterias
        </MDBCardText>
        <MDBBtn href='form-1'>add new</MDBBtn>
        <br/><br/>
        <MDBBtn href='/ListFP'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
  </Row>
  <div><br/></div>
  <Row>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     <Col>
    <MDBCard style={{ maxWidth: '22rem', height:'25rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={publicpic} width="100%" fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

            
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Publication Details</MDBCardTitle>
        <MDBCardText>
      Retrieve, Filter, Sort and Export in excel formats.
        </MDBCardText>
        
        <MDBBtn href='/show-All'>Show list</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col> 

  <Col>
    <MDBCard style={{ maxWidth: '22rem', height:'25rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={memberpic} width="80%" fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

          
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Member</MDBCardTitle>
        <MDBCardText>
         Assign or remove member
        </MDBCardText>
        <MDBBtn href='/AssignMember'>Assign  </MDBBtn>&nbsp;&nbsp;&nbsp;&nbsp;
         <MDBBtn href='/RemoveMember'>Remove </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Col>
  <Col>
    <MDBCard style={{ maxWidth: '22rem', height:'25rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={official} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>official website</MDBCardTitle>
        <MDBCardText>
         Visit the official website of R and C Cell MITS.
         for further details 
        </MDBCardText>
        <MDBBtn href='https://mgmits.ac.in/research/research-and-consultancy-cell/'>click here</MDBBtn>
       
      </MDBCardBody>
    </MDBCard>
  </Col>
  </Row>
  </div>
  
  </div>
);
}