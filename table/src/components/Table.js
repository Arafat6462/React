import React from "react";
import moduleName from "./Table.css";

function Table({ data, columns }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* <th>Name</th>
            <th>Email</th> */}
            {columns.map((item, index) => (
              <TableHeadItem item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Arafat</td>
            <td>Arafat@gmail.com</td>
          </tr> */}
          {data.map((item, index) => (
            <TableRow item={item} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, columns }) => (
  <tr>
    {columns.map((columnsItem, index) => {
      return <td>{item[`${columnsItem.value}`]}</td>;
    })}
  </tr>
);

export default Table;
