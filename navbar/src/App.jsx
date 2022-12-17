import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import NavBar from "./NavBar";

const App = () => (
  <div className="container">
    <NavBar />
    <div>Name: navbar</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
