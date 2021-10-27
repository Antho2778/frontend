import { Component } from "react";



class ReviewExtend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  } 
    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
}






export default ReviewExtend;