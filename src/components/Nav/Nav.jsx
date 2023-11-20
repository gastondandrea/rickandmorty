import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({onSearch}){
    return(
        <div className="nav-container">
            <SearchBar onSearch={onSearch} />
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    )
}