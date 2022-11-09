import React from "react";
import Table from "./Table/Table";

function Body() {
  const columnName = [
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
    {
      heading: "username",
      value: "username",
    },
  ];

  const dataTable = [
    {
      id: 1,
      name: "Leanne",
      username: "Bret",
      email: "@april.biz",
      phone: "1-770 ",
      website: "egard.org",
    },
     {
      id: 1,
      name: "Arafat Hossain",
      username: "B",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
  ];

  return <Table columnName={columnName} data={dataTable} />;
}
export default Body;
