import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        const todos = res.data;
        setList(todos);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);

  // return
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
