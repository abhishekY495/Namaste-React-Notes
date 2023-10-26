# 06 - Exploring the world

> - [Monolith vs Microservice Architecture](#monolith-vs-microservice-architecture)
> - [`useEffect`](#useeffect)
> - [What is CORS](#what-is-cors)
> - [Optional Chaining `?.`](#optional-chaining-)

#

<br>

# Monolith vs Microservice Architecture

> - https://www.digitalocean.com/blog/monolithic-vs-microservice-architecture

#

<br>

# `useEffect`

**`useEffect`** is a React Hook that allows you to run side effects in functional components. Side effects refer to any operations that affect something outside the component, such as modifying the DOM or making API requests.

The **`useEffect`** Hook is called after every render of the component and it takes two arguments, a callback function and an optional dependency array.

Below is an example of fetching data from an API.

```js
import { useState, useEffect } from "react";

export default function Dashboard() {
  const API_URL = "https://jsonplaceholder.typicode.com/users/";
  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsersData(data);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      {usersData.length === 0 && <p>Loading...</p>}
      {usersData.map(({ name }) => {
        return <p>{name}</p>;
      })}
    </div>
  );
}
```

#

<br>

# What is CORS

**CORS**, which stands for Cross-Origin Resource Sharing, is a security feature implemented by web browsers. It controls how web pages on one domain can request and use resources hosted on another domain.

This is useful because complex applications often reference third-party APIs and resources in their client-side code. For example, your application may use your browser to pull videos from a video platform API, use fonts from a public font library, or display weather data from a national weather database. **CORS** allows the client browser to check with the third-party servers if the request is authorized before any data transfers.

**CORS** works by adding new HTTP headers to requests and responses, allowing servers to specify which domains can access their resources. When a web page makes a cross-origin request, the browser sends an HTTP request with an `**`Origin`**` header to the server. The server then checks if the domain in the **`Origin`** header is allowed to access the resource. If it is, the server includes an **`Access-Control-Allow-Origin`** header in its response. The browser then checks if the value of the **`Access-Control-Allow-Origin`** header matches the current domain. If it does, the browser allows the request to proceed.

> - https://www.youtube.com/watch?v=tcLW5d0KAYE
> - https://codedamn.com/news/javascript/javascript-cors-error-handling

#

<br>

# Optional Chaining `?.`

The **Optional chaining** `?.` is a safe way to check for nested object properties. If the property does not exist, it returns **undefined** instead of throwing an error. Let's understand why we need optional chaining.
In the below example, We should get **undefined** in the second console, but we get an **error** cause `animals.dog` is **undefined** and an attempt to get `animals.dog.breeds` i.e value of **undefined** gives us an error.

```js
const animals = {};
console.log(animals.dog); // Undefined
console.log(animals.dog.breeds); // Error
```

The obvious solution would be to use `if(...)else{...}` or the ternary operator `?__:__ ` which makes the code repetitive and long like below.

```js
console.log(animals.dogs ? animals.dogs.breeds : "Not found");
```

The obove code only considers for one nested property, if it had many, than we have to add that many tenary opeartors, which can get confusing. The optional chaining `?.` stops the evaluation if the value before `?.` is **undefined** or **null** and returns **undefined** making the code more concise and easier to read.

```js
console.log(animals?.dog?.breeds); // Undefined
```

#

<br>
