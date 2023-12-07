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
        <div className="detail detail-container">
            <div className="detail card-descripcion">
                <div className="detail titulo">
                    <h1>{character.name}</h1>
                </div>

                <div className="detail descripcion">
                    <h3>Status: {character.status}</h3>
                    <h3>Species: {character.species}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Origin: {character.origin?.name}</h3>
                </div>
                <div className="detail detail-id">
                    <h2>{character.id}</h2>
                </div>               
            </div>
            <div className="detail card-separador"></div>
            <div className="detail card-imagen">
                <img src={character.image} alt={character.name} />
            </div>
            
        </div>
    )
};