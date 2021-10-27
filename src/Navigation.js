
import React from "react";
import { NavLink } from "react-router-dom";
import "./style/Navigation.css"
import logo from "./assets/logo.png"
import logo_title from "./assets/logo_title.png"
import { Component } from "react";


class Navigation extends Component {

  menuExtend = () => {

  }
  render () {
    return (
  
        <div className='master_nav_div'>
          <div className="fixed_nav">
          <div className="logo_primary">
            <img className="logo" src={logo}/>
            <h1 className="title">
            Spher'<span className="Span_txt">eau</span>
            </h1>
          </div>
          <div className="nav_primary">
              <ul id='liste_main'>
              <li className='liste_item'>
                  <NavLink exact to="/" className='link' activeClassName='navActive' >
                    <i className='icon'></i>
                    <span>Acceuil</span>
                  </NavLink>
                </li>
                <li className='liste_item'>
                  <NavLink exact to="/Prestations" className='link' activeClassName='navActive'>
                    <i className='icon'></i>
                    <span>Prestations</span>
                  </NavLink>
                </li>
                <li className='liste_item'>
                  <NavLink exact to="/Realisations" className='link' activeClassName='navActive'>
                    <i className='icon'></i>
                    <span>Realisations</span>
                  </NavLink>
                </li>
                <li className='liste_item'>
                  <NavLink exact to="/Review" className='link' activeClassName='navActive'>
                    <i className='icon'></i>
                    <span >Avis</span>
                  </NavLink>
                </li>
                <li className='liste_item'>
                  <NavLink exact to="/Contact" className='link' activeClassName='navActive'>
                    <i className='icon'></i>
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
  
  export default Navigation;

  /* target="_blank" rel='noopener noreferrer" (Anti virus)*/ 