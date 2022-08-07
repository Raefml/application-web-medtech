import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Loginn.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    
    <div classnameName="Login">
    
    
     <form>
     
     <h2 class="form-title">Sign up</h2>
    
   
    
    <div class="inputs">
      <input type="email" placeholder="Email"  className="lll"/> <br/>
      <input type="password"  type="password" placeholder="Mot de passe" className="ll"/>
    </div>
    
    <p class="inscription">Je n'ai pas de <span>compte</span>. Je m'en <span>crée</span> un.</p>
    <div align="center">
      <button type="submit">Se connecter</button>
    </div>
  </form>
    </div>
   
  );
}