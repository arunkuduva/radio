import React, { Component } from "react";
import Track from "./Track";
class Tracks extends Component {
  state = { tracks: [] };
  
  constructor() {
    super();
  }

  componentDidMount(){
    this.setState({
      tracks: [
        {
          name: "xxx",
          album:"xxxalbum",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track1",
          avgrating:3.5
        },
        {
          name: "YYY",
          album:"YYYalbum",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track2",
          avgrating:4.1
        },
        {
          name: "ZZZ",
          album:"ZZZalbum",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track3",
          avgrating:1.2
        }
      ]
    });
  }
  render() {
    let trackhtml = this.state.tracks.map(track => {
      return <Track trackdetails={track} />;
    });
    console.log("inside Tracks component");
    console.log(trackhtml)
    return <div>{trackhtml}</div>;
  }
}

export default Tracks;
