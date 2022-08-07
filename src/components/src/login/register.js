

import { Link, NavLink } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./register.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey} from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
//////////////
import React from 'react'



 
const Signup=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
 
    const[errors,setErrors] = useState('');
    const [user, setUser] = useState({
        name: "",
        email: "",
        password:""
      });
      
      const {name, email,password} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
 
   async function  signup()
       {
        let result = await axios.post("http://localhost:8000/api/register",user);
        setErrors('Registration Successful')
        setUser({name:"",email:"",password:""}) // To Clear all fields
 
        }  
     
    return(
        
        <div class=" Register">
            
             
        <section class="signup">
                <div class="container">
                    <div class="signup-content">
                        <div class="signup-form">
                            <h2 class="form-title">Sign up</h2>
                            <form method="POST" class="register-form" id="register-form">
                                <div class="form-group">
                                    <label for="name"><i class="zmdi zmdi-account material-icons-name"><FaUserAlt /></i></label>
                                    <input type="text" label='Name' name="name" value={name} onChange={e => onInputChange(e)} placeholder='Enter Name'  fullWidth required/>
                                </div>
                                <div class="form-group">
                                    <label for="email"><i><FaMailBulk /> </i></label>
                                    <input  name="email" value={email}  onChange={e => onInputChange(e)} placeholder='Enter Email' type='text' fullWidth required/>
                                </div>
                                <div class="form-group">
                                    <label for="email"><i><FaKey /> </i></label>
                                    <input label='Password'   type="password" name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>
                                </div>
                                
                               
                               
                                <div class="form-group form-button">
                                <Button type='submit' onClick={signup} color='primary' variant="contained"  fullWidth>Singup</Button>
                                    <input type="submit" name="signup" onClick={signup} id="signup" class="form-submit" value="Register"/>
                                </div>
                            </form>
                        </div>
                        <div class="signup-image1">
                            
                            
                           
                            <img src="yy.png" alt="" className="do" />
                            <a href="#" class="signup-image-link">I am already member</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
 
export default Signup























 
