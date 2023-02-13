import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Form1 from "./forms/Form1"

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/form-1'}>
             <h1 style={{ color: "white" }}>  MITS R & C CELL</h1>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link  className="nav-link" to={'/sign-in'}>
                    <p style={{ color: "white" }}>Login</p>
                    
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                  <p style={{ color: "white" }}>Register</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
        <div className="auth-wrapper">
        
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/form-1" element={<Form1 />} />
     
                 </Routes>
          </div>
        </div>

      </div>
   
   
    </Router>
  )
}
export default App
