import React, { Component } from "react";
import Advertisement from "./components/Advertisement";
import CTRMenu from "./components/Menu";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Body from "./components/Body";
import Sponsors from "./components/Sponsors";
import { Container } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CTRMenu />
        <Body />
        <Sponsors />

        <Advertisement />
      </div>
    );
  }
}

export default App;
