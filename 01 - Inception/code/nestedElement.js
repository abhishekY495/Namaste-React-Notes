const parentDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", {}, "Nested Element")
  )
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parentDiv);
