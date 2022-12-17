import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import NavBar from "navbar/NavBar"

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <NavBar />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
