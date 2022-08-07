import React from 'react'
import { Grid,Paper, Avatar,Box,Link, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import {  useNavigate, useParams } from "react-router-dom";
import Sidebar from "./components/src/component/Sidebaree.jsx";
import  Navbare from "./components/src/component/navbare.jsx";
import Datatable from "./datatable.jsx";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import  Widget from "./components/src/component/widget.jsx";
import  Table from "./components/src/Table.jsx";
import Sidebare from "./components/src/users/Sidebareee.jsx";
import  List from "./components/src/users/listqst.jsx";
import axios from 'axios';
import { useState, useEffect } from "react";
const Start3=()=>{
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
           
           
          
          
           
        </div>
        <iframe title="Heart Disease" width="1700" height="1200.25" src="https://app.powerbi.com/reportEmbed?reportId=92fa3e60-fa89-4ec7-9df5-2d3aeb1bff3a&autoAuth=true&ctid=1158e2d5-dc24-41ad-abce-62841076dbde&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtYi1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>         
          <br/>
       
          </div>
          </div>
    )
}
 
export default Start3