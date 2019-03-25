import React, { Component } from "react";
import Comments from "./Comments";
import axios from "axios";
export default class CommentsHolder extends Component {
  state = { postId: null };
  //constructor() {}
  componentDidMount() {
    // console.log("CommentsHolder componentDidMount this.props");
    // console.log(this.props);
    axios
      .get(
        "https://jsonplaceholder.typicode.com/comments?postId=" +
          this.props.blogid
      )
      .then(res => {
        console.log("comments holder component did mount");
        console.log(res.data);
        this.setState({
          comments: res.data
        });
      });
    //  this.setState({ children: this.props.location.state.children });
  }
  render() {
    //console.log(this.props.location.state);
    return (
      <div className="CommentsHolder">
        <br />
        <br />
        <br />

        <div>comments holder</div>

        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

// CommentsHolder.propTypes = {
//   children: PropTypes.array.isRequired
// };
