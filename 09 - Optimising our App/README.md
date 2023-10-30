# 09 - Optimising our App

> - [Custom Hooks](#custom-hooks)
> - [Code-Splitting - `lazy` and `Suspense`](#code-splitting---lazy-and-suspense)

#

<br>

# Custom Hooks

React comes with several built-in Hooks like **`useState`**, **`useContext`**, and **`useEffect`**. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs.

Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a **Custom Hook**.

> https://react.dev/learn/reusing-logic-with-custom-hooks

#

<br>

# Code Splitting - `lazy` and `Suspense`

Most React apps will have their files **bundled** using tools like Webpack, Parcel or Browserify. **Bundling** is the process of following imported files and merging them into a single file - a **bundle**. <br> This bundle can then be included on a webpage to load an entire app at once.

Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start **splitting** your bundle. **Code-Splitting** is a feature supported by most bundlers which can create multiple bundles that can be dynamically loaded at runtime.

**Code-splitting** your app can help you **lazy-load** just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

The React.lazy function lets you render a **Dynamic Import** as a regular component.

```js
import React, { lazy } from "react";

// Normal Import
import SomeComponent from "./SomeComponent";

// Dynamic Import
const SomeComponent = lazy(() => import("./SomeComponent"));
```

With the introduction of **`lazy()`**, you can load components lazily (i.e., only when they are needed) and use **`Suspense`** to display a loading indicator while the component is being fetched.

```js
import React, { Suspense } from "react";

const MyLazyComponent = lazy(() => import("./MyLazyComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLazyComponent />
      </Suspense>
    </div>
  );
}
```

> https://web.dev/articles/code-splitting-suspense

#

<br>
