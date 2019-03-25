import React, { Component } from "react";
import Radio from "./Radio";
import Blogs from "./Blogs";
import { Grid } from "semantic-ui-react";
import Album from "./Album";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import PlayListsHolder from "./PlayListsHolder";
class Body extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8} //width={4}
            >
              <div>
                <Album />
              </div>
            </Grid.Column>

            <Grid.Column
              mobile={16}
              tablet={8}
              computer={4} // width={3}
            >
              <h3
                //  style={{ backgroundColor: "purple" }}
                onClick={this.changeColor}
              >
                <PlayListsHolder />
              </h3>
            </Grid.Column>

            <Grid.Column
              mobile={16}
              tablet={8}
              computer={4}
              //width={4}
            >
              <div>
                <Grid divided="vertically">
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                      <Radio />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                      <div>
                        <Blogs />
                      </div>
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

//export default Body;

export default DragDropContext(HTML5Backend)(Body);
