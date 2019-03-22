import React, { Component } from "react";
import Track from "./Track";
import TrackSongs from "./TrackSongs";
import { Grid,  Segment } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";

class Album extends Component {
  state = { albums: [], selectedalbum: null };
  componentDidMount() {
    this.setState({
      hasMore: true,
      albums: [
        {
          name: "xxx",
          album: "xxxalbum",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track1",
          avgrating: 3.5
        },
        {
          name: "YYY",
          album: "YYYalbum",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track2",
          avgrating: 4.1
        },
        {
          name: "ZZZ",
          album: "ZZZalbum",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track3",
          avgrating: 1.2
        },
        {
          name: "aaa",
          album: "aaaalbum",
          image: "www.sample.com/images",
          source: "ww.sample.com/audio/track4",
          avgrating: 1.2
        }
      ]
    });
  }
  
  onAlbumSelect = Album => {
    //console.log("from the app ", Album);
    this.setState({ selectedalbum: Album });
  };
  fetchMoreData = () => {
       //   const dataLength= this.state.albums.length
          if (this.state.albums.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        albums: this.state.albums.concat(this.state.albums)
      });
    }, 500);
  };

  render() {
    // let trackhtml = this.state.albums.map(album => {
    //   return <Track albumdetails={album} onAlbumSelect={this.onAlbumSelect} />;
    // });
    return (
       <Segment>
       <Grid columns={2} relaxed="very">
           <Grid.Column> 
          <div>
            <InfiniteScroll
          dataLength={this.state.albums.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={400}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.albums.map(album => (
            <Track albumdetails={album} onAlbumSelect={this.onAlbumSelect} />
          ))}
        </InfiniteScroll>
        </div>

            </Grid.Column> 
           <Grid.Column>
             <TrackSongs songs={this.state.selectedalbum} />
       </Grid.Column>
         </Grid>
       </Segment>
    );
  }
}

export default Album;
