import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";

//Key for local storage
const LOCAL_STORAGE_KEY = "todoApp.todos";

// Root of my application

function App() {
  //A function is basicaly a component
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) return storedTodos;
    return [];
  }); //React Default state | React-Hook

  const todoNameRef = useRef(); //access user input

  //save changes when ever the todos array is modified
  //save todos
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    //we should never modify a state variable only set a new state
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  //Add todo Handler
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((pervTodos) => {
      return [...pervTodos, { id: nanoid(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    //the following is not html code but JSX Syntax
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
