import React, { Component } from "react";
import {  Menu} from "semantic-ui-react";
import SearchInput from "./SearchInput";
//import MenuHeader from "./Menu.css";

const divStyle = {
  margin: "30px",
  //border: "5px solid lightpurle",
  textAlign: "center"
};
// const divStyle2 = {
//   margin: "30px",
//   border: "5px solid purple",
//   textAlign: "center"
// };

class CTRMenu extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div style={divStyle}>
        <Menu pointing secondary>
          <Menu.Item
            name="bio"
            active={activeItem === "bio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="pics"
            active={activeItem === "pics"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="companies"
            active={activeItem === "companies"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="FAQ"
            active={activeItem === "FAQ"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="links2"
            active={activeItem === "links2"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="links3"
            active={activeItem === "links3"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <SearchInput />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
    // return (
    //   <div style={(divStyle, divStyle2)}>
    //     <Grid columns={6} divided>
    //       <Grid.Row>
    //         <Grid.Column>
    //           <h3
    //             style={{ backgroundColor: "purple" }}
    //             onClick={this.changeColor}
    //           >
    //             Languages
    //           </h3>
    //         </Grid.Column>
    //         <Grid.Column>
    //           <div>
    //             <h3 style={{ backgroundColor: "purple" }}>Tracks</h3>
    //           </div>
    //         </Grid.Column>
    //         <Grid.Column>
    //           <div>
    //             <h3>Blogs</h3>
    //           </div>
    //         </Grid.Column>
    //         <Grid.Column>
    //           <div>
    //             <h3>FAQ</h3>
    //           </div>
    //         </Grid.Column>
    //         <Grid.Column>
    //           <div>
    //             <h3>Traffic</h3>
    //           </div>
    //         </Grid.Column>
    //         <Grid.Column>
    //           <div>
    //             <h3>Placeholder</h3>
    //           </div>
    //         </Grid.Column>
    //       </Grid.Row>
    //     </Grid>
    //   </div>
    // );
  }
}

export default CTRMenu;
