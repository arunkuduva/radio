import React, { Component } from "react";
import Track from "./Track";
import TrackSongs from "./TrackSongs";
import { Grid, GridRow, GridColumn, Segment } from "semantic-ui-react";
class Album extends Component {
  state = { albums: [], selectedalbum: null };
  componentDidMount() {
    this.setState({
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
        }
      ]
    });
  }

  onAlbumSelect = Album => {
    console.log("from the app ", Album);
    this.setState({ selectedalbum: Album });
  };

  render() {
    let trackhtml = this.state.albums.map(album => {
      return <Track albumdetails={album} onAlbumSelect={this.onAlbumSelect} />;
    });
    return (
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <div>{trackhtml}</div>
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
