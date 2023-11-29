import './Form.css'
import style from './Form.module.css'
import React, { useState } from "react";
import validation from "./validation";

export default function Form({login}){

   // Estados Form
    const [userdata, setUserdata] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    //Función handleChange
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserdata({
            ...userdata,
            [name]:value
        })
        setErrors(validation({
            ...userdata,
            [name]:value
        }))
        ;
    }

    //Función handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userdata);
    }
    
    return(
        <form className="form-container" onSubmit={handleSubmit}>

            <div className="form-container-transparente">

                {/* 
                    EMAIL
                */}
                <div className="form-email">
                    <label htmlFor="email">Email: </label>
                    <input type="text" key = "email" name="email" value={userdata.email} onChange={handleChange}/>
                    <span>{errors.email ? errors.email:null}</span>
                </div>      
                {/* 
                    PASSWORD
                */}
                <div className="form-password">
                    <label htmlFor="password">Password: </label>
                    <input type="password" key = "password" name="password" value={userdata.password} onChange={handleChange} />
                    <span>{errors.password ? errors.password : null}</span>
                </div>
                {/* 
                    SUBMIT
                */}
                <button className="form-button-sumit" type="Submit" >Login</button>

            </div>

        </form>
    )
};