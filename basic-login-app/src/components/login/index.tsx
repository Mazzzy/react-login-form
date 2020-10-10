import React, { FC, useState, FormEvent } from "react";
import { useFormFields } from "../../libs/hooksLib";
import Logo from "../../assets/dumbbell-logo.svg";

import "./Login.css";

const Login: FC = () => {
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
    });
    function validateForm() {
        let formIsValid = true;

        return formIsValid;
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (validateForm()) {
            try {
                setTimeout(() => {
                    alert("Form submitted");
                }, 3000);
            } catch (e) {
                alert(e.message);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="custom-form">
            <div className="form-head">
                <img className="logo" src={Logo} alt="logo" />
                <div className="title">Sign in</div>
            </div>
            <div className="form-content">
                <input id="email" name="email" placeholder="email" type="text" value={fields.email} />
                <input id="password" name="password" placeholder="password" type="password" value={fields.password} />
                <div className="form-footer">
                    <a href="#">Create an account</a>
                    <button className="button">Log in </button>
                </div>
            </div>
        </form>
    );
};

export default Login;
