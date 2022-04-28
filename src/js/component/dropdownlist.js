import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Dropdown = () => {
  const { store, actions } = useContext(Context);
  return (
    <ul
      className="dropdown-menu bg-light"
      aria-labelledby="dropdownMenuButton1"
    >
      {store.favorites.map((item, index) => {
        return (
          <li className="bg-light">
            <span className="bg-light text-black">{item.name}</span>
            <span className="bg-light text-black">{index}</span>
          </li>
        );
      })}
      {/* <li className="bg-light">
              <span className="bg-light text-black">DropDown Item</span>
            </li>
            <li className="bg-light">
              <span className="bg-light text-black">DropDown Item</span>
            </li>
            <li className="bg-light">
              <span className="bg-light text-black">DropDown Item</span>
            </li> */}
    </ul>
  );
};
