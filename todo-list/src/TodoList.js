import React from "react";
import Todo from "./Todo";

export default function TodoList({ todo, toggleTodo }) {
  return (
    // <div>
    //   <h1>hello world</h1>
    //   {todo[0]} {/* curley braces to say it is javascript code */}
    // </div>

    todo.map((to) => {
      /*iterate over all todo and store in to. finally send it Todo file as props*/

      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={to} />;
      {
        /* key is to set each child id so react can update only edited file.*/
      }
    })
  );
}
