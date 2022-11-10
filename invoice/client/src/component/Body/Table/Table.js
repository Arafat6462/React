import React from "react";
import "./Table.css";
import Axios from "axios";
import { useState } from "react";

// tableData,
function Body({ columnName }) {
  const [invoiceList, setInvoiceList] = useState([]);

  // GET Data
  const getInvoice = () => {
    Axios.get("http://localhost:3001/invoice").then((response) => {
      setInvoiceList(response.data);
    });
  };

  return (
    <div>
      {getInvoice()}
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
        <button className="button delete">Delete</button>
        <button className="button update">Update</button>
      </td>
    }
  </tr>
);

export default Body;
