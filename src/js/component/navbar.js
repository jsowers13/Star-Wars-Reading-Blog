import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Placeholder } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const space = "    ";
  return (
    <nav className="navbar  mb-3">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Star_Wars_logo.jpg"
          className="navbar-brand mb-0 ms-5 h1"
          style={{ height: 100 + "px" }}
        ></img>
      </Link>
      <Dropdown>
        <Dropdown.Toggle
          className="toggle"
          variant="primary"
          id="dropdown-basic"
          size="lg"
        >
          Saved
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {store.favorites.length > 0 ? (
            store.favorites.map((selected, i) => (
              <Dropdown.Item
                className="d-flex justify-content-end"
                href="#/action-1"
                key={i}
              >
                {selected}
                <Placeholder xs={1} variant="light" />
                <Button
                  className="float-right"
                  variant="danger"
                  onClick={() => actions.getFavorites(selected, i)}
                >
                  <i className="fas fa-trash-alt" />
                </Button>
              </Dropdown.Item>
            ))
          ) : (
            <DropdownItem>There are no favorites</DropdownItem>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};
