import React, { Component } from "react";
import {

  Item
} from "semantic-ui-react";

class Radio extends Component {
  render() {
    return (
      <Item>
        <Item.Description>Online Radio</Item.Description>
        <Item.Content>
          <audio
            ref="audio_tag"
            src="./assets/sound.mp3"
            style={{
              //  margin: "4px",
              // border: "10px purple"
              backgroundColor: "purple"
            }}
            controls
            autoPlay
          />
        </Item.Content>
      </Item>
    );
  }
  // render() {
  //   return (
  //     <div>
  //       <div
  //         style={{
  //           Color: "Purple"
  //         }}
  //       >
  //         Listen to Radio
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

export default Radio;
