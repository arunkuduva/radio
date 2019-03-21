import React, { Component } from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  render() {
    return (
      <div>
        searchresults safddsf
        <div>{this.props.location.state.results}</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SearchResults;
