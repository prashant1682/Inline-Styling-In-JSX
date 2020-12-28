import React from "react";
import ReactDOM from "react-dom";
// create an style object and inject the objectName to an element . .
//All the CSS properties should be "".
//All the CSS properties applies to JSX also jsut that it should be in camecase
// If there are multiple properties then apply space as given below jsut like CSS
const customSyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

// we can use the object property to chnage the value on the fly.
// customSyle.color = "blue";

ReactDOM.render(
  <h1 style={customSyle}>Hello World!</h1>,
  document.getElementById("root")
);

// to apply cutom style to a specific element
// ReactDOM.render(
//   <h1 style={{ color: "red" }}>Hello World!</h1>,
//   document.getElementById("root")
// );
