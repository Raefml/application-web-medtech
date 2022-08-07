import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, NavLink } from "react-router-dom";

import axios from 'axios';
import { FaKey} from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
 import { FaUserAlt } from "react-icons/fa";
 import swal from 'sweetalert';
 import {  useNavigate, useParams } from "react-router-dom";
 import { useState, useEffect } from "react";

const Cree=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
    const {users} = useParams();  


    const userssss = localStorage.getItem('users');
    const checkList = ["text", "checkbox"];
      const [categories, setcategories] = useState([])
      const [categori, setcategori] = useState([])
 
  ////////
 
  useEffect(()=>{
    async function getAllusers(){
      try {
        const users = await axios.get("http://127.0.0.1:8000/api/categorye/")
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
        const us = await axios.get("http://127.0.0.1:8000/api/categorye/")
        console.log(us.data)
        setcategori(us.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllusers
    ()
  }, [])
  const elem = categories ;

  console.log(  categories) ;
  console.log(  categori) ;
   
  let idd;
  categories.forEach(element => { if (element.name===userssss){  
 
   
   idd=element.id;
} });       

  
    const[errors,setErrors] = useState('');
    const [userr, setUser] = useState({
        category: "",
        desc: "",
       iddd: idd
      });
      userr.iddd=idd;
   
      let {name, desc} = userr;
      const onInputChange = e => {
        setUser({ ...userr, [e.target.name]: e.target.value });
      };
      let navigate =  useNavigate(); 
 
   async function  creeform()
       {
        console.log( userr);
        let result = await axios.post("http://localhost:8000/api/creecategory",userr);
        console.log( userr);
        setErrors('Registration Successful')
       
        setUser({name:"",desc:"",iddd:""}) // To Clear all fields
 
        swal({
            title: "success!",
            text: " Congratulations, your account has been successfully created.",
            icon: "success",
          });
       
          navigate("/Home");
        } 
         
     
    return(
        <Grid>
             <div class=" Register">
           
            
             
            <section class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">add category {userssss} {idd}   ftht </h2>
                               
                                <div class="form-group">
                                    <label for="name"></label>
                                    <input type="text" name="category" className="form-control mb-2"value={name} onChange={e => onInputChange(e)} placeholder='question'  fullWidth required/>
                                </div>

                                <div class="form-group">
                                    <label for="email"> </label>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/><br/>
  <input type="submit" value="Submit"/><br/>
                              </div>
                      
                <div class="form-group form-button">
                                    <input type="submit" name="signup" onClick={ creeform} id="signup" class="form-submit" value="add"/>
                                </div>
              
               
                </div>
                    </div>
                </div> <div class="signup-image1">
                            
                            
                           
                            <img src="ggg.png" alt="" className="do" />
                            <a href="#" class="signup-image-link"></a>
                        </div>

            </section>
            </div>
           
        </Grid>
       
        
    )
    
}
 
export default Cree