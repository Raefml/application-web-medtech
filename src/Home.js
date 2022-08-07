import React from 'react'
import { Grid, Paper, Avatar, Box, Link, TextField, Button, Typography, Link as Nv } from '@material-ui/core'
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./components/src/component/Sidebaree.jsx";
import Navbare from "./components/src/component/navbare.jsx";
import Datatable from "./datatable.jsx";
import Widget from "./components/src/component/widget.jsx";
import Table from "./components/src/Table.jsx";

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import Crud from "./components/src/users/CRUD.jsx";
import Qst from "./components/src/users/qst.jsx";
import Com from "./components/src/users/com.jsx";
import Sidebare from "./components/src/users/Sidebareee.jsx";


import "./components/src/home.scss";
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}





const Home = () => {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#3370bd' }
  const btnstyle = { margin: '8px 0' }
  const { users } = useParams();
  const { userId } = useParams();
  let history = useNavigate();

  const userssss = localStorage.getItem('userId');
  const usersss = localStorage.getItem('users');
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("users")

    navigate("/");
  }

  const qst = () => {
    localStorage.removeItem("users")


  }

  return (
    <div className="home">
      <Sidebare />
      <div className="homeContainer">
        <Navbare />


        <div />
        <div className="widgets">





        </div>

        <div className="">
          <Grid>
            <div style={{ float: "right", marginRight: "50px" }}>

              <Button type='submit' onClick={logout} color='primary' justifyContent="flex-end" variant="contained" style={btnstyle} fullWidth>Logout</Button>

            </div>
          
          </Grid>
          
          <h4 style={{ textAlign: "left", marginLeft: "50px" }}>Welcome To Home : <span style={{ color: "blue" }}>{usersss}  {userssss} </span></h4>
         
          <br />
          <div className='dad'>
          <h2 style={{ color: "green", marginLeft: "400px" }}>Welcome To Home Page </h2>

        
       
       
        <br />
        <Com />
       
        </div>
        <div className="izz">
      <img src="body.png"  className="dii" style={{   width:"750px" }}  />
        {/* animation */}
        


      </div>
        </div>
      </div>

    </div>
  )
}

export default Home