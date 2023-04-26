import React from "react"; //importujemo potrebne biblioteke
import  ReactDOM, { render } from "react-dom";

//pravimo prvi element
//const prviElement = <h1>Hello world</h1>;
//ubacivanje varijable i konstante u funkciju

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = { //objekat user
  firstName: 'Katarina',
  lastName: 'Radosavljevic'
};

const element = (
  <h1>
  Hello, {formatName(user)}!
</h1>
);


ReactDOM.render(
  element,
  document.getElementById("root")
);