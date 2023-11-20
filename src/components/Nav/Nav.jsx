import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({onSearch}){
    return(
        <div className="nav-container">
            <div className="nav-onSearch">
                <SearchBar onSearch={onSearch} />
            </div>
            <Link to="/about">
                <button className="nav-button nav-button-about">About</button>
            </Link>
            <Link to="/home">
                <button className="nav-button nav-button-home">Home</button>
            </Link>
        </div>
    )
}