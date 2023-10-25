# 05 - Lets get Hooked

> - [File Structure in React](#file-structure-in-react)
> - [`import` and `export`](#import-and-export)
> - [React Hooks](#react-hooks)
>   > - [useState](#usestate)
>   > - [useEffect](#useeffect)
> - [Reconcilitaion in React](#reconciliation-in-react)
> - [React Fiber](#react-fiber)

#

<br>

# File Structure in React

In React applications, there isn't a strict or fixed file structure that you must follow, but there are common patterns that many developers follow for organizing their code. The structure can vary based on the project's size, complexity, and team preferences.

> - https://legacy.reactjs.org/docs/faq-structure.html

#

<br>

# **`import`** and **`export`**

As our application grows bigger, we want to split it into multiple files, so called **modules**. A module may contain a class or a library of functions for a specific purpose. A module is just a file. One script is one module. Modules can load each other and use special directives **`export`** and **`import`** to interchange functionality and call functions of one module from another.

- **`import`** - Used to read code exported from another module.
- **`export`** - Used to provide code to other modules.

There are two types of exports, **Named Exports** and **Default Exports**.

## **Named Export**

You can create **named exports** in 2 ways. Individually, or all at once at the bottom. For example,

```js
// Individually
export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const greet = (name) => `Hello ${name}`;

// All at once
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hello = (name) => `Hello ${name}`;
export { days, hello };
```

Now, when importing **named exports**, you need to specify the name of the **`export`** in curly braces **`{...}`**

```js
import { days, hello } from "./fileLocationHere";
hello("Abhishek"); // Hello Abhishek
```

But if there’s a lot to import, we can import everything as an object using **`*`**

```js
import * as greet from "./fileLocationHere.js";
const greet.hello("Abhishek"); // Hello Abhishek
```

---

## **Default Export**

Default exports are created by including a **`default`** keyword after **`export`**. You can have only one **`default export`** per file.

```js
const sum = (num1, num2) => num1 + num2;
export default sum;
```

When importing a **`default export`**, you don’t have to use curly braces **`{...}`** and you can name the **`import`** anything you like.

```js
import add from "./fileNameHere.js";
console.log(add(2, 3));
```

#

<br>

# React Hooks

**React Hooks** are a set of functions introduced in React 16.8 that allow developers to use state and other React features in functional components. They were introduced to overcome some of the limitations of class components and make it easier to reuse stateful logic between components. Hooks allow you to split your code into smaller, more manageable pieces, which makes it easier to understand and maintain. Some of the popular hooks include, **`useState`**, **`useEffect`**, **`useContext`**, **`useReducer`**, and more.

## `useState`

The **`useState`** Hook is one of the most commonly used Hooks, as it allows you to manage state within a functional component.

When we declare a state variable with **`useState`**, it returns an array with two items. The first item is the current value, and the second is a function that lets us update it.

```js
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, we're using **`useState`** to declare a state variable called **count**, and initializing it with a value of 0. We're also using the **setCount** function to update the value of count when the button is clicked.

---

## `useEffect`

#

<br>

# Reconciliation in React

**Reconciliation** is the process that React uses to update the DOM in response to changes in the component state. When the state changes, React needs to figure out how to update the UI efficiently. The two important things here are the **Virtual DOM** and the **Diffing Algorithm**.

**Virtual DOM** is an in-memory representation of the real DOM elements present on a web page. If the state of any of these elements changes, a new virtual DOM tree is created. This tree is then compared or `diffed` using the **Diffing Algorithm** with the previous virtual DOM tree. Once this is done, it calculates the best possible way to make these changes to the real DOM. This ensures that there are minimal operations on the real DOM.

#

<br>

# React Fiber

The previous reconciliation algorithm, known as "Stack Reconciler", worked in a recursive manner, blocking the main thread during the update process. This sometimes led to performance issues, especially when dealing with complex applications with frequent updates. React Fiber aims to solve these problems by introducing a more efficient reconciliation process.

React Fiber is a complete rewrite of the React core algorithm, focusing on improving performance and responsiveness. Its main goal is to enable incremental rendering, allowing React to split the work of rendering into smaller chunks and pause and resume the work as needed. This approach makes it possible to prioritize updates, resulting in a smoother user experience, especially in large applications.

> https://codedamn.com/news/reactjs/react-fiber-architecture

#

<br>
