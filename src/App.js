// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import React, { Component } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Dataprovider from "./components/Context";

export class App extends Component {
  render() {
    return (
      <Dataprovider>
        <div className="App">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </Dataprovider>
    );
  }
}

export default App;
