import React, { Component } from "react";
import Track from "./Track";
class Tracks extends Component {
  state = { tracks: [] };
  constructor() {
    super();
    this.setState({
      tracks: [
        {
          Name: "xxx",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track1"
        },
        {
          Name: "YYY",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track2"
        },
        {
          Name: "YYY",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track3"
        }
      ]
    });
  }
  render() {
    let trackhtml = this.state.tracks.map(track => {
      return <Track trackdetails={track} />;
    });
    return <div>{trackhtml}</div>;
  }
}

export default Tracks;
