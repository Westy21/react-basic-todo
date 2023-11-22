import React from "react";

//Todo Component

export default function Todo({ todo, toggleTodo }) {
  function HandleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={HandleTodoClick}
        ></input>
        {todo.name}
      </label>
    </div>
  );
}
