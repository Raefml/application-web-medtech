import React from 'react'
import { Grid,Paper, Avatar,Box,Link, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import {  useNavigate, useParams } from "react-router-dom";
import Sidebar from "./components/src/component/Sidebaree.jsx";
import  Navbare from "./components/src/component/navbare.jsx";
import Datatable from "./datatable.jsx";
import  Widget from "./components/src/component/widget.jsx";
import  Table from "./components/src/Table.jsx";
import Sidebare from "./components/src/users/Sidebareee.jsx";
import  List from "./components/src/users/listqst.jsx";
import axios from 'axios';
import { useState, useEffect } from "react";
const Start2=()=>{
  const {id} = useParams();  
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
    const {users} = useParams();  
    let history =  useNavigate(); 
 
    const usersss = localStorage.getItem('users');
    let navigate =  useNavigate();  
    const logout = () => 
    {
        localStorage.removeItem("users")
       
        navigate("/");
    }
    
    
 
    return(
        <div className="home">
        <Sidebare />
        <div className="homeContainer">
        <Navbare />
       
    
        <div/>
        <div className="widgets">
           
           
          <h2>list de qstions {id}</h2>
          
           
        </div>
       
         
          <br/>
        <List/>
          </div>
          </div>
    )
}
 
export default Start2