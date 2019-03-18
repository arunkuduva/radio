import React, { Component } from "react";
import Radio from "./Radio";
import Blog from "./Blog";
import { Grid } from "semantic-ui-react";
import Tracks from "./Tracks";
class Body extends Component {
  render() {
    return (
      <div>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={4}>
              <h3
                //  style={{ backgroundColor: "purple" }}
                onClick={this.changeColor}
              >
                Languages
              </h3>
            </Grid.Column>
            <Grid.Column width={8}>
              <div>
                <Tracks />
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div>
                <Grid divided="vertically">
                  <Grid.Row>
                    <Grid.Column>
                      <Radio />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Blog />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Body;
