import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function Down() {
    const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <div className="App container">
      
    <DropdownButton 
    alignRight 
    title="Dropdown right"
    id="dropdown-menu-align-right"
    onSelect={handleSelect}
      >
            <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
            <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
            <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
    </DropdownButton>
    <h4>You selected {value}</h4>
  </div>
);
}

export default Down



// <DropdownButton 
// bsSize="small"
// alignRight
// title="choose department"
// onSelect={handleSelect}>
//         <Dropdown.Item eventKey="CSE">CSE</Dropdown.Item>
//         <Dropdown.Item eventKey="CE">CE</Dropdown.Item>
//         <Dropdown.Item eventKey="ECE">ECE</Dropdown.Item>
//         <Dropdown.Item eventKey="EEE">EEE</Dropdown.Item>
//         <Dropdown.Item eventKey="ME">ME</Dropdown.Item>
// </DropdownButton>
// <h6>Department : {dept}</h6> 