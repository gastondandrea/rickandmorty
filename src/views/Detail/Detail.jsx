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
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            <img src={character.image} alt={character.name} />
        </div>
    )
};