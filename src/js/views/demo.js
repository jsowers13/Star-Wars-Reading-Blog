import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import Card from "../component/card.js"

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="d-flex">
				{store.characters.map((item, index) => {
					return (
						<div
							key={index}
							className="card">
							
							<img src="https://www.gannett-cdn.com/presto/2020/02/27/USAT/d47053e3-406f-4b6c-bcea-f9822724c2f5-luke-skywalker.jpeg" class="card-img-top" alt="..."></img>	
							<div className="card-body">
								<h5 className="card-title"><Link to={"/single/" + index}>
								<span>{item.name}</span>
								
							</Link></h5>
								
							<span>Gender:{item.gender}</span>
								<span>Hair Color:{item.hair_color}</span>
								<span>Eye Color:{item.eye_color}</span>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Learn More
							</button></div>
							
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
