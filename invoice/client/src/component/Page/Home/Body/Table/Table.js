import React from "react";
import "./Table.css";
import Axios from "axios";
import { useState, useEffect } from "react";


// tableData,
function Body({ columnName }) {
  const [invoiceList, setInvoiceList] = useState([]);

  // GET Data
  useEffect(() => {
    console.log("useEffect");
    Axios.get("http://localhost:3001/invoice").then((response) => {
      setInvoiceList(response.data);
    });
  }, []);

  // Update
  const Update = () => {
    console.log("Update is : ");
  };

  return (
    <div>
      <h1>Invoice Table</h1>

      <button className="button download">Download</button>
      <div>
        <table id="table">
          <thead>
            <tr>
              {columnName.map((headName, index) => (
                <TableHeadName headName={headName} />
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoiceList.map((dataObject, index) => (
              <TableRow dataObject={dataObject} columnName={columnName} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableHeadName = ({ headName }) => <th>{headName.heading}</th>;

const TableRow = ({ dataObject, columnName }) => (
  <tr>
    {columnName.map((columnsItem, index) => {
      return <td>{dataObject[`${columnsItem.value}`]}</td>;
    })}
    {
      <td>
        <button
          className="button delete"
          onClick={() => {
            deleteInvoice(dataObject.id);
          }}
        >
          Delete
        </button>
        <button className="button update">Update</button>
        {/* {console.log(dataObject["id"])} */}
      </td>
    }
  </tr>
);

// Delete
const deleteInvoice = (id) => {
  Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {});
  console.log("iiiiiiiiii : " + id);
};

export default Body;
