import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar  mb-3">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Star_Wars_logo.jpg"
          className="navbar-brand mb-0 ms-5 h1"
          style={{ height: 100 + "px" }}
        ></img>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul
            className="dropdown-menu bg-light"
            aria-labelledby="dropdownMenuButton1"
          >
            <li className="bg-light">
              <span className="bg-light text-black">DropDown Item</span>
            </li>
            <li className="bg-light">
              <span className="bg-light text-black">DropDown Item</span>
            </li>
            <li className="bg-light">
              <span className="bg-light text-black">DropDown Item</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
