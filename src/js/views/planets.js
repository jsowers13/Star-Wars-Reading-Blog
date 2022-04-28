import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div>
      <div className="jumbotron mx-5">
        <div className="row d-flex justify-content-around">
          <div className="col-6 d-flex justify-content-end">
            <img src="https://placehold.jp/600x400.png" alt=""></img>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h1 className="display-4">{store.planets[params.theid].name}</h1>
          </div>
        </div>

        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
          nunc sed id semper risus in hendrerit gravida. Amet aliquam id diam
          maecenas ultricies mi eget mauris pharetra. Mauris nunc congue nisi
          vitae. Sed turpis tincidunt id aliquet risus feugiat. Iaculis urna id
          volutpat lacus laoreet non curabitur gravida. Pulvinar mattis nunc sed
          blandit libero volutpat. Magna eget est lorem ipsum dolor sit. Nunc
          pulvinar sapien et ligula. Porttitor leo a diam sollicitudin tempor.
          Mattis vulputate enim nulla aliquet porttitor lacus luctus. In massa
          tempor nec feugiat nisl pretium fusce id velit. Sit amet dictum sit
          amet justo. Nulla aliquet enim tortor at auctor urna. Tortor posuere
          ac ut consequat semper viverra nam libero justo. Aliquam nulla
          facilisi cras fermentum odio eu feugiat.
        </p>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col-2 text-center">Population</div>
          <div className="col-2 text-center">Climate</div>
          <div className="col-2 text-center">Terrain</div>
          <div className="col-2 text-center">Diameter</div>
          <div className="col-2 text-center">Gravity</div>
          <div className="col-2 text-center">Orbital Period</div>
        </div>
        <div className="row">
          <div className="col-2 text-center">
            {store.planets[params.theid].population}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].climate}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].terrain}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].diameter}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].gravity}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].orbital_period}
          </div>
        </div>
        <br></br>
        <p className="lead my-3 text-center">
          <Link to="/">
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Back home
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

Planets.propTypes = {
  match: PropTypes.object,
};
