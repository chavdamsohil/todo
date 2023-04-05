import React, { useState } from "react";

const Form = ({
  setInputText,
  setTodos,
  todos,
  inputText,
  status,
  setStatus,
}) => {
  // handling input for todos
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputHandler}
      ></input>
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
