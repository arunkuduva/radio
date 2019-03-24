import React, { Component } from "react";
import PlayLists from "./PlayLists";

class PlayListsHolder extends Component {
  componentDidMount() {
    //super(props);
    this.setState = { songs: [] };
    // console.log("componentDidMount from PlayListsHolder  " )
  }

  render() {
    return (
      <div>
        <PlayLists />
      </div>
    );
  }
}

export default PlayListsHolder;
