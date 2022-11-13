import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <Link className="active" to="/">
            Home
          </Link>
          <Link to="/update">Update</Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
