import React, { Component } from "react";
import Button from "./Button";

import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <Header />

        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/searchresults" exact component={SearchResults} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
