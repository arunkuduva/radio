import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image } from "semantic-ui-react";

class Sponsors extends Component {
  render() {
    return (
      // <div>
      //   <Image src={require("./assets/Desert.jpg")} />
      // </div>

      <div>
        <Carousel
          style={{ height: "100px" }}
          autoPlay
          showThumbs={false}
          showArrows={true}
          showStatus={true}
        >
          <div style={{}}>
            <Image
              style={{ height: "200px", objectFit: "cover" }}
              src={require("./assets/Koala.jpg")}
              alt=""
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <Image
              style={{ height: "200px", objectFit: "cover" }}
              src={require("./assets/Desert.jpg")}
              alt=""
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <Image
              style={{ height: "200px", objectFit: "cover" }}
              src={require("./assets/Tulips.jpg")}
              alt=""
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Sponsors;
