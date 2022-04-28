import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const pic = "https://via.placeholder.com/250";
  const pic1 = "https://api.time.com/wp-content/uploads/2017/12/r2d2.jpg";
  const pic2 =
    "https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine-300x300.jpg";
  const pic3 =
    "https://technabob.com/blog/wp-content/uploads/2014/08/falcon-960.jpg";

  return (
    <div className="parent">
      <h1>Characters</h1>
      <div className="d-flex flex-direction-row w-100 cards">
        {store.characters.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic={pic1}
              group="characters"
              first_att="Gender"
              first_loc={item.gender}
              second_att="Hair Color"
              second_loc={item.hair_color}
              third_att="Eye Color"
              third_loc={item.eye_color}
              key={index}
              index={index}
            />
          );
        })}
      </div>
      <br />
      <h1>Planets</h1>
      <div className="d-flex flex-direction-row w-100 cards">
        {store.planets.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic={pic2}
              group="planets"
              first_att="Population"
              first_loc={item.population}
              second_att="Climate"
              second_loc={item.climate}
              third_att="Terrain"
              third_loc={item.terrain}
              key={index}
              index={index}
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
      <div className="d-flex flex-direction-row w-100 cards">
        {store.starships.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic={pic3}
              group="starships"
              first_att="Top Speed"
              first_loc={item.max_atmosphering_speed}
              second_att="Crew Size"
              second_loc={item.crew}
              third_att="Cost"
              third_loc={item.cost_in_credits}
              key={index}
              index={index}
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
    </div>
  );
};
