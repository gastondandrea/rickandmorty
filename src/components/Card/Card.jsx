import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

export default function Card({id, name, species ,status, gender, origin, image, onClose}) {
   return (
      
      <div className="card-container">
         <button onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}><h2>{name} </h2></Link>
         <h4>Id: {id}</h4>
         <h4>Status: {status}</h4>
         <h4>Species: {species}</h4>
         <h4>Gender: {gender}</h4>
         <h4>Origin: {origin}</h4>
         <img src={image} alt={name} />
      </div>
   );
}
