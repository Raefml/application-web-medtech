import { useState } from "react"
import "./choi.css"
import axios from 'axios'
import {Formik , Field} from "formik";
import React, { Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import {  useEffect } from "react";
import {   useParams } from "react-router-dom";
function List(){
    let {iid} = useParams();  
    const {id} = useParams();  
    const {select} = useParams();  
    let navigate =  useNavigate(); 
    const [categori, setcategori] = useState([])
    const [categorii, setcategorii] = useState([])
    const [State, setState] = useState([])
    const [Statee, setStatee] = useState([])
    let sss=[""];
    const [rep, setrep] = useState([]);
    const [myArray, setMyArray] = useState([]);
    const [title, setTitle] = useState([])
    const [titlee, setTitlee] = useState()
const [print,setPrint]=useState(false)
const [categories, setcategories] = useState([])
useEffect(()=>{
  async function getAllusers(){
    try {
      const users = await axios.get("http://127.0.0.1:8000/api/categoryee/")
      console.log(users.data)
      setcategories(users.data)
    } catch (error) {
     
    }
  }
  getAllusers
  ()
}, [])
useEffect(()=>{
  async function getAllusers(){
    try {
      const us = await axios.get("http://127.0.0.1:8000/api/categ/")
 
      setcategorii(us.data)
    } catch (error) {
    
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

      

      function aff(id){
      
        let dd=id.replace("]", '');
       let  ddd=dd.replace("[", '');
   

const myyArray = ddd.split(',');



var length = myyArray.length;



return ( myyArray)

      }

     function renderItem(categorie)
      {
        if(categorie.type_qst=='checkbox')
        {
return

        }
      }
      const [message, setMessage] = useState('');
      const [userinfo, setUserInfo] = useState({
        response: [],
      
      });
      const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { response } = userinfo;
        
     
        
       
         
        // Case 1 : The user checks the box
        if (checked) {
          setrep([...response, value])
          
          setUserInfo({
            response: [...response, value],
           
          });
        }
      
        // Case 2  : The user unchecks the box
        else {
          setUserInfo({
            response: response.filter((e) => e !== value),
          
          });
        }
      };
     
     
     function seen(e){
     
      setTitle(e)
       



     }
     let [p, setp] = useState([{
  

    } ]);
   
   
    const addInputField = ()=>{

        setp([...p, {
           
        } ])

     
      let n;
      n=p.length;
      
      Array.push(p[n-1].proposition);
      Array.push(p[n].proposition);
      
      
     
      
     
    }
      
     const handleChangee = (e, evnt)=>{
   
      const { name, value } = evnt.target;
      const list = [...p];
      list [e] = value;
      setp(list);
      setTitle(list )
      console.log(title)
   
  }
  
  function setValue(event) {
    const name = event.target.name;
    const type = event.target.type;
    let value = '';

    
      value = event.target.value;

    setState({
      [name]: value
    });
  }
  
  function handleChangeee(event){
    
    setState({
      // Computed property names
      // keys of the objects are computed dynamically
      
      [event.target.name] : event.target.value
    })
    
    setTitle((State) => {
      return {
        ...State,   // Spread Operator               
        [event.target.name] : event.target.value
        
      }
    })
    setrep(event.target.name)
  }
  var ff;
  async function san(){
    setTitle((State) => {
      return {
        ...State,   // Spread Operator               
        ["id"] :select
        
      }
    })
    console.log(title)
    console.log(select)
let resultt = await axios.post("http://localhost:8000/api/reppp",title);
navigate("/listt/"+select);
  }
  categorii.map((cate, i)=>{ if(cate.id===select){
  
    return (           
    setStatee(cate.name)           
     )        
                 
              }})
 
  
 
  
   
  
    return(
    <div className="vvv">
       
      
         


      
     
      <h2>lissttttt1111 {select} {Statee}  </h2>
      <table class="table table-striped">
  <thead>
    <tr>
     
      <th scope="col">question</th>
     
      <th scope="col">reponce</th>
    </tr>
  </thead>
  
  <tbody>
    
   

  
       
       {
                categori.map((categorie, i)=>{ if((select==categorie.category_id )&&(categorie.type_qst=='checkbox')){
         return (
                        <tr >
                            <td>{categorie.qst} </td>
                            <td>
                           
                         
                        
                      { 
                        aff(categorie.checkbox_pro).map((cat, i)=>{ 
                         
                          return ( <>
                          <div className="cbb">
                          <input type={categorie.type_qst} id={(categorie.id)} name={(categorie.qst)}   value={cat} onChange={handleChangeee}  required  />
                          {cat}
                        
                          
                            
                            </div>
                            </>
                            )
                           
                   })}
                              </td> 
                
                         
  
                        </tr>
                    );}
                })}
                    
        
 
   
        
      {
                categori.map((categorie, i)=>{ if((select==categorie.category_id )&&(categorie.type_qst=='text')){
         return (
                        <tr >
                            <td>{categorie.qst} </td>
                            <td>
                           
                        
                            <input type={categorie.type_qst} id={(categorie.id)} name={(categorie.qst)} onChange={handleChangeee}    className="az"   required  />
          
       
          
          
                              </td> 
                             
                             
                          
                      
                     
  
                        </tr>
                    );}
                })}
     

  
  
   
  
     <tr>
     
     
     <td><button type="submit"  onClick={san}   class="btn btn-md btn-primary">next</button></td>
     
   </tr>

  
  </tbody>
</table>

            </div>
    )
}
export default List