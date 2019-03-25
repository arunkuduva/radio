import React, { Component } from "react";
import { DragSource } from "react-dnd";
import { Button } from "semantic-ui-react";

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
class PlayListSongs extends Component {
  constructor(props) {
    super(props);
    this.state = { source: null,isDeleteVisible: "hidden" };
  }
  componentDidMount(){
    this.setState({source:"SONG_COMPONENT"})
  }
  makeDeleteVisible =() =>{

    this.setState({isDeleteVisible: "visible"})

    console.log(this.state)
  } 
  makeDeleteInvisible=()=>{
    this.setState({isDeleteVisible: "hidden"})
    console.log(this.state) 
  }
  renderDeleteButton = ()=>{
    let visibilityState= this.state.isDeleteVisible
    return (<div style = {{visibility:visibilityState}}>
        <Button 
        primary
        size="tiny"
        floated="left"
        color="purple"
        onClick={() =>
            this.props.onSongSelect(this.props.song)
          }
        >
        Delete from playList
        </Button>
    </div>)
  }
  render() {
    const { isDragging, connectDragSource, song } = this.props;
    const opacity = isDragging ? 0 : 1;
    return (
      <div className="item" style={{ opacity }} 
      onMouseEnter = {this.makeDeleteVisible}
      onMouseLeave={this.makeDeleteInvisible}>
        {this.renderDeleteButton()}
        <div>{song.name}</div>
        <audio ref="audio_tag" src={this.props.song.src} controls autoPlay />

      </div>
    );
  }
}

export default PlayListSongs;
