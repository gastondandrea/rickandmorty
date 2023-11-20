import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className="searchBar-container">
         <input type='search' onChange={handleChange} />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
