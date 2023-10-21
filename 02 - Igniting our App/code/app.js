import React from "react";
import ReactDOM from "react-dom/client";

const myInfo = React.createElement("div", {}, [
  React.createElement("h1", {}, "About Me"),
  React.createElement("p", {}, "Hi, my name is Abhishek"),
  React.createElement(
    "p",
    {},
    "Check out my ",
    React.createElement(
      "a",
      { href: "https://github.com/abhishekY495", target: "_blank" },
      "Github."
    )
  ),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(myInfo);
