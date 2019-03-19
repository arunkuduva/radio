import React, { Component } from "react";
import Advertisement from "./components/Advertisement";
import CTRMenu from "./components/Menu";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Body from "./components/Body";
import Sponsors from "./components/Sponsors";
import WelcomeCarousel from "./components/WelcomeCarousel"
import { Container } from "semantic-ui-react";
import Button from "./Button";
class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <Header />
        <WelcomeCarousel />
        <CTRMenu />
        <Body />
        <br/>
        <hr />
        <br/>
        <Sponsors />

        <Advertisement />
      </div>
    );
  }
}

export default App;
