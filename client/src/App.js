import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Carousel />
        </div>
      </Router>
    );
  }
}

export default App;
