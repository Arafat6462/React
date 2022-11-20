import React from "react";
import "./Table.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function Body({ columnName }) {
  const [invoiceList, setInvoiceList] = useState([]);
  const navigate = useNavigate(); // to redirect the page

  // GET Data
  const getAllInvoice = () => {
    Axios.get("http://localhost:3001/invoice").then((response) => {
      setInvoiceList(response.data);
      console.log("get invoice");
    });
  };
  useEffect(() => {
    getAllInvoice();
  }, []);

  // Update
  const Update = () => {
    console.log("Update is : ");
  };

  return (
    <div>
      <h1>Invoice Table</h1>

      {/* Download data as CSV */}
      <CSVLink
        data={invoiceList}
        filename="Invoice"
        className="button download"
      >
        Download as CSV
      </CSVLink>

      {/* Download data as XLS */}
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="button download"
        table="table"
        filename="Invoice"
        sheet="tablexls"
        buttonText="Download as XLS"
      />

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
  <tr key={dataObject.id}>
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
        <NavLink
          // onClick={() => {
          //   updateInvoice(dataObject);
          // }}
          className="button update"
          to={"/update"}
          state={dataObject}
        >
          Update
        </NavLink>
      </td>
    }
  </tr>
);

// Delete
const deleteInvoice = (id) => {
  Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
    setInvoiceList(response.data);
  });
};

//Update
const updateInvoice = (dataObject) => {
  console.log("update : " + dataObject.id);
  console.log(dataObject);
};

export default Body;
