import React, { useContext } from "react";
import "./foo.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Routes, Route , Link} from "react-router-dom";
const Foo = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  
  

  return (
  
  
    <footer class="bg-white">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3" />
          <p class="font-italic text-muted mb-4">  L’intelligence artificielle en médecine consiste à utiliser des modèles d’apprentissage automatique pour rechercher des données médicales et découvrir des informations permettant d’améliorer les résultats en matière de santé</p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">SERVICES</a></li>
            <li class="mb-2"><a href="#" class="text-muted">contact</a></li>
            <li class="mb-2"><a href="#" class="text-muted">address</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Our Blog</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Wishlist</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Our Products</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
          <h1 class="text-muted mb-4">L’intelligence artificielle au service du diagnostic médical</h1>
          <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0" />
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div class="bg-light py-1">
      <div class="container text-center">
        <p class="text-muted mb-0 py-1 mb-4">© 2022  All rights reserved.</p>
      </div>
    </div>
  </footer>
     
  );
};

export default Foo ;