import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
export default class Comments extends Component {
  //constructor() {}
  renderChildren = () => {
    if (typeof this.props.comments === "undefined") {
      // console.log("this.props.location.state.children");
      // console.log(this.props.location.state.children);
      return null;

      // this.props.location.state.comments.map(comment => (
      //   <div key={comment.id} className="comment">
      //     <span>{comment.content}</span>
      //     {comment.children && <Comments children={comment.children} />}
      //   </div>
      // ));
    } else {
      // console.log("type of this.props.children");
      // console.log(typeof this.props.children);
      return this.props.comments.map(comment => (
        <div key={comment.id} className="comment">
          <h2>{comment.name}</h2>
          <h3>{comment.body}</h3>
          <h4>{comment.email}</h4>
          {comment.children && <Comments children={comment.children} />}
        </div>
      ));
    }
  };
  render() {
    console.log("from comments");
    console.log(this.props);
    return (
      <div>
        <br />
        <br />
        <br />
        {this.renderChildren()}
      </div>
    );
    // return (
    //   <div className="comments">
    //     <br />
    //     <br />
    //     <br />
    //     <Link to="/">Home</Link>
    //     {this.props.location.state.children.length > 0 &&
    //       this.props.location.state.children.map(comment => (
    //         <div key={comment.id} className="comment">
    //           <span>{comment.content}</span>
    //           {comment.children && <Comments children={comment.children} />}
    //         </div>
    //       ))}
    //     {this.props.children.map(comment => (
    //       <div key={comment.id} className="comment">
    //         <span>{comment.content}</span>
    //         {comment.children && <Comments children={comment.children} />}
    //       </div>
    //     ))}
    //   </div>
    // );
  }
}

// Comments.propTypes = {
//   children: PropTypes.array.isRequired
// };
