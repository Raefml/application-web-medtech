import { useState } from "react"
import "./choi.css"
import axios from 'axios'
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'
import {  useEffect } from "react";
import {   useParams } from "react-router-dom";
function AddRemoveInputField({ filteration }){
    let {iid} = useParams();  
    const [myArray, setMyArray] = useState([]);
    const [Array, setArray] = useState([]);
 let [names, setNames] = useState([]);

let tt=[];

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
  let [p, setp] = useState([{
  

    } ]);
    const {id} = useParams();  
   
    const addInputField = ()=>{

        setp([...p, {
           
        } ])

      console.log(p);
      let n;
      n=p.length;
      console.log(n);
      Array.push(p[n-1].proposition);
      Array.push(p[n].proposition);
      
      console.log(n);
     
      
     
    }
    const removep = (index)=>{
        const rows = [...p];
        rows.splice(index, 1);
        setp(rows);
   }
  
  
    async function send()
    {
        let n;
        n=p.length;
        console.log(n);
        Array.push(p[n-1].proposition);
        console.log(Array); 
    console.log(iid);
  
    console.log(p);
    setNames([...names, "rrrrr"]);
   
    tt.push(iid);
    console.log( Array);
    console.log( tt);
    myArray.push(iid);
    myArray.push(Array);
    setNames(names => [...names,iid] );
      console.log(myArray); 
   
    console.log(p);
    let result = await axios.post("http://localhost:8000/api/cchoi", myArray);  
    navigate("/qst/"+id);
   }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...p];
    list[index][name] = value;
    setp(list);
    
 
 
}

    return(
    <div className="vvv">
       
         
      
        <div className="container">
            <div className="bbb">
            <div className="row">
                <div className="col-sm-8">
                  {
                      p.map((data, index)=>{
                          const {proposition, emailAddress, salary}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)}  value={proposition} name="proposition" className="form-control"  placeholder="Full Name" />
                    </div>
                    </div>
                   
                    <div className="col">
                

                    <div className="ccc">
                 {(p.length!==1)? <button className="btn btn-outline-danger" onClick={removep}>x </button>:''}
                 </div>
               
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">
<div className="cc">
    
                    <button className="btn btn-outline-success " onClick={addInputField}>Add New </button>
                    <button type="submit" class="btn btn-outline-primary " onClick={send}>Ajouter</button> 
                    </div>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">
                </div>
                </div>
            </div>
      
            </div>
    )
}
export default AddRemoveInputField