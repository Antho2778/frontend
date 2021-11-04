import React, { Component } from "react";
import axios from "axios";
import Navigation from "../Navigation";
import "../style/Contact.css"
import { Button, Form } from "react-bootstrap";


function Contact() {
  
    return (
      <div className='master_div'>
        <div className="mast_2">
        <div id="align">
          <h1 className="headTitle">Nous contacter</h1>
          <div className="contact_simple">
            <h3>Nos coordonnées</h3>
            <p>Nous sommes joignable au <br/>
              <span className="spanText">06.18.12.25.97</span>. <br/>
              ou par mail a l'adresse suivane : <br/>
              <a href="mailto: spher.eau.contact@gmail.com" className="mail_link"><span className="spanText">spher.eau.contact@gmail.com</span>.</a>
            </p>
            <p> Vous pouvez prendre contact via le formulaire, 
              nous analyserons votre demande et vous recontacterons dans les plus bref delais.  </p>
          </div>
          <div className="contact_form">
            <form id="Form_style" action ="Traitement.py" method="post">
              <p>
                <label>
                  <input type="radio" name= "Person" value="Mr" required/>
                  Mr
                </label>
                <label>
                  <input type="radio" name="Person" value="Mme" required/>
                  Mme
                </label>
              </p>
              <p>
                <label>Votre nom *</label>
                  <input type="text" name="first_name" required/>
              </p>
              <p>
                <label>Adresse e-mail *</label>
                  <input type="email" name="email" placeholder="Ex: jean1234@gmail.com" required />
              </p>
              <p>
                <label>Portable</label>
                  <input type="tel" name="phone" placeholder="Votre numéro"/>
              </p>
              <p>
                <label>Nature de votre demande </label>
                <select>
                  <option >Dépanage sanitaire</option>
                  <option >Dépanage chauffage</option>
                  <option >Remplacement équipement</option>
                  <option >Project de rénovation</option>
                  <option >Project de création</option>
                  <option >Autre demande</option>
                </select>
              </p>
              <p>
                <textarea name="message" sentences Length="200" placeholder="Écrivez votre message" />
                <button type="submit" >Send</button>
                <button type="reset">Reset </button>
              </p>
            </form>
          </div>
        </div>
        </div>
    </div>
    
    );
  }
  
  export default Contact;