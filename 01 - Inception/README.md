# 01 - Inception

> - [What is Emmet](#what-is-emmet)
> - [Is React a Library or Framework](#is-react-a-library-or-framework)
> - [What is a CDN](#what-is-a-cdn)
> - [What is crossorigin](#what-is-crossorigin)
> - [Using React via CDN](#using-react-via-cdn)
> - [Why do we need both React and ReactDOM](#why-do-we-need-both-react-and-reactdom)
> - [What is the difference between `react.development.js` and `react.production.js`](#what-is-the-difference-between-reactdevelopmentjs-and-reactproductionjs)
> - [Creating nested element in React](#creating-nested-element-in-react)
> - [Creating sibling elements in React](#creating-sibling-elements-in-react)

#

<br>

# What is Emmet

**Emmet** is a web development toolkit that greatly improves **HTML** and **CSS** workflow. It's a powerful and fast tool for expanding abbreviations and generating boilerplate code. Support for Emmet is built right into Visual Studio Code, no extension required. Some examples below.

- `!` gives you an HTML biolerplate

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- `ul>li*5`

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

- `bgc:red`

```css
background-color: red;
```

> More can be found here - https://docs.emmet.io/cheat-sheet

#

<br>

# Is React a Library or Framework

**React is library** because it is unopinionated and it helps you accomplish a couple of tasks, whereas a **framework** defines your whole project. A framework provides a structure and set of rules for developing applications. It offers a collection of libraries, tools, and utilities that work together to facilitate the development process.

For example, In React, developers have the flexibility to choose the tools and libraries they want to use for routing, state management, and other functionalities. It provides the core features for building UI components and managing the application's state, but developers need to handle other aspects, such as routing and server-side rendering, by integrating additional libraries or tools.

Next.js on the other hand, is a framework built on top of React that provides a more opinionated structure and additional features for building React applications. It offers Server-Side Rendering (SSR), Static Site Generation (SSG), routing, and other performance optimizations out of the box, sometimes called batteries included.

#

<br>

# What is a CDN

A **Content Delivery Network** (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

> https://www.cloudflare.com/learning/cdn/what-is-a-cdn

#

<br>

# What is `crossorigin`

In simple terms, the **crossorigin** attribute is used to control how web browsers handle loading resources like images, scripts, or stylesheets from different domains. When you include an external resource like using React CDN in your web page from a different domain, the browser might block it due to security reasons to prevent potential attacks.

The **crossorigin** attribute allows you to specify whether the resource should be fetched with the same-origin policy or not. When you set the **crossorigin** attribute to `anonymous` it means the resource can be loaded from a different domain without including user credentials, enhancing security. If you set it to `use-credentials` the browser includes user credentials like cookies when fetching the resource, which is necessary when accessing protected resources on other domains.

In essence, **crossorigin** helps maintain security while allowing web pages to load resources from various sources on the internet.

#

<br>

# Using React via CDN

React can be included in your project in multiple ways and one of them is using CDN. You include React and ReactDOM libraries directly from a CDN in your HTML file like below from [React CDN Links](https://legacy.reactjs.org/docs/cdn-links.html)

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>

<script>
  const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React via CDN"
  );

  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(heading);
</script>
```

Here, `react.createElement()` is a function that returns a React element, which is a JavaScript Object and `root.render()` replaces the root child with that React element.

#

<br>

# Why do we need both React and ReactDOM

The `React` package holds the code for components, state, props and all the code that is react. Whereas `ReactDOM` is the glue between React and the DOM. ReactDOM deals with placing the components in browser DOM.

The reason that React and ReactDOM are separate is because React supports other platforms like mobile and desktop and in that case ReactDOM is not required as there is no browser involved.

#

<br>

# What is the difference between `react.development.js` and `react.production.js`

The `react.development.js` file is intended for use during development and includes additional features and debugging tools that can be helpful when building and testing React applications. These features may include additional warning messages, error checking, and other tools that can help identify problems or potential issues with the code.

The `react.production.js` file, on the other hand, is intended for use in production environments and has been optimized for performance and minified. It does not include the additional debugging tools and may have other features disabled in order to reduce the size of the file and improve performance.

#

<br>

# Creating nested element in React

```js
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
```

#

<br>

# Creating sibling elements in React

```js
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
```

#

<br>
