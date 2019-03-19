import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image } from "semantic-ui-react";

class WelcomeCarousel extends Component {
  render() {
    return (
      // <div>
      //   <Image src={require("./assets/Desert.jpg")} />
      // </div>

      <div>
        <Carousel
          style={{ height: "200px" }}
          autoPlay infiniteLoop
          showThumbs={false}
          interval="5000"
        >
          <div style={{}}>
            <Image
              style={{ height: "300px", objectFit: "cover" }}
              src={require("./assets/Chicagoimage4.gif")}
              alt=""
            />
            
          </div>
          <div>
            <Image
              style={{ height: "300px", objectFit: "cover" }}
              src={require("./assets/Chicagoimage3.gif")}
              alt=""
            />
            
          </div>
          <div>
            <Image
              style={{ height: "300px", objectFit: "cover" }}
              src={require("./assets/Chicagoimage2.gif")}
              alt=""
            />
            
          </div>
          <div>
            <Image
              style={{ height: "300px", objectFit: "cover" }}
              src={require("./assets/Chicagoimage.gif")}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default WelcomeCarousel;
