import React from "react"; //importujemo potrebne biblioteke
import  ReactDOM, { render } from "react-dom";

//pravimo prvi element
const prviElement = <h1>Hello world</h1>;

ReactDOM.render(
  prviElement,
  document.getElementById("root")
);