const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React via CDN"
);
console.log(heading);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
