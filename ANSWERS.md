- [x] Why would you use class component over function components (removing hooks from the question)?

* so you can add state to the component.

- [x] Name three lifecycle methods and their purposes.

1. componentDidMount() => only called on the client, usually performed after the initial render when the client has received data from server and right before this data paints the browser.

1. componentDidUpdate() => invoked immediately after updating occurs. Method is not called for the initial render.

1. componentWillUnmount() => is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleaning up any subscriptions that were created in componentDidMount().

- [x] What is the purpose of a custom hook?

* These are normal javascript functions which can use other hooks inside of it and contain a common stateful logic that can be reused within multiple components. These functions are prefixed with the word use.

* [x] Why is it important to test our apps?

* To keep our app less fragile when adding new code, through regression, and to help make our code more scalable.
