import React, { useState } from "react";
import style from './Form.module.css'
import './Form.css'
import validation from "./validation";
export default function Form({login}){

    const [userdata, setUserdata] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setUserdata({...userdata, [name]: event.target.value});
        validation({...userdata, [name]: event.target.value}, setErrors, errors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userdata);
    }
    
    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-container-transparente">
                <div className="form-email">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" value={userdata.email} onChange={handleChange} className={errors.email || !userdata.email ? style.error : style.succes}/>
                    <span>{errors.email}</span>
                </div>      
                <div className="form-password">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={userdata.password} onChange={handleChange} className={errors.password || !userdata.password ? style.error : style.succes}/>
                    <span>{errors.password}</span>
                </div>
                <button className="form-button-sumit" type="Submit" >Login</button>
            </div>
        </form>
    )
};