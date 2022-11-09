import React from "react";
import "./Table.css";
// tableData,
function Body({ columnName, data }) {
  return (
    <div>
      <h1>Invoice Table</h1>
      <button className="download">Download</button>
      <div>
        <table id="customers">
          <thead>
            <tr>
              {columnName.map((headName, index) => (
                <TableHeadName headName={headName} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow item={item} columnName={columnName} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableHeadName = ({ headName }) => <th>{headName.heading}</th>;

const TableRow = ({ item, columnName }) => (
  <tr>
    {columnName.map((columnsItem, index) => {
      return <td>{item[`${columnsItem.value}`]}</td>;
    })}

    {console.log(columnName)}
  </tr>
);

export default Body;
