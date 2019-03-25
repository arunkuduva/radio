import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { Segment } from "semantic-ui-react";
import PlayListSongs from "./PlayListSongs";


const playlistspec = {
  drop(props, monitor, component) {
     console.log("dropped in the target");
     console.log(props);
     console.log(monitor.getItem());
     console.log(component);
    component.updateState(monitor.getItem());
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
  constructor(props) {
    super(props);
    this.state = { songs: [] ,selectedSong:null};
    //   console.log("constructor from playlist holder ");
  }

  componentDidMount() {
    //super(props);
    this.setState({ songs: [] });
    //  console.log("componentDidMount from playlist  ");
  }
  fetchSongsFromAlbum=(item)=>{

    ///// use axiois to call the api from server and in the promise return set the state
    let newState = this.state.songs.concat([
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
    ]) 
    this.setState({ songs: newState })
  }
  updateState = item => {
    // this.setState(state=>{
    //     const list = [state.songs, ...state.list];
    // })
    // console.log("state in playlist holder is");
    // console.log(this.state);
    if (typeof item.album==="undefined"){
      let newState = this.state.songs.concat(item);
      this.setState({ songs: newState });
    }else{
      this.fetchSongsFromAlbum(item);
    }
    
    //  console.log("state in playlist holder after push");
    //  console.log(this.state);
  };
  onSongSelect = song => {
    //console.log("from the app ", Album);
    this.setState({ selectedSong: song });
    

    var array = [...this.state.songs];
    var index = array.indexOf(song);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({songs: array});
      console.log("song deleted")
    }else{
      console.log("song not deleted" + index )

    }

  };
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? "lightgrey" : "white";
    // console.log("prpos is ");
    // console.log(this.props);
    return connectDropTarget(
      <div>
        <Segment>
          <div
            className="target"
            style={{
              background: backgroundColor,
              height: "400px",
              //  border: "1px solid grey",
              overflowY: "scroll",
              overflowX: "scroll"
            }}
          >
            {this.state.songs.map(song => {
              return <PlayListSongs song={song} 
              onSongSelect={this.onSongSelect}/>;
            })}
            {item != null && <div>{item.name}</div>}
          </div>
        </Segment>
      </div>
    );
  }
}

export default DropTarget("item", playlistspec, collect)(PlayLists);
