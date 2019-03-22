import React, { Component } from "react";
import { Button, Icon,  Item, Label } from "semantic-ui-react";
const paragraph = require("./assets/Desert.jpg");

class Track extends Component {
  render() {
    return (
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
    );
  }
}

export default Track;
