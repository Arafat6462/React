// npm init
// npm install mysql express
// node index.js
// yarn add cors

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "arafat64",
  database: "invoiceSystem",
});

// get request
app.get("/invoice", (req, res) => {
  db.query("SELECT * FROM invoice", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

// Delete
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM invoice WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
