import React, { Component } from "react";
import axios from "axios";
import Navigation from "../Navigation";
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
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick = {() => this.showDescription(item.id)}
          >
            <span
              className={`todo-title mr-2`}
              title = {item.description}
            >
              {item.title}
            </span>
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
            <Navigation />
            <div className="mast_2">
              <div id="align">
                <h1 className="text-white text-uppercase text-center my-4">Prestations</h1>
                <div className="row">
                  <ul className="list-group list-group-flush border-top-0" >
                    {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
        </div>
        );
      }
    
}



export default Prestations;


/* méthode componentDidMount : permet de modifier un elements au montage du composant */ 