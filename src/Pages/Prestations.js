import React, { Component } from "react";
import axios from "axios";
import Navigation from "../Navigation";
import "../style/Prestations.css"
import { SwitchTransition, CSSTransition } from "react-transition-group";

class Prestations extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewCompleted: false,
        prestations: [],
        modal: false,
        activeItem: {
          title: "",
          description: "",
          completed: false,
        },
      };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
    axios
        .get("/api/prestations/")
        .then((res) => this.setState({ prestations: res.data }))
        .catch((err) => console.log(err));
    };
  
    renderItems = () => {
        return this.state.prestations.map((item) => (
          <li
          key={item.id}
          className="Title_presta"
          onClick = {() => this.showDescription(item.id)}
          >
              <span
                className="Span_title_text"
                title = {item.description}
              >
                  {item.title}
              </span>
              <div className="Voile_slider"><p className="describe_slider">{item.description}</p></div>
          </li>
          
          
        ));
      };
     
    showDescription= (id) => {
      let prestation = Object.values(this.state.prestations).find( prestation => {
        return prestation.id == id
      } )
      alert(prestation.description)
    }

    render() {
        return (
          <div className="master_div">
            <div className="mast_2">
              <div id="align">
                <div className="bg_title_presta">
                  <h1 className="title_first">Prestations</h1>
                </div>
                <div className="row">
                  <section className="Sect_01">
                    <div className="Div_para_sect">
                      <h2 className="title_sect_01">Possibilités Étandu</h2>
                      <div className="para_sect_01"><p>Sphér'eau bénéficie d'une expérience concréte sur chaque branche composant la plomberie en général.<br/>
                      Du petit au gros chantiers, du plus compliqué au plus simple, nous réalisons vos demandes. <br/>
                      Voici les prestations sur lesquel nous intevenons souvent :  </p></div>
                    </div>
                  </section>
                  <ul className="first_list_presta" >
                    {this.renderItems()}
                  </ul>
                  <section>
                    <div className="Div_para_sect">
                      <h2 className="title_sect_01">secteurs d'intervention</h2>
                      <div className="para_sect_01"><p>Spher'eau intervient principalement sur 3 grandes régions : <span className="important">l'Eure (27)</span>, 
                      <span className="important"> l'Ile de france</span> et <span className="important">l'Aube (10)</span></p></div>
                    </div>
                    <aside>

                    </aside>
                  </section>
              </div>
            </div>
          </div>
        </div>
        );
      }
    
}



export default Prestations;


/* méthode componentDidMount : permet de modifier un elements au montage du composant */ 