import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [React.createElement("div", { id: "child1" }, [
//    React.createElement("h1", {}, "I am h1 Tag"),
//    React.createElement("h2", {}, "I am h2 tag"),
//  ]),
//   React.createElement("div", { id: "child2" }, [
//   React.createElement("h1", {}, "I am h1 Tag"),
//   React.createElement("h2", {}, "I am h2 tag"),
// ])]
// );

//JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
const parent = React.createElement(
  "div",
  { id: "root" },
  React.createElement("div", { id: "sub_root" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "This is Namaste React😎"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
root.render(parent);
