import React, { Component,setState,useEffect, useState } from "react";
import axios from "axios";
import "../style/Review.css"
import Navigation from "../Navigation";
import ReviewExtend from "../components/ReviewExtend";


class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      ReviewExtend: Array(9).fill(null),
      descriptionActive: null,
      windowDescription: false,
      activeItem: {
        last_name: "",
        date: "",
        description: "",
        rating: "",
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
      .get("/api/reviews/")
      .then((res) => this.setState({ reviews: res.data }))
      .catch((err) => console.log(err));
  };

  renderItems = () => {
    return this.state.reviews.map((item) => (
      <ul
        key={item.id}
        className="review_item"
        
      >
        <li>
          <span className={`todo-title mr-2`} lastName={item.date}>
            {item.date}
          </span>
        </li>
        <li>
          <span className={`todo-title mr-2`} lastName={item.last_name}>
            {item.last_name}
          </span>
        </li>
        <li>
          <span className={`todo-title mr-2`} lastName={item.rating}>
            {item.rating}
          </span>
        </li>
        <span></span>
        <button className="Button_description" lastName={item.id} 
        onClick = { () => this.openWindow(item.id) }>
            Voir plus 
        </button>
      </ul>
    ));
  };

  openWindow (id) {
    this.state.descriptionActive = id
    //this.setState({windowDescription: this.state.windowDescription = true})
    if (this.state.windowDescription == false) {
      this.setState({windowDescription: true})
    }else{
      this.setState({windowDescription: false})
    }
  }



renderSquare(id) {
  let review = this.state.reviews.find(element => element.id == id)
  return (
    <ReviewExtend
      value={review.description}
    />
  );
}
  

  render() {
    return (
      <div className='master_div'>
        <Navigation />
        <div className="mast_2">
          <div id="align">
            <h1>Les avis clients</h1>
            <div className="box_item">
              <div className="Item">
                {this.renderItems()}
              </div>
              {this.state.windowDescription && (
                <div className='Extend'>
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
  
export default Review;

/* un constructeur est une fonction qui appartient à une classe. Donc non. */
/* showDescriptionReview(item.id) */
/*  shortCircuitOperator// operation thernaire  menu ? blo : bla  es ce que menu est true ? si 
c'est true 11 sinon 2  */

/* let review = Object.values(this.state.reviews).find( reviews => {
      return reviews.id == id */
