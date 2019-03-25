import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogHome extends Component {
  state = { children: [] };
  //constructor() {}
  componentDidMount() {
    // console.log("CommentsHolder componentDidMount this.props");
    // console.log(this.props);
    // this.setState({ children: this.props.location.state.children });
  }
  render() {
    let path = "/blog/" + this.props.blog.id;
    //console.log(this.props.location.state);
    return (
      <Link
        to={{
          pathname: path
        }}
      >
        <div className="CommentsHolder">
          <div>{this.props.blog.id}</div>
          <div>{this.props.blog.body}</div>
          <br />
        </div>
      </Link>
    );
  }
}

// CommentsHolder.propTypes = {
//   children: PropTypes.array.isRequired
// };
