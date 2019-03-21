import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
const paragraph = require("./assets/Desert.jpg");

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: ""
    };
  }
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    // let searchParam = event.target.value;
    // if (event.key === 'Enter'){
    //   axios
    //     .get(URL+searchParam)
    //     .then((response) => {
    //       this.setState({results: response.data});
    //     });
    // }
    // console.log(this.state.term);

    let data = {
      results: ["sampleresult"]
    };
    this.setState(data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSearchSubmit}>
          <Input
            icon="search"
            placeholder="Search..."
            onChange={event => this.onInputChange(event)}
            value={this.state.term}
          />
        </form>
        {this.state.results.length > 0 && (
          <Redirect
            to={{
              pathname: "/searchresults",
              state: { results: this.state.results }
            }}
          />
        )}
      </div>
    );
  }
}

export default SearchInput;
