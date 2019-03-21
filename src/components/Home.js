import React, { Component } from "react";
import Advertisement from "./Advertisement";
import CTRMenu from "./Menu";

import SearchBar from "./SearchBar";
import Body from "./Body";
import Sponsors from "./Sponsors";

import { Container } from "semantic-ui-react";

import { BrowserRouter, Route } from "react-router-dom";
import WelcomeCarousel from "./WelcomeCarousel";
class Home extends Component {
  render() {
    return (
      <div>
        <WelcomeCarousel />
        <CTRMenu />
        <Body />
        <br />
        <hr />
        <br />
        <Sponsors />
        <Advertisement />
      </div>
    );
  }
}

export default Home;
