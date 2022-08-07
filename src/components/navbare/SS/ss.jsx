import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./ss.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Se = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  
  

  return (
    
    
    <div className="seven" ><h1 >our services </h1>
    <br />
    
    <div/>
    <div className="thirteen">
    <div className="services" id="services" style={{ backgroundImage: "" }}>
    
    <Card style={{ width: '18rem'   }} className="2block-example border border-primary">
      <Card.Img variant="top" src="./cc.png" className="im" width="180px" height="120px"  style={{width: '45%'   }}  />
      <Card.Body>
        <Card.Title><h1>Cardiology</h1></Card.Title>
        <Card.Text>
          Some quick exampldfqfvqve text to build on tfefezfzhe card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
       

      </Card.Body>
    </Card>
   
      {/* right */}
      <div className="cards">
        {/* first card */}
      <div  id="root"></div>
        {/* second card */}
        <div className="n2" > 





        <Card style={{ width: '18rem', height: '20rem ' }} className="2block-example border border-primary">
      <Card.Img  variant="top" src="./dna.png" width="110px" height="120px" className="im5"  style={{width: '70%', marginleft:'104px ' }} />
      <Card.Body className="nn2">
        <Card.Title><h1>Neurology</h1></Card.Title>
        <Card.Text>
          Some quick exampldfqfvqve text to build on tfefezfzhe card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
       

      </Card.Body>
    </Card>



        
      
    </div>
        {/* 3rd */}
        <div className="n3" > 
        <Card style={{ width: '18rem'   }} className="2block-example border border-primary">
      <Card.Img  variant="top" src="./ren.png" width="110px" height="120px" className="im"  style={{width: '45%', marginleft:'104px ' }} />
      <Card.Body>
        <Card.Title><h1>nephrology</h1></Card.Title>
        <Card.Text>
          Some quick exampldfqfvqve text to build on tfefezfzhe card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read more</Button>
       

      </Card.Body>
    </Card>
    </div>
    <br />
    <div className="n55" > 
       
    </div>
    </div>
      </div>
    
      </div>
      <div className="df">
       <div className="seven" ><h1 >our services </h1>
       </div>
    </div>
    </div>
  );
};

export default Se;