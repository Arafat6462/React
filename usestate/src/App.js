import React, { Component, useState } from "react";

function App() {
  // const [current_state, update_current_state] = useState(4);

  const [current_state, update_current_state] = useState(4);

  // const [current_state, update_current_state] = useState(()=>{
  //   return 4 // will call only onen time
  // });

  function decrement() {
    // update_current_state(current_state - 1); // not good idea dec by 1 even we change 2 times
    // update_current_state(current_state - 1); // not good idea (current_state=>4-1=3 and again 4-1=3)
    update_current_state((previousCount) => previousCount - 1);
  }
  function increment() {
    // update_current_state(current_state + 1);
    update_current_state((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{current_state}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
