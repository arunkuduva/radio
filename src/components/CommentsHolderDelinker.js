import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";
export default class CommentsHolderDelinker extends Component {
  state = { children: [] };
  //constructor() {}
  componentDidMount() {
    this.setState({ children: this.props.location.state.children });
  }
  render() {
    //console.log(this.props.location.state);
    return (
      <div className="CommentsHolder">
        <Comments children={this.state.children} />
      </div>
    );
  }
}

// CommentsHolder.propTypes = {
//   children: PropTypes.array.isRequired
// };
