import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

import { Card } from "../component/card";

// const Card = (props)=>{
//     const { store, actions } = useContext(Context);
// 	const pic = "https://via.placeholder.com/250"

//     return(
// 		<div className="card-group">
// 			{store[props.group].map((item, index) => {
// 				return (

// 					<div
// 						key={index}
// 						className="card">

// 						<img src={pic} classname="card-img-top" alt="..."></img>
// 						<div className="card-body">
// 							<h5 className="card-title">
// 								{item.name}
// 							</h5>

// 							<h6>{props.first_att}: {item[props.first_loc]}</h6>
// 							<h6>{props.second_att}: {item[props.second_loc]}</h6>
// 							<h6>{props.third_att}: {item[props.third_loc]}</h6>
// 						</div>
// 						<div className="card-footer bg-transparent border-0">
// 							<Link to={"/single/" + index} style={{textDecoration:"none", color: "white"}}>
// 								<button className="btn btn-success">
// 									Learn More
// 								</button>
// 							</Link>

// 						</div>
// 					</div>

//         );
//     })}
// </div>)

// }

export const Demo = () => {
  const { store, actions } = useContext(Context);
  //   const pic = "https://via.placeholder.com/250";

  return (
    <div className="container w-75">
      <h1>Characters</h1>
      <div className="d-flex flex-direction-row w-100 cards">
        {store.characters.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic="https://via.placeholder.com/250"
              group="characters"
              first_att="Gender"
              first_loc={item.gender}
              second_att="Hair Color"
              second_loc={item.hair_color}
              third_att="Eye Color"
              third_loc={item.eye_color}
              key={index}
            />
          );
        })}
      </div>

      <br />
      <h1>Planets</h1>
      <div className="d-flex flex-direction-row w-100 ">
        {store.planets.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic="https://via.placeholder.com/250"
              group="planets"
              first_att="Population"
              first_loc={item.population}
              second_att="Climate"
              second_loc={item.climate}
              third_att="Terrain"
              third_loc={item.terrain}
              key={index}
            />
          );
        })}
      </div>

      {/* <Card
        group="planets"
        first_att="Population"
        first_loc="population"
        second_att="Climate"
        second_loc="climate"
        third_att="Terrain"
        third_loc="terrain"
      /> */}
      <br />
      <h1>Starships</h1>
      <div className="d-flex flex-direction-row w-100 ">
        {store.starships.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic="https://via.placeholder.com/250"
              group="starships"
              first_att="Top Speed"
              first_loc={item.max_atmosphering_speed}
              second_att="Crew Size"
              second_loc={item.crew}
              third_att="Cost"
              third_loc={item.cost_in_credits}
              key={index}
            />
          );
        })}
      </div>

      {/* <Card
        group="starships"
        first_att="Top Speed"
        first_loc="max_atmosphering_speed"
        second_att="Crew Size"
        second_loc="crew"
        third_att="Cost"
        third_loc="cost_in_credits"
      /> */}
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
