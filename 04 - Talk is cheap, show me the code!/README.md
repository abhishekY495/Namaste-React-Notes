# 04 - Talk is cheap, show me the code!

> - [Config-driven UI](#config-driven-ui)
> - [`key` in React](#key-in-react)

#

<br>

# Config-driven UI

**Config-driven** UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them.

#

<br>

# **`key`** in React

In React, **keys** are used to identify unique virtual DOM elements when rendering lists of items. When you render a list of items in React, each item in the list should have a unique **`key`**.

**Keys** tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items move (e.g. due to sorting), get inserted, or get deleted. A well-chosen **`key`** helps React infer what exactly has happened, and make the correct updates to the **DOM** tree.

> - https://react.dev/learn/rendering-lists#why-does-react-need-keys
> - https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern
> - https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66

#

<br>
