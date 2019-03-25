import React, { Component } from "react";
import Button from "./Button";

import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Blog from "./components/Blog";
class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <Header />

        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/searchresults" exact component={SearchResults} />
          <Route path="/blog/:blog_id" exact component={Blog} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
