import React, { Component } from "react";
import { Link } from "react-router-dom";
class Blog extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: `/blogs`,
          state: {
            children: [
              {
                content: "level 1",
                children: [
                  { content: "level 1.1" },
                  { content: "level 1.2" },
                  { content: "level 1.3" }
                ]
              },
              {
                content: "level 2",
                children: [
                  { content: "level 2.1" },
                  { content: "level 2.2" },
                  { content: "level 2.3" }
                ]
              },
              { content: "level 3" }
            ]
          }
        }}
      >
        <div style={{ margin: "30px" }}>Blog Service</div>;
      </Link>
    );
  }
}

export default Blog;
