import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { Navigate, useNavigate } from 'react-router-dom'
import { Routes, Route , Link} from "react-router-dom";

import {   useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import AddRemoveInputField from "./choi.jsx";
import "./com.css";
import { useState, useEffect } from "react";
const Com = () => {
    const [categori, setcategori] = useState([])
    const [select, setselect] = useState()
    const [selecte, setselecte] = useState()

        useEffect(()=>{
        async function getAllusers(){
          try {
            const us = await axios.get("http://127.0.0.1:8000/api/categ/")
            console.log(us.data)
            setcategori(us.data)
          } catch (error) {
            console.log(error)
          }
        }
        getAllusers
        ()
      }, [])
      ////////
      
    ////////////////////////
    const {users} = useParams();  
    const [categories, setcategories] = useState([])
    let navigate =  useNavigate(); 
    const userssss = localStorage.getItem('users');

   function okk(){

console.log(select)
console.log(selecte)
console.log(userssss)


navigate("/list/"+select);

   }
  
   

    //////////////
   

    /////////////
    useEffect(()=>{
        async function getAllusers(){
          try {
            const users = await axios.get("http://127.0.0.1:8000/api/categoryee/")
            console.log(users.data)
            setcategories(users.data)
          } catch (error) {
            console.log(error)
          }
        }
        getAllusers
        ()
      }, [])
      useEffect(()=>{
        async function getAllusers(){
          try {
            const us = await axios.get("http://127.0.0.1:8000/api/categ/")
            console.log(us.data)
            setcategori(us.data)
          } catch (error) {
            console.log(error)
          }
        }
        getAllusers
        ()
      }, [])
    let idd;
    categories.forEach(element => { if (element.name===userssss){  
   
     
     idd=element.id;}})
     console.log(categori)
  
    
      
     
   
return(
  
            <div class="row">
             
              <h1 style={{  marginLeft: "-200px" }}> categorie:</h1>
              
                <select id="country"  className='ty'   value={{select}}  onChange={e=>setselect(e.target.value) && setselecte(e.target.name)  } >
                <option  >----select categorie----</option>   {
      categori.map((categorie, i)=>{ if(idd==categorie.user_id){
         return (
                       
                          
                           <option value={categorie.id} name={categorie.name} selected>{categorie.name}</option>  
                          
                     
                      
                    );}
                
                })}
    </select>
    <div class="pp4" style={{  marginLeft: "-200px" }}>
          <button   type="submit" class="btn btn-primary " onClick={okk}>next</button>
          </div>
          
  
                          </div>
          
         


           
);
};
export default Com;