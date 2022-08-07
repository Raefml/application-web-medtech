import React from 'react'
import { Grid,Paper, Avatar,Box,Link, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import {  useNavigate, useParams } from "react-router-dom";
import Sidebar from "./components/src/Sidebaree.jsx";
import  Navbare from "./components/src/navbare.jsx";
import Datatable from "./datatable.jsx";
import  Widget from "./components/src/widget.jsx";
import  Table from "./components/src/component/Table.jsx";

    import "./components/src/component/home.scss";
const Users=()=>{
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
    const {users} = useParams();  
    let history =  useNavigate(); 
 
    const usersss = localStorage.getItem('users');
      
    const logout = () => 
    {
        localStorage.removeItem("users")
        history.push("/");
    }


    
 
    return(
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
      <Navbare />
      <br/>
      <div/>
      <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
         <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
        
          <Datatable />
      </div>
        <div className="">
           <Grid>
             <div style={{  float:"right",marginRight:"50px"}}>
                           
               <Button type='submit' onClick={logout} color='primary' justifyContent="flex-end" variant="contained" style={btnstyle} fullWidth>Logout</Button>
             
            </div>
          </Grid>            
            <h4 style={{textAlign:"left",marginLeft:"10px"}}>Welcome To Home : <span style={{color:"blue"}}>{usersss}</span></h4>
            <h2 style={{color:"green"}}>Welcome To Home Page </h2>
            <p>React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by ...
            <p>React · Declarative. React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state, then ...</p>
            
            <Grid container direction="row" justify="center" alignItems="center">
             <Grid item xs={4}>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
         </p>
        </div>
       
        </div>
        </div>
    )
}
 
export default Users