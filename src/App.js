
import './App.css';
import { useState, useEffect } from "react";
import Navbar from "./components/navbare/navbar";
import Intro from "./components/navbare/intro/intro"; 
import Register from "./components/src/login/register"; 
import Signup from "./components/src/login/Singup5"; 
import Se from "./components/navbare/SS/ss";
import Foo from "./components/src/component/foo.jsx";
import Home from "./Home";
import Home1 from "./Home1";
import Datatable from "./datatable.jsx";
import Start from "./start.jsx";
import Start1 from "./start1.jsx";
import Start2 from "./start2.jsx";
import Start3 from "./start3.jsx";
import  Create from "./components/src/users/create.js";
import  Qst from "./components/src/users/qst.jsx";
import  AddRemoveInputField from "./components/src/users/choi.jsx";
import  Create1 from "./components/src/users/create1.js";
import  Crud from "./components/src/users/CRUD.jsx";
import Sidebar from "./components/src/component/Sidebaree.jsx";
import Sidebare from "./components/src/users/Sidebareee.jsx";
import Login from "./components/src/login/Login";
import { Routes, Route , Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import {
  BrowserRouter as Router
 
} from "react-router-dom";

import axios from "axios";
function App() {

  const [categories, setcategories] = useState([])
 
  ////////
  const [users, setusers] = useState([])
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

  


  return (
   
    <div className="App">
     
      
       
    <div>
    <Router>
      <div>
        <nav>



        <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <img src={"./loo.gif"} alt="Logo" className="loog" width={100} height={100}  />
        <div className="n-name" color="--gray ">  medTech
        
        </div>
        
       
      </div>
      
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              
            <Link to="/"><h4> Home</h4> </Link>
             
            </li>
            <li>
            
            <Link to="/re"><h4> about</h4></Link>
            </li>
              
             
            <li>
            
            <Link to="/re"><h4> signin</h4></Link>
            </li>
            <li>
            <Link to="/log"><h4> login</h4></Link>
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>






       
 
          
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<Login />}>
          
          </Route>
          <Route path="/data" element={<> <Datatable />  </>}>
          
          </Route>
       
          <Route path="/cree" element={<Create />}>
          
          </Route>
          <Route path="/creee:id" element={<Qst/>}>
          
          </Route>
          <Route path="/regi" element={<Register />}>
          
          </Route>
          <Route path="/start" element={<><Sidebare /></>}>
          
          </Route>
          <Route path="/users"  element={<Register />}>
           
          </Route>
          <Route path="/star"  element={<Start />}>
           
           </Route>
           <Route path="/startt"  element={<><Home /> </>}>
           
           </Route>
          <Route path="/log"  element={<Login />}>
           
          </Route>
          <Route path="/Home"  element={<><Home />  </>}>
           
          </Route>
          <Route path="/qst/:id"  element={<><Start1 />  </>}>
           
           </Route>

           <Route path="/list/:select"  element={<><Start2 />  </>}>
           
           </Route>
           <Route path="/listt/:select"  element={<><Start3 />  </>}>
           
           </Route>
          
          <Route path="/Home1"  element={<><Home1 />  </>}>
           
           </Route>
          <Route path="/" element={<><Intro/><Se/> <Foo/></>}>
         
     
          </Route>

          <Route path="/ccc/:iid/:id" element={<>< AddRemoveInputField/></>}>
         
     
         </Route>
          <Route path="/re"  element={<Signup />}>
           
           </Route>
        </Routes>
      </div>
    </Router>
    



    
      
      
      
    </div>
   





 
    </div>
    


   
  );
}

export default App;
