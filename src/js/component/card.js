import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// const Card = (props)=>{
//     const { store, actions } = useContext(Context);
//     return(<div
//                 key={index}
//                 className="card">
                
//                 <img src="https://www.gannett-cdn.com/presto/2020/02/27/USAT/d47053e3-406f-4b6c-bcea-f9822724c2f5-luke-skywalker.jpeg" class="card-img-top" alt="..."></img>	
//                 <div className="card-body">
//                     <h5 className="card-title">
//                         {props.name}
//                     </h5>
                
                    
//                     <span>Gender: {props.gender}</span>
//                     <span>Hair Color: {props.hair_color}</span>
//                     <span>Eye Color: {props.eye_color}</span>
                
//                     <button className="btn btn-success"> 
//                         <Link to={props.index} style={{textDecoration:"none", color: "white"}}>
//                             Learn More
//                         </Link>
//                     </button>
//                 </div>
//             </div>)
    
// }
// export default Card();