import React from 'react'
import App from './App'
import NavBar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Des from './components/Description/Description'
import Foot from './components/Footer/Footer'
import Form1 from './forms/Form1';
import SignUp from '../src/components/signup.component';
import Login from '../src/components/login.component'
import Page from '../src/components/page/Home'
import AddD from './components/Navbar/addD/AddD';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Form3 from './forms/Form3'
import Form4 from './forms/Form4'
import Home2 from './components/page/Home2'
import Home3 from './components/page/Home3'
import Home4 from './components/page/Home4'

import Data from './forms/Data'
import AssignMember from './components/page/AssignMember'
import ShowFee from './components/page/ShowFees'
import ShowEvents from './components/page/ShowEvents'
import ApprovePublication from './components/page/ApprovePublication'
import ViewProfile from './components/page/ViewProfile'
import ListFP from './components/page/ListFP'
import RemoveMember from './components/page/RemoveMember'
import Forgetpassword from './components/forgotpassword'
import './App1.css'
import ShowAll from './components/page/showAll'



/*Form1 = FDP
Form3 = Fee Reimbursement
Form4 = Event
AddD = Publications*/


function App1() {
   const user = localStorage.getItem("token");
   const role = localStorage.getItem("role");
   console.log("o yea "+localStorage.token)
  // localStorage.removeItem("token")
  return (
    
    <Router>
      
    <NavBar/>
    
      <Routes>
      
          
            {user && role==="A" && <Route path="/home" exact element={<Home2 />} />}
            {user && role==="F" && <Route path="/home" exact element={<Home4/>} />}
            {user && role ==="M"&& <Route path = "/home" exact element={<Home3/>}/>}
            <Route path="/home" exact element={<Login />} />
            {user && role==="A"&& <Route path="/form-3" element={<Form3 />} />}
            {user && role==="A"&& <Route path="/form-4" element={<Form4/> } />}
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<Forgetpassword/>} />
            {user && role==="A" && <Route path="/show-All" exact element={<ShowAll />} />}
            {user && role==="A"&& <Route path="/form-1" element={<Form1 />} />}
            {user && role==="F" && <Route path="/add-details" element={<AddD />} />}
            {user && role==="A"&& <Route path = "/Data" element = {<Data />} />}
            {user && role==="A"&& <Route path = "/AssignMember" element = {<AssignMember />} />}
            {user && role==="A"&& <Route path = "/RemoveMember" element = {<RemoveMember />} />}
            {user && role==="A"&& <Route path = "/ShowFee" element = {<ShowFee />} />}
            {user && role==="A"&& <Route path = "/ShowEvents" element = {<ShowEvents />} />}
            {user && role==="M"&& <Route path = "/ApprovePublication" element = {<ApprovePublication />} />}
            {user && role==="F" && <Route path = "/ViewProfile" element = {<ViewProfile />} />}
            {user && role==='A' && <Route path = "/ListFP" element = {<ListFP />} />}
      </Routes>

       </Router>
     
      
  )
}

export default App1




// import React from 'react'
// import App from './App'
// import NavBar from './components/Navbar/Navbar'
// import Banner from './components/Banner/Banner'
// import Des from './components/Description/Description'
// import Foot from './components/Footer/Footer'
// import Form1 from './forms/Form1';
// import SignUp from '../src/components/signup.component';
// import Login from '../src/components/login.component'
// import Page from '../src/components/page/Home'
// import AddD from './components/Navbar/addD/AddD';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Form3 from './forms/Form3'
// import Form4 from './forms/Form4'
// import Home2 from './components/page/Home2'
// import Search from './components/page/Search'
// import Data from './forms/Data'



// function App1() {

//   return (
//     <Router>
//     <NavBar/>
    
//       <Routes>
      
//       <Route path="/search" element={<Search />} />
//     <Route path="/home" exact element={<Home2 />} />
//     <Route path="/form-3" element={<Form3 />} />
//     <Route path="/form-4" element={<Form4/> } />
//      <Route path="/sign-in" element={<Login />} />
//     <Route path="/sign-up" element={<SignUp />} />
//    <Route path="/form-1" element={<Form1 />} />
//    <Route path="/add-details" element={<AddD />} />
//    <Route path = "/Data" element = {<Data />} />
//       </Routes>

//        </Router>
     
      
//   )
// }

// export default App1