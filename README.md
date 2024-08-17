# Context API Concept in React

- The Context API provides a means to share values like state, functions, or any data across the component tree without passing props down manually at every level. This is particularly useful for global data that many components need to access.

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## First step
- First of all create the context which is same same large data ware house.

## Second step
- Create context provider, basically keep every child inside the created context when we do so it is called context provider. Every child inside context provider can access the current context. whatever value will be passed through context provider
can be accessible in all the child component of it. To obtain data from child component you can use other hooks like useState, useReducer etc.

## Third step
Consume the context:

 - First import useContext method in your component
 - Import context provider that you have created
- to access the data present in the context you have to pass the **created context**(not context provider) inside useContext method and you will receive data in object form then you can use it in your need;


## Finally look up at the code you will get better understand of it.

# Thank you
