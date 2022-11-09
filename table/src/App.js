import React, { Component, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [dataTable, setDataTable] = useState([]);
  // console.log(dataTable);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      heading: "Name",
      value: "name",
    },
    {
      heading: "Email",
      value: "email",
    },
    {
      heading: "Phone",
      value: "phone",
    },
    {
      heading: "Website",
      value: "website",
    },
  ];

  return (
    <div>
      <h1>Dynamic Table</h1>
      <Table data={dataTable} columns={columns} />
    </div>
  );
}

export default App;
