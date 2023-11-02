# 11 - Data is the new Oil

- [Higher-Order Component](#higher-order-component)
- [Controlled and UnControlled Component](#controlled-and-uncontrolled-component)
- [Lifting State Up](#lifting-state-up)
- [Prop drilling](#prop-drilling)
- [React Context](#react-context)

#

<br>

# Higher-Order Component

A **Higher-Order Component** (HOC) is a function that takes a component and returns a new component. The **HOC** contains certain logic that we want to apply to the component that we pass as a parameter. After applying that logic, the **HOC** returns the element with the additional logic.

> https://www.patterns.dev/posts/hoc-pattern 
> https://learnersbucket.com/examples/interview/higher-order-component-pattern-in-react

#

<br>

# Controlled and UnControlled Component

A **Controlled component** is a component in which typically, the form data is handled by the React component's state. In other words, the component's state is the "single source of truth" for the input elements in the component. When the user interacts with the input elements, such as text fields or checkboxes, React state is updated with the new values, and React re-renders the component with the updated data.

An **Uncontrolled component**, on the other hand, does not store its form data in the component's state. Instead, the input elements in an uncontrolled component maintain their own state internally. To access the form data, you can use a ref to get the current value of the input element when needed.

> https://react.dev/learn/sharing-state-between-components

#

<br>

# Lifting State Up

**Lifting the state** up or **State Lifting** is a method by which we can get access to the child components from the parent. If we want to perform some type of task that requires a state management between multiple children , we can do so by state lifting to their parent.

The main idea behind lifting up state is to ensure that the source of truth for a piece of data is located in a higher-level component (usually a parent component) and is then passed down as props to the child components that need access to that data.

```js
import React, { useState } from "react";

// Parent component
function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent count={count} onIncrement={incrementCount} />
    </div>
  );
}

// Child component
function ChildComponent({ count, onIncrement }) {
  return (
    <div>
      <p>Child Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default ParentComponent;
```

In this example, the **`count`** state and the **`incrementCount`** function are lifted up to **ParentComponent**. **ChildComponent** receives **`count`** as a prop and **`onIncrement`** as a prop function. When the button in **ChildComponent** is clicked, it calls **`onIncrement`**, which is the function from the **ParentComponent**, thereby updating the state in the **ParentComponent**.

#

<br>

# Prop drilling

**Prop drilling** is the process of passing down data or state through multiple layers of a component hierarchy. By the way, it refers to the practice of passing data from a parent component to its children and then from the children to their own children and so on, until the data reaches the desired component that needs it.

```jsx
// Top-level component
function App() {
  const data = "Hello, World!";
  return <ComponentA data={data} />;
}

// component A
function ComponentA(props) {
  return <ComponentB data={props.data} />;
}

// component B
function ComponentB(props) {
  return <ComponentC data={props.data} />;
}

// component
function ComponentC(props) {
  return <div>{props.data}</div>;
}
```

While this method works, it can become harder to manage in large applications. To avoid prop drilling, you can use **Context API** or state management libraries like **Redux**. These allow you to manage the state in a centralized location and access it in any component without the need to pass props through multiple layers of components. This can significantly simplify your code and improve its maintainability.

#

<br>

# React Context

React uses **`useState`** to store data and **`props`** to pass data between components. This works well for handling local state and for passing simple **`props`** between parent/child components. This system breaks down when you start to have global state or **`props`** that need to be passed to deeply nested components. With just **`props`** and state you end up having to resort to **prop drilling** which is when you pass down **`props`** through a bunch of different components so they can get to one single component far down the hierarchy.

This is where the **Context API** comes in. With **Context API** you can specify certain pieces of data that will be available to all components nested inside the context with no need to pass this data through each component.

> https://codesandbox.io/s/usecontext-prac-0z69ih

## Creating - `createContext()`

With the help of **`createContext`** we can create new context object. A context in React is a way to share data between components without having to pass the data down through multiple levels of the component tree using props.

For example, we will have a CartContext which will have the items that have been added to the cart that will be displayed across our app just like a typical E-comm site.

```js
import { createContext } from "react";
export const CartContext = createContext();
```

## Providing - `context.Provider`

Once we create our **`CartContext`** we need to provide it to its child components and in our case we want the **`CartContext`** to be present throughout the whole App so we will create a **`CartProvider`** function that returns **`CartContext.Provider`** component that wraps around the App.

```js
import { createContext } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
```

```js
// index.js
import { CartProvider } from "../contexts/CartContext";

root.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
```

In the above code, by wrapping the **`App`** component with the **`CartProvider`** component, it means that any component within the App component can access the **`cartItems`** state variable via the **`CartContext`**. This allows the components to access and manipulate the shopping cart state in a centralized manner.

## Consuming - `useContext`

Now to consume the data inside a Context we use the **`useContext`** hook. The hook returns the value of the context i.e **`cartItems`**. The hook also makes sure to re-render the component when the context value changes.

```js
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function App() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="App">
      <nav>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <sup>{cartItems.length}</sup>
        </NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
```

#

<br>
