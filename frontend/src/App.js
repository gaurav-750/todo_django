import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// const list = [
//   {
//     id: 1,
//     title: "First Todo",
//     body: "This is my first todo task of the day.",
//   },
//   {
//     id: 2,
//     title: "Study Django with APIs",
//     body: "I need to study this book by William Vincent so that I can learn drf.",
//   },
//   { id: 3, title: "Watch", body: "Add new cell to my black watch" },
// ];

const App = () => {
  return (
    <div>
      {list.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p> {todo.body} </p>
        </div>
      ))}
    </div>
  );
};

export default App;
