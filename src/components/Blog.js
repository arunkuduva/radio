import React, { Component } from "react";
import axios from "axios";
import CommentsHolder from "./CommentsHolder";
import { Link } from "react-router-dom";

class Blog extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    // console.log("inside Blog component did mount");
    // console.log(this.props);
    let id = this.props.match.params.blog_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      //console.log(res.data);
      this.setState({
        blog: res.data
      });
    });
  }
  renderBlog = () => {
    if (typeof this.state.blog === "undefined") {
      return null;
    } else {
      return (
        <div>
          <h1>{this.state.blog.id}</h1>
          <h2>{this.state.blog.title}</h2>
          <h3>{this.state.blog.body}</h3>
        </div>
      );
    }
  };

  renderComments = () => {
    if (typeof this.state.blog === "undefined") {
      return null;
    } else {
      return <CommentsHolder blogid={this.state.blog.id} />;
    }
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Link to="/">Home</Link>
        <h3>{this.renderBlog()}</h3>
        <div>
          <h3>{this.renderComments()}</h3>
        </div>
      </div>
    );
  }
}

export default Blog;
