import React, { Component } from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
const paragraph = require("./assets/Desert.jpg");
class TrackSongs extends Component {
  state = {
    songs: [
      {
        name: "yaanji",
        singers: "Anirudn and some lady",
        src: "./assets/sound1.mp3"
      },
      {
        name: "sakkarak",
        singers: "SPB and Janaki",
        src: "./assets/sound2.mp3"
      },
      {
        name: "Sambo",
        singers: "Yesudas",
        src: "./assets/sound3.mp3"
      }
    ],
    visible: ""
  };

  componentDidMount() {
    this.setState({ visible: "none" });
    console.log("i am inside componentdidmount of TrackSongs");
  }
  componentWillUnmount() {
    console.log("i am inside componentWillUnmount of TrackSongs");
  }
  componentWillUpdate() {
    /// fetch the API call to set the state of the songs by checking the this.props.songs.name
    console.log("i am inside componentDidUpdate of TrackSongs");
  }

  render() {
    if (this.props.songs != null) {
      console.log(this.props.songs);
      const songHTML = this.state.songs.map(song => {
        return (
          <div>
            <div>{song.name}</div>
            <audio ref="audio_tag" src={song.src} controls autoPlay />
          </div>
        );
      });
      return <div>{songHTML}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
  // render() {
  //   return (
  //     <div>
  //       <div
  //         style={{
  //           Color: "Purple"
  //         }}
  //       >
  //         Listen to TrackSongs
  //       </div>
  //       <audio
  //         ref="audio_tag"
  //         src="./assets/sound.mp3"
  //         style={{
  //           //  margin: "4px",
  //           // border: "10px purple"
  //           backgroundColor: "grey"
  //         }}
  //         controls
  //         autoPlay
  //       />
  //     </div>
  //   );
  // }
}

export default TrackSongs;
