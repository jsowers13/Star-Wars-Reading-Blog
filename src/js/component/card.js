import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import "../../styles/card.css";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card-group ">
      <div className="card border-0" style={{ width: 250 + "px" }}>
        <Link
          to={"/" + [props.group] + "/" + [props.index]}
          style={{ textDecoration: "none", color: "white" }}
        >
          <img src={props.pic} className="card-img-top" alt="..."></img>
        </Link>
        <div className="card-body ">
          <h5 className="card-title">{props.name}</h5>

          <h6>
            {props.first_att}: {props.first_loc}
          </h6>
          <h6>
            {props.second_att}: {props.second_loc}
          </h6>
          <h6>
            {props.third_att}: {props.third_loc}
          </h6>
        </div>
        <div className="card-footer bg-black border-0">
          <Link
            to={"/" + [props.group] + "/" + [props.index]}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn btn-success">Learn More</button>
          </Link>
          <button className="btn btn-primary ms-5">Save</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  first_att: PropTypes.string,
  first_loc: PropTypes.string,
  second_att: PropTypes.string,
  second_loc: PropTypes.string,
  third_att: PropTypes.string,
  third_loc: PropTypes.string,
  index: PropTypes.number,
};
