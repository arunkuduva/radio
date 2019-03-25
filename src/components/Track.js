import React, { Component } from "react";
import { Button, Icon,  Item, Label } from "semantic-ui-react";

import { DragSource } from "react-dnd";
const paragraph = require("./assets/Desert.jpg");

const itemSource = {
  beginDrag(props) {
    console.log("Track dragging");
    return props.albumdetails;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    console.log( "Track endDrag from source");
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

class Track extends Component {
  render() {
    const { isDragging, connectDragSource, song } = this.props;
    return (connectDragSource(
      <div>
<Item.Group divided>
        <Item>
          <Item.Image src={require("./assets/Desert.jpg")} />
          <Item.Content>
            <Item.Header as="a">{this.props.albumdetails.name}</Item.Header>
            <Item.Meta>
              <span className="cinema">{this.props.albumdetails.album}</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Label icon="globe" content="Additional Languages" />
            </Item.Extra>
            <Item.Extra>
              <Button
                primary
                size="tiny"
                floated="left"
                color="purple"
                onClick={() =>
                  this.props.onAlbumSelect(this.props.albumdetails)
                }
              >
                Play
                <Icon name="right chevron" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      </div>
      )
    );
  }
}

export default DragSource("item", itemSource, collect)(Track);
