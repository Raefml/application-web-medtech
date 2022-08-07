
  
  import { useState, useEffect } from "react";
  import Card from 'react-bootstrap/Card';
  import "./sidebar.scss";
import axios from "axios";
  import { Link } from "react-router-dom";
  import { useContext } from "react";
  import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
  
  const Widget  = () => {
    const [cat, setcat] = useState([])
    const [users, setusers] = useState("")
    useEffect(()=>{
      async function getAllusers(){
        try {
          const users = await axios.get("http://127.0.0.1:8000/api/categoryeee/")
          console.log(users.data)
          setcat(users.data)
        } catch (error) {
          console.log(error)
        }
      }
      getAllusers
      ()
    }, [])
    return (
    
      <Card>
      <Card.Body>
             
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">number of users</Card.Subtitle>
        <Card.Text>
         <h1>{cat}</h1>
        </Card.Text>
        
      </Card.Body>
    </Card>
    
  
    );
  };
  
  export default Widget ;