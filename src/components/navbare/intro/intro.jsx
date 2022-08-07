import React, { useContext } from "react";
import "./intro.css";
import { Routes, Route , Link} from "react-router-dom";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  
  

  return (
   
    <div className="Intro" id="Intro" style={{ backgroundImage: "url(about-shape1.png)"  }}>
      {/* left name side */}
   
    
      
    

      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span >medTech</span>
          <span>L’intelligence artificielle au service du diagnostic médical
</span>
          <span>
          L’intelligence artificielle en médecine consiste à utiliser des modèles d’apprentissage automatique pour rechercher des données médicales et découvrir des informations permettant d’améliorer les résultats en matière de santé
          </span>
        </div>
        <span className="log">
          
          <Link to="/re"> <button className="button aa">sign in</button> 
         </Link>
          
         <Link to="/log"><button className="button aa">login
         
         </button></Link>
         </span>
        {/* social icons */}
        <div className="i-icons">
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
      <img src="min.png" alt="" className="doctor" />
        {/* animation */}
        

       
        

        
       

      </div>
      
    </div>
     
     
  );
};

export default Intro;