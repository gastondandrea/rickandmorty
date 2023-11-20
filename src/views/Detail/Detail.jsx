import React, {useState, useEffect} from "react";
import "./Detail.css"

import { useParams } from "react-router-dom";

export default function Detail({URL}){
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(()=>{
        fetch(`${URL}/${id}`)
            .then(res =>res.json())
            .then((data)=>{
                if(data.name){
                    setCharacter(data);
                }else{
                    window.alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    },[id]);

    return(
        <div>
            <h1>{character.name}</h1>
            <h3>{character.staus}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
            <img src={character.image} alt={character.name} />
        </div>
    )
};