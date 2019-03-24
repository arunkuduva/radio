import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";
export default class CommentsHolder extends Component {
  state = { children: [] };
  //constructor() {}
  componentDidMount() {
    console.log("CommentsHolder componentDidMount this.props");
    console.log(this.props);
    this.setState({ children: this.props.location.state.children });
  }
  render() {
    //console.log(this.props.location.state);
    return (
      <div className="CommentsHolder">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>comments holder</div>

        <Link to="/">Home</Link>
        <Comments children={this.state.children} />
      </div>
    );
  }
}

// CommentsHolder.propTypes = {
//   children: PropTypes.array.isRequired
// };
