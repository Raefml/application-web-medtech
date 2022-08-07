import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeartbeat } from 'react-icons/fa';

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <img src={"./loo.gif"} alt="Logo" className="loog" width={100} height={100}  />
        <div className="n-name" color="--gray ">  medTech
        
        </div>
        
       
      </div>
      
      {/* right */}
      <div className="n-right">
        <div className="n-list" style="
    margin-left: 178px;">
          <ul className="zz" style={{ listStyleType: "none" }}>
            <li className="kk">
              
                Home
             
            </li>
            <li>
                Serivces
             
            </li>
            <li>
                mmm
            </li>
            <li>
                mmmmm
            </li>
            <li>
                mmmm
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;