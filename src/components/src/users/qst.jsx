import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'
import { Routes, Route , Link} from "react-router-dom";

import {   useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import AddRemoveInputField from "./choi.jsx";
import "./qst.css";
import { useState, useEffect } from "react";
const Qst = () => {
 
    
    const {id} = useParams();  
    let {iid} = useParams();  
  
    const [userr, setUser] = useState({
        qest: "",
       type: "",
       id:id,
       choi:""
     
      });
    
    let {qest, type} = userr;
    const onInputChange = e => {
      setUser({ ...userr, [e.target.name]: e.target.value });
    };
    let navigate =  useNavigate(); 

   const {qss} = useParams();  

 async function  creeqst()
     {
      
       
      console.log(userr.type);
     if (userr.type=='text'){   
        let result = await axios.post("http://localhost:8000/api/creeqst",userr);  
        console.log(userr.type);
        navigate("/qst/"+id);
     }
     if (userr.type=='checkbox'){
      console.log(userr);
        let result = await axios.post("http://localhost:8000/api/creeqst",userr);  
        const us = await axios.get("http://127.0.0.1:8000/api/qst/")
        console.log(us.data)
        us.data.forEach(element => {
           if(element.qst==userr.qest){
         
            console.log(element)
            iid=element.id; 
           navigate("/ccc/"+iid+"/"+id);
           console.log(element)
           } 
        });
      
       
     }

     console.log(iid)
     
      setUser({qest:"",type:"",id:""}) // To Clear all fields  
      } 
   
      console.log(iid)

return(

         

<div  className='mbbb'>

     
    
      
    <div className='containerr col-md-6 text-center mb-5' >
    <h2 >Ajouter question</h2>
    <hr/>
   
          
            
          <div className='forr'>
          <div class="bg-light border border-dark ">
               <h2>question</h2>
               <input type="text" name="qest"class="form-control"  onChange={e => onInputChange(e)} />

                           </div> 
                           
                           </div>  
           </div>
        
           <div className='containerr col-md-6 text-center mb-5' >
           <div className='forr'>
           <div class="bg-light border border-dark ">     
    <h2>type de reponce:</h2>
<br />
 
   <input  className='fff' type="radio" id="checkbox" name="type"  value="checkbox" onChange={e => onInputChange(e)} />
      <h3 >checkbox</h3> 
   
  

    
      <input  className='fff' type="radio" id="text" name="type"  value="text" onChange={e => onInputChange(e)}/>
    
      <h3  >text </h3>
      
    
   
    </div>
   
    <div class="p-4">
          <button type="submit" onClick={creeqst} class="btn btn-primary ">Ajouter</button>
          </div>
       
    </div>
    </div>
   
           </div>
           
);
};
export default Qst;