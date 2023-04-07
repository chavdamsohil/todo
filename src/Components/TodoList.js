import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              todos={todos}
              setTodos={setTodos}
              Text={todo.text}
              todo={todo}
              key={todo.id}
            ></Todo>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
