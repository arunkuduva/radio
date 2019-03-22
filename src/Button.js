import React, { Component } from "react";
import "./Button.css"; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" style={{height:"50px",backgroundImage:"./components/assets/Desert.jpg"}}></div>;
  //  return <Image source={require("./components/assets/Desert.jpg")}/>
  }
}

export default Button;
