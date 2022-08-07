
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
const Crud1 = () => {
//////////////////
const {id} = useParams();  
const [br, setbr] = useState({
    br: ""
   });
 
  const [userr, setUser] = useState({
   
    iddd: ""
   });





    ////////////////////////
    const {users} = useParams();  
    let navigate =  useNavigate(); 
    const [categories, setcategories] = useState([])

    const userssss = localStorage.getItem('users');
    const [us, setUs] = useState({
   
      iddd: ""
     });
    const delete11 = (iid) => {
  
      us.iddd=iid;
  

   console.log(id);
   console.log("okkkk");
   console.log(us.iddd);
   console.log(us)
   let resultt = axios.post('http://localhost:8000/api/delete11', us)
   navigate("/qst/"+id);

  
   } 
  
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
            const us = await axios.get("http://127.0.0.1:8000/api/qst/")
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

<h2>liste des questions</h2>


<Link to={'/creee'+id} className="btn btn-info" >ajouter</Link>
<table className="table">
                <thead>
                    <tr>
                        <th>id{id}</th>
                        <th>Name</th>
                        <th>description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{
                categori.map((categorie, i)=>{ if(id==categorie.category_id){
         return (
                        <tr >
                            <td>{categorie.qst}</td>
                            <td>{categorie.type_qst}</td>
                            <td></td>
                            <td>
                                <Link className="btn btn-info" >Edit</Link>&nbsp;
                                <Link className="btn btn-primary" >View</Link>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => delete11 (categorie.id)}
                                   
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
export default Crud1;