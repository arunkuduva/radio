import React, { Component } from "react";
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
const paragraph = require('./assets/Desert.jpg')

class Track extends Component {
  render() {
    console.log("inside Track component");
    console.log(this.props);
    return (
    <Item.Group divided>
    <Item>
      <Item.Image src={require('./assets/Desert.jpg')}/>
      <Item.Content>
        <Item.Header as='a'>{this.props.albumdetails.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{this.props.albumdetails.album}</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
        <Item.Extra>
          <Button primary floated='left' color="purple">
            Play Song
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>)

  }
}

export default Track;
  