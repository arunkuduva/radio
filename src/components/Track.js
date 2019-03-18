import React, { Component } from "react";

class Track extends Component {
  render() {
    console.log("inside Track component");
    console.log(this.props);
    return <div>{this.props.trackdetails.name}</div>;
  }
}

export default Track;
