import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  // state = useState
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef(); // to access ui component

  useEffect(() => {
    // set data from local storage if relode
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []); // empty storage never change, so it will not re-call use effect.

  useEffect(() => {
    // to store data in local storage.
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]); // any time second parameter [todos] change it will call.

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id == id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    console.log(name);
    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null; // set null when click
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div>
      <TodoList todo={todos} toggleTodo={toggleTodo} />
      {/*send useStates todos inside todo props */}
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
