import React, { Component } from "react";
import { DropTarget } from "react-dnd";

const playlistspec = {
  drop(props, monitor, component) {
    console.log("dropped in the target");
    console.log(props);
    console.log(monitor);
    console.log(component);
    // component.updater.enqueueSetState(
    //   this,
    //   {
    //     playlists: [
    //       {
    //         name: "1",
    //         src: "www.music.com"
    //       },
    //       {
    //         name: "2",
    //         src: "www.music.com"
    //       }
    //     ]
    //   },
    //   () => {
    //     console.log("callback from setstate");
    //   }
    // );
  }
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

class PlayLists extends Component {
  state = {
    playlists: [
      {
        name: "alaipayuthey",
        src: "www.music.com"
      }
    ]
  };

  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? "lightgreen" : "white";
    return connectDropTarget(
      <div
        className="target"
        style={{
          background: backgroundColor,
          minHeight: "200px",
          border: "1px solid grey"
        }}
      >
        Target
      </div>
    );
  }
}

export default DropTarget("item", playlistspec, collect)(PlayLists);
