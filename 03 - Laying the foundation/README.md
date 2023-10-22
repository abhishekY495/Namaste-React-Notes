# 03 - Laying the foundation

> - [Role of **`type`** attribute in **`script`** tag](#role-of-type-attribute-in-script-tag)
> - [npm scripts](#npm-scripts)
> - [JSX](#jsx)
> - [What is Babel](#what-is-babel)
> - [React Component](#)

#

<br>

# Role of **`type`** attribute in **`script`** tag

The **`type`** attribute in the **`<script>`** tag in HTML specifies the scripting language used within the script block. It tells the browser how to interpret and execute the code contained within the **`<script>`** element. The **`type`** attribute is optional, and if omitted, the default scripting language is assumed to be JavaScript. Other values include -

- **`type="module"`** - Indicates that the script should be treated as an **ECMAScript** module. ECMAScript modules are a way to structure JavaScript code into separate files. When you use the type="module" attribute, the script is treated as a module, and it can use **`import`** and **`export`** statements to include functionality from other modules.
- **`type="text/ecmascript"`** - Specifies that the content inside the **`<script>`** tag is **ECMAScript**, which is the standard upon which JavaScript is based. This was used in older versions of HTML but is rarely used today.

#

<br>

# npm scripts

**npm scripts** are custom scripts that you can define in your project's **`package.json`** file. These scripts are designed to automate various commands related to your project, such as running tests, building the project, starting a development server, and more.

They are typically commands, or a string of commands, that would normally be entered at the command line in order to do something with your application. For example -

```json
{
  "name": "namaste-react-03",
  "version": "1.0.0",
  "description": "Laying the foundation",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

There are 2 npm scripts defined - **`start`** and **`build`**

- **start** - This script is often used to start a development server. In this example, running **`npm run start`** will execute **`parcel index.html`**
- **build** - This will build your project for production. Running **`npm run build`** will execute the corresponding command from **`package.json`**

#

<br>

# JSX

**JSX** is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It makes it easier to visualize and understand the structure of UI components. **JSX** is not required to write React applications, but it is a popular choice among React developers due to its readability and ease of use.
<br>

```js
// With React.createElement
const myInfo = React.createElement("div", { id: "about" }, [
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
```

```js
// Using JSX
const myInfoJSX = (
  <div>
    <h1>About Me</h1>
    <p>Hi, my name is Abhishek</p>
    <p>
      Check out my
      <a href="https://github.com/abhishekY495" target="_blank">
        Github
      </a>
    </p>
  </div>
);
```

As you can see, that the JSX code is much more readable due to its HTML-like syntax and is easy to understand.

#

<br>

# What is Babel

**Babel**, also known as **Babel.js**, is a popular JavaScript compiler. It is mainly used to convert **ES6** **`(ECMAScript 2015)`** code into a backwards-compatible version of JavaScript in current and older browsers. **`ECMAScript`** is the standard upon which JavaScript is based, and new versions of **`ECMAScript`** introduce new features and syntax.

**Babel** allows developers to write code using the latest JavaScript features without worrying about compatibility issues in different environments. It achieves this by transforming modern JavaScript code into an older version that can be executed in a wide range of browsers.

Developers typically use **Babel** as part of their build process. They write code using the latest **`ECMAScript`** features, then run the code through **Babel** to generate a version of the code that can be safely executed in their target environments.

> **Parcel** includes **Babel** support, allowing you to write modern JavaScript code `(ES6+ syntax)` in your project. When you build your project using **Parcel**, it will use **Babel** behind the scenes to transform your modern JavaScript code into a version that is compatible with different browsers.

#

<br>

# React Component

**React Components** are building blocks in a React application that allow us to break down our application into smaller, reusable pieces. It is essentially a JavaScript function that returns React Element and are written in **PascalCase**. There are 2 ways to create a React component - **Functional** and **Class**.

> **Class components** is an older way of writing React components, so we will look into that later.

**Functional components** is the newer and more concise way of writing a React Component. They are just JavaScript functions that take props (short for properties) as arguments and return a React element.

- Creating a component

```js
const GreetUser = () => {
  return <div>Namaste React 🚀</div>;
};
```

- Rendering the component

```js
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<GreetUser />);
```
