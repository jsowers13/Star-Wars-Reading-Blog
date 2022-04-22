import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      <h1 className="display-4">{store.characters[params.theid].name}</h1>

      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Characters.propTypes = {
  match: PropTypes.object,
};
