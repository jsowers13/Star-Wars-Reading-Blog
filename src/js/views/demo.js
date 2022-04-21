import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import Card from "../component/card.js"

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const pic = "https://via.placeholder.com/250"

	
	return (
		<div className="container">
			<div className="card-group">
				{store.characters.map((item, index) => {
					return (
					// <Card name={item.name} gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} index={"/single/" + index}/>
						<div
							key={index}
							className="card">
							
							<img src={pic} class="card-img-top" alt="..."></img>	
							<div className="card-body">
								<h5 className="card-title">
									{item.name}
								</h5>
							
								
								<h6>Gender: {item.gender}</h6>
								<h6>Hair Color: {item.hair_color}</h6>
								<h6>Eye Color: {item.eye_color}</h6>
							</div>
							<div className="card-footer bg-transparent border-0">
								<Link to={"/single/" + index} style={{textDecoration:"none", color: "white"}}>
									<button className="btn btn-success"> 
										Learn More
									</button>
								</Link>
								
									
							</div>
						</div>
						
					);
				})}
			</div>
			<br />
			<div className="card-group">
				{store.planets.map((item, index) => {
					return (
					// <Card name={item.name} gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} index={"/single/" + index}/>
						<div
							key={index}
							className="card">
							
							<img src={pic} class="card-img-top" alt="..."></img>	
							<div className="card-body">
								<h5 className="card-title">
									{item.name}
								</h5>
							
								
								<h6>Population: {item.population}</h6>
								<h6>Climate: {item.climate}</h6>
								<h6>Terrain: {item.terrain}</h6>
							</div>
							<div className="card-footer bg-transparent border-0">
								<Link to={"/single/" + index} style={{textDecoration:"none", color: "white"}}>
									<button className="btn btn-success"> 
										Learn More
									</button>
								</Link>
							</div>		
							
						</div>
						
					);
				})}
			</div>
			<br />
			<div className="card-group">
				{store.starships.map((item, index) => {
					return (
					// <Card name={item.name} gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} index={"/single/" + index}/>
						<div
							key={index}
							className="card">
							
							<img src={pic} class="card-img-top" alt="..."></img>	
							<div className="card-body">
								<h5 className="card-title">
									{item.name}
								</h5>															
								<h6>Top Speed: {item.max_atmosphering_speed}</h6>
								<h6>Crew Size: {item.crew}</h6>
								<h6>Cost: {item.cost_in_credits}</h6>
							</div>	
							<div className="card-footer bg-transparent border-0">
								<Link to={"/single/" + index} style={{textDecoration:"none", color: "white"}}>
									<button className="btn btn-success"> 
										Learn More
									</button>
								</Link>
							</div>													
						</div>
						
					);
				})}
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
