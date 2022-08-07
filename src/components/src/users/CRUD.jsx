
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'
import { Routes, Route , Link} from "react-router-dom";
import { useState, useEffect } from "react";
import {   useParams } from "react-router-dom";
const Crud = () => {
//////////////////
const [br, setbr] = useState({
    br: ""
   });
 
  const [userr, setUser] = useState({
   
    iddd: ""
   });
   let navigate =  useNavigate();  
const delete1 = (id) => {
  
    userr.iddd=id;

 console.log(id)
 console.log(id)
 let t=id


 let resultt = axios.post('http://localhost:8000/api/delete01', userr)
  
 console.log(id)
 window.location.reload(false);
 window.location.reload(false);

 } 

 const qst = (id) => {
    console.log(id)
   
   
    navigate("/qst/"+id);
 }



    ////////////////////////
    const {users} = useParams();  
    const [categories, setcategories] = useState([])

    const userssss = localStorage.getItem('users');

   
  
    const [categori, setcategori] = useState([])

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
    return (
<div className="Crud">

<h2>liste des categories</h2>
<Link to={'/cree'} className="btn btn-info" >ajouter</Link>
<table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{
                categori.map((categorie, i)=>{ if(idd==categorie.user_id){
         return (
                        <tr >
                            <td>{categorie.id}</td>
                            <td>{categorie.name}</td>
                            <td>{categorie.description}</td>
                            <td>
                             <button type="button" className="btn btn-info"   onClick={() => qst(categorie.id)}>Edit</button>
                                <Link className="btn btn-primary" >View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"  onClick={() => delete1(categorie.id)}
                                   
                                    >Delete</button>
                            </td>
                        </tr>
                    );}
                })}
                </tbody>
                </table>
</div>
    );
};
export default Crud;