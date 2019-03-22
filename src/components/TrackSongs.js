import React, { Component } from "react";


import Song from "./Song";



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
 //   console.log("i am inside componentdidmount of TrackSongs");
  }
  componentWillUnmount() {
 //   console.log("i am inside componentWillUnmount of TrackSongs");
  }
  componentWillUpdate() {
    /// fetch the API call to set the state of the songs by checking the this.props.songs.name
//    console.log("i am inside componentDidUpdate of TrackSongs");
  }

  render() {
    if (this.props.songs != null) {
      const songHTML = this.state.songs.map(song => {
        return <Song song={song} />;
      });
      return (
        <div>
          {this.props.songs.name}
          {songHTML}
        </div>
      );
    } else {
      return <div>Pick an Album...</div>;
    }
  }
}

export default TrackSongs;
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
