const parentDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "childrens" }, [
    React.createElement("h1", {}, "About"),
    React.createElement("p", {}, "Hi, My name is Abhishek"),
    React.createElement(
      "p",
      {},
      "Check out my ",
      React.createElement(
        "a",
        {
          href: "https://github.com/abhishekY495",
          target: "_blank",
        },
        "Github"
      )
    ),
  ])
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parentDiv);
