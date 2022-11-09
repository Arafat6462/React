import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <a className="active" href="#home">
            Show
          </a>
          <a href="#contact">Update</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}
export default Header;
