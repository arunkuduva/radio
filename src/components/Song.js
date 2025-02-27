import React, { Component } from "react";
import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    console.log("dragging");
    return props.song;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    console.log("endDrag from source");
    console.log(props);
    console.log(monitor);
    console.log(monitor.getDropResult());
    console.log(component);
    // return props.handleDrop(props.song.name);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
class Song extends Component {
  constructor(props) {
    super(props);
    this.state = { source: null };
  }
  componentDidMount(){
    this.setState({source:"SONG_COMPONENT"})
  }
  render() {
    const { isDragging, connectDragSource, song } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div className="item" style={{ opacity }}>
        <div>{song.name}</div>
        <audio ref="audio_tag" src={this.props.song.src} controls autoPlay />
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(Song);
