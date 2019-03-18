import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Grid
        style={{
          borderBottom: "5px",
          border: "5px solid purple"
        }}
        columns={3}
        divided
      >
        <Grid.Row color="purple">
          <Grid.Column>
            <div />
          </Grid.Column>
          <Grid.Column>
            <div>
              <h1>Chicago Tamil Radio</h1>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Button inverted>Signon</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Header;
