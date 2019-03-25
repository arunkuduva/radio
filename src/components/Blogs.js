import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import BlogHome from "./BlogHome";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

class Blogs extends Component {
  state = {
    blogs: [],
    selectedBlog: null
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(res => {
      console.log(res.data.slice(0, 10));
      this.setState({
        hasMore: true,
        blogs: res.data.slice(0, 10)
      });
    });
    // this.setState({
    //   hasMore: true,
    //   blogs: [
    //     {
    //       content: "this is a samploe blog1 ",
    //       url: "www.chicagotamilradio.com/blog1"
    //     },
    //     {
    //       content: "this is a samploe blog2 ",
    //       url: "www.chicagotamilradio.com/blog2"
    //     },
    //     {
    //       content: "this is a samploe blog3 ",
    //       url: "www.chicagotamilradio.com/blog3"
    //     },
    //     {
    //       content: "this is a samploe blog4 ",
    //       url: "www.chicagotamilradio.com/blog4"
    //     },
    //     {
    //       content: "this is a samploe blog5 ",
    //       url: "www.chicagotamilradio.com/blog5"
    //     }
    //   ]
    // });
  }
  linkClicked = () => {
    console.log("link clicked");
  };

  fetchMoreData = () => {
    //   const dataLength= this.state.albums.length
    if (this.state.blogs.length >= 30) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        blogs: this.state.blogs.concat(this.state.blogs)
      });
    }, 500);
  };

  onBlogSelect = Blog => {
    //console.log("from the app ", Album);
    this.setState({ selectedBlog: Blog });
  };
  render() {
    return (
      <Segment>
        <div>
          <Link
            onClick={this.linkClicked()}
            to={{
              pathname: "/blog",
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
            <div>Blog Service</div>
          </Link>
          <InfiniteScroll
            dataLength={this.state.blogs.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            height={400}
            width={300}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {this.state.blogs.map(blog => {
              return <BlogHome blog={blog} />;
            })}
          </InfiniteScroll>
        </div>
      </Segment>
    );
  }
}

export default Blogs;
