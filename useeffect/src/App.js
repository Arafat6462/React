import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) =>setItems(json));

    console.log("render");
  }, [resourceType]); // when this 2nd [] change then this useEffect will run. empty [] will render once. onemount.

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

export default App;
