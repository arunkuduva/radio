import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommentsHolderDelinker from "./Comments";
export default class CommentsHolder extends Component {
  state = { children: [] };
  //constructor() {}
  componentDidMount() {
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
        <CommentsHolderDelinker children={this.state.children} />
      </div>
    );
  }
}

// CommentsHolder.propTypes = {
//   children: PropTypes.array.isRequired
// };
