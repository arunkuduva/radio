import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Song from "./Song"

const playlistspec = {
  drop (props, monitor, component) {
    console.log("dropped in the target");
    console.log(props);
    console.log(monitor.getItem());
    console.log(component);
    component.updateState(monitor.getItem())
    
  }
};
function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

class PlayLists extends Component {
  constructor(props) {
    super(props);
    this.state={songs:[]}
    console.log("constructor from playlist holder " )
}

componentDidMount(){
  //super(props);
  this.setState({songs:[]})
  console.log("componentDidMount from playlist  " )
}

updateState= (song)=>{
  // this.setState(state=>{
  //     const list = [state.songs, ...state.list];
  // })
  console.log("state in playlist holder is" )
  console.log(this.state )
 let  newState = this.state.songs.concat(song)
 this.setState({songs:newState})
 console.log("state in playlist holder after push" )
 console.log(this.state )

}

  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? "lightgrey" : "white";
    console.log("prpos is ");
    console.log(this.props);
    return connectDropTarget(
      <div
        className="target"
        style={{
          background: backgroundColor,
          height: "400px",
        //  border: "1px solid grey",
          overflowY: 'scroll',
          overflowX: 'scroll',
        }}
      >
      {this.state.songs.map(song => {
        return <Song song={song} />;
      })}
        {item != null && <div>{item.name}</div>}
      </div>
    );
  }
}

export default DropTarget("item", playlistspec, collect)(PlayLists);
