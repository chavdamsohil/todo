import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form.js";
import TodoList from "./Components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState(""); // maintain input
  const [todos, setTodos] = useState([]); // to maintain list of todo
  const [status, setStatus] = useState("all"); // for status
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useeffect runs only ones
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect will run when todos and staus updates
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // functions and events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1> Todo </h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setStatus={setStatus}
        status={status}
        filteredTodos={filteredTodos}
      ></Form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      ></TodoList>
    </div>
  );
}

export default App;
