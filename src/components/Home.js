import React, { Component } from "react";
import Advertisement from "./Advertisement";
import CTRMenu from "./Menu";

import Body from "./Body";
import Sponsors from "./Sponsors";

import WelcomeCarousel from "./WelcomeCarousel";
class Home extends Component {
  render() {
    return (
      <div>
        <WelcomeCarousel />
        <CTRMenu />
        <h3> Latest </h3>
        <Body />
        <h3> Devotional </h3>
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
