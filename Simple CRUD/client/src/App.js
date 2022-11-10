import React, { Component } from "react";
import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPostiont] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);
  const [newWage, setNewWage] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      // send it to backend from frontend.
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
      // auto update
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
      console.log("Response is : "+response);
      console.log("Response is =: "+employeeList);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        // auto update
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="information">
      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Age:</label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <label>Position:</label>
      <input
        type="text"
        onChange={(event) => {
          setPostiont(event.target.value);
        }}
      />
      <label>Country:</label>
      <input
        type="text"
        onChange={(event) => {
          setCountry(event.target.value);
        }}
      />
      <label>Wage (year):</label>
      <input
        type="number"
        onChange={(event) => {
          setWage(event.target.value);
        }}
      />
      <button onClick={addEmployee} type="submin">
        Add Employee
      </button>
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <button onClick={getEmployee}>Show Employee</button>
      {employeeList.map((val, key) => {
        return (
          <div className="employee">
            <div>
              <h3>Name : {val.name}</h3>
              <h3>Age : {val.age}</h3>
              <h3>Country : {val.country}</h3>
              <h3>Position : {val.position}</h3>
              <h3>Wage : {val.wage}</h3>
            </div>

            <div>
              <input
                type="text"
                placeholder="wage = 200"
                onChange={(event) => {
                  setNewWage(event.target.value);
                }}
              ></input>
              <button
                onClick={() => {
                  updateEmployeeWage(val.id);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  deleteEmployee(val.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
