import React, { Component } from "react";
import axios from "axios";
import Navigation from "../Navigation";
import ReviewExtend from "../components/ExtendMenu";
import "../style/Realisation.css"
import ExtendMenu from "../components/ExtendMenu";

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
              title = {item.date}
            >
              {item.date}
            </li>
            <li
              className="listItem"
              title = {item.lieu}
            >
              {item.lieu}
            </li>
            <button className="Button_more" lastName={item.id} 
            onClick = { () => this.openWindow(item.id)}
                  >
                afficher/masquer
            </button>
          </ul>
        ));
      };

     
      openWindow (id) {
        this.state.descriptionActive = id
        if (this.state.windowDescription == false) {
          this.setState({windowDescription: true})
        }else{
          this.setState({windowDescription: false})
        }
      }

      renderSquare(id) {
        this.state.descriptionActive = id
        let realisation = this.state.realisations.find(element => element.id == id)
        return (
          <ul>
              <li>{realisation.description}</li>
              <li><img className="photos" src={realisation.photo_before}/></li>
              <li><img className="photos" src={realisation.photo_after}/></li>
          </ul>  
          
        );
      }
        
    render() {
        return (
        <div className="master_div">
            <Navigation />
            <div className="mast_2">
                <div id="align">
                    <h1 className="text-white text-uppercase text-center my-4">Realisation</h1>
                    <div className="box_item">
                        <div className="Item">
                            {this.renderItems()}
                        </div>
                        {this.state.windowDescription && (
                        <div className="Extend" >
                            <p>{this.renderSquare(this.state.descriptionActive)}</p>
                        </div>
                        )}
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
