import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navigation from "../Navigation";
import ReviewExtend from "../components/ExtendMenu";
import "../style/Realisation.css"
import ExtendMenu from "../components/ExtendMenu";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { useState } from "react";

/*
function realisation() {
    return (
        <div className='Master_div'>
            <p>Bienvenue dans realisation</p>
        </div>
    )
}
*/

class Realisation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewCompleted: false,
        realisations: [],
        descriptionActive: null,
        windowDescription: false,
        activeItem: {
          title: "",
          description: "",
          lieu: "",
          date: "",
          photo_before:"",
          photo_after: "",
        },
      };
    }

    displayDescription(description){
        return <p>{description}</p>
      }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
    axios
        .get("/api/realisations/")
        .then((res) => this.setState({ realisations: res.data }))
        .then(res => console.log(res))
        .catch((err) => console.log(err));
    };
  
    renderItems = () => {
        return this.state.realisations.map((item) => (
          <ul
            key={item.id}
            className="list-group-item"
          >
            <li
              className="listItem"
              title = {item.title}
            >
              {item.title}
            </li>
            <li
              className="listItem"
              title = {item.lieu}
            >
              {item.lieu}
            </li>
            <div className="BtnMore" lastName={item.id} 
            onClick={() => this.openWindow(item.id)}
            >
                Afficher
            </div>
          </ul>
        ));
      };

      openWindow (id) {
        this.state.descriptionActive = id
       // let divForm = document.getElementById("divforContact")
        if (this.state.windowDescription == false || this.state.descriptionActive == id) {
          this.setState({windowDescription: true})
          this.setState({windowDescription: () => this.renderSquare(id)})
         // divForm.style.opacity='1'
         // divForm.style.transition='1s all ease'
         // divForm.style.display = 'Flex'
        }else{
          <NavLink exact to="/" />
        }
      }

      closeWindow() {
       // let divForm = document.getElementById("divforContact")
        this.setState({windowDescription: false})
       // divForm.style.opacity='0'
       // divForm.style.transition='1s all ease'
       // divForm.style.display='none'
      }
    
    
      renderSquare(id) {
        let realisation = this.state.realisations.find(element => element.id == id)
        return (
            <ul className="itemSlider">
                <div id="btn_exit" onClick={() => this.closeWindow(id)}>Fermer</div>
                <li className="liItemDiv"><p className="paraDiv">{realisation.description} à {realisation.lieu}.
                </p></li>
                <div className="alignPicture">
                <li><img className="photos" alt={realisation.photo_before} src={realisation.photo_before}/></li>
                <li><img className="photos" alt={realisation.photo_after}  src={realisation.photo_after}/></li>
                </div>
                <li className="liItemDiv"><p className="paraDiv">Les travaux ont été réalisé le {realisation.date}.</p></li>
            </ul>  
            
          );
      }


    render() {

        return (
        <div className="master_div">
            <div className="mast_2">
                <div id="align">
                  <div className="bg_title_rea">
                    <h1 className="title_first">Réalisations</h1>
                  </div>
                  <div className="divPara_front">
                  <h2 className="titleFront">Tout commence par une envie moderne</h2>
                  <p className="paraFront">Vos idées , nos compétences. <br/> 
                  Ainsi nous vous aidons a réalisé vos projets ! </p>
                  <p className="para2Front"></p>
                  </div>
                  <div className="box_item">
                      <div className="ItemDiv">
                          {this.renderItems()}
                          {this.state.windowDescription && (
                          <div className="Extend"  >
                              <p>{this.renderSquare(this.state.descriptionActive)}</p>
                          </div>
                        )}
                        </div>
                    </div>
                    <div className="divPara_bottom">
                      <h2 className="titleParaBottom"></h2>
                      <p className="paraBottom"></p>
                    </div>
                </div>
            </div>
        </div>
        );
      }
    }



export default Realisation;

/* onClick = { () => this.openWindow(item.id)} */

/*  <img className="photos" src = {item.photo_before} />
    <img className="photos" src = {item.photo_after} /> */ 
    /* `id${item}` */


/* 

 
 <div id="divforContact">
    <div className="Anim-cercle"></div> 
      <h2 id="paraContact">Envie de réaliser un projet ?</h2>
      <a id="linkContact"><NavLink exact to="/contact" className="pathContact">
      Prendre contact
      </NavLink></a>
 </div>



*/