import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch, randomPersonaje}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className="searchBar-container">
         <input className="searchBar-input" type='search' onChange={handleChange} />
         <button className="searchBar-button searchBar-button-agregar" onClick={() => onSearch(id)}>Agregar</button>
         <button className="searchBar-button searchBar-button-random" onClick={() => randomPersonaje()}>Random</button>
      </div>
   );
}
