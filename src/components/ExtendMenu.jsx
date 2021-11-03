import { Component } from "react";



class ExtendMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  } 
    render() {
      return (
        <li className="square" >
          {this.props.value}
        </li>
      );
    }
}






export default ExtendMenu;