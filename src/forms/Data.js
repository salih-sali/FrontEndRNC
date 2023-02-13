import React, {PureComponent} from 'react';
import './Data.css';
import jsPDF from 'jspdf';
import images from './images.jpg'
import Axios from 'axios'
//import axios from 'axios';

const Data = () => {
     function pdfGenerator(){
        try {
            const url = "http://34.100.147.79:3001/RNC/return";
            Axios.get(url).then((res) =>{
            console.log(res.data)
            alert(res.data.message)
            var doc = new jsPDF('l','pt')
            
            doc.setFontSize(20).setFont(undefined, 'bold')
            doc.text(40,20,'Fee Reimbursement')
    //doc.text(30,30,S)
            doc.addImage(images,'jpg',40,50,250,100)
            doc.setFontSize(15)
            console.log(res.data)
            console.log(res.data.count)
            doc.text(600,50,"MITS|RNC|"+res.data.year+"|"+res.data.count)
            doc.setFontSize(17).setFont(undefined,'normal')
            doc.text(20,300,res.data.documentation,{maxWidth:750})
            doc.setFontSize(17)
            doc.text(500,350,res.data.name)
            doc.save("Fee Reimbursed.pdf");
            })
            
            
            
        } catch (error) {
            alert(error)
        }

        
    }
    return (
        <div className='newdata'>
            <h1>Bill in PDF  format</h1>
            <button type='submit' onClick={pdfGenerator}>Download</button>
        </div>
    );
};

export default Data;