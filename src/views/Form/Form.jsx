import React, { useState } from "react";
import style from './Form.module.css'
import './Form.css'
import validation from "./validation";

export default function Form(){

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
    
    return(
        <form className="form-container">
            <div className="form-container-transparente">
                <div className="form-email">
                    <label htmlFor="">Email: </label>
                    <input type="text" name="email" value={userdata.email} onChange={handleChange} className={errors.email || !userdata.email ? style.error : style.succes}/>
                    <span>{errors.email}</span>
                </div>
                
                <div className="form-password">
                    <label htmlFor="">Password: </label>
                    <input type="password" name="password" value={userdata.password} onChange={handleChange}/>
                </div>
                <button className="form-button-sumit" type="Submit" >Submit</button>
            </div>
        </form>
    )
};