import { Component } from "react";



class ReviewExtend extends Component {
    constructor(props) {
        super(props);
        this.state = {
          reviews: [],
          windowDescription: false,
          activeItem: {
            last_name: "",
            date: "",
            description: "",
            rating: "",
          },
        };
}






export default reviewExtend;