import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1>About Me</h1>;

const GithubLink = () => {
  return (
    <p>
      Check out my{" "}
      <a href="https://github.com/abhishekY495" target="_blank">
        Github
      </a>
    </p>
  );
};

const MyInfoJSX = () => (
  <div>
    {title}
    <p>Hi, my name is Abhishek</p>
    {GithubLink()}
    <GithubLink />
    <GithubLink></GithubLink>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MyInfoJSX />);
