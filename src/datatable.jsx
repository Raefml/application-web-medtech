import { Routes, Route , Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from "react";
import React from "react";
import {
  BrowserRouter as Router
 
} from "react-router-dom";

import axios from "axios";
function Table() {

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
    
    <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">email</th>
       
      </tr>
    </thead>
    <tbody>{
    categories.map((categorie, i)=>{
         return (
      <tr>
        <th scope="row">{categorie.id}</th>
        <td>{categorie.name}</td>
        <td> {categorie.email}</td>
        
      </tr>
     );
     })
     
    }
    </tbody>
  </table>  


  );
}

export default Table;

