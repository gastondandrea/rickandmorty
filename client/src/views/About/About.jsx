import React from "react";
import './About.css';

export default function About(){
    return(
        <div className="about about-container">
                
            <div className="about card-descripcion">

                <div className="about titulo">
                    <h1>Gastón D'Andrea</h1>
                </div>

                <div className="about descripcion">
                    <h3>Status: Alive</h3>
                    <h3>Species: Human</h3>
                    <h3>Gender: Male</h3>
                    <h3>Origin: Earth</h3>
                </div>

                <div className="about about-id">
                    <h2>0</h2>
                </div>        

            </div>

            <div className="about card-separador"></div>

            <div className="about card-imagen">
                <img src="../../img/foto-perfil.png" alt="Foto Gastón" />
            </div>
        
        </div>
    )
}
