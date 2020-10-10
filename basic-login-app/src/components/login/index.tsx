import React, { FC, useState, FormEvent } from "react";
import { useFormFields } from "../../libs/hooksLib";
import Logo from "../../assets/dumbbell-logo.svg";

import "./Login.css";

const Login: FC = () => {
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
    });

    const errorsInitialState = {
        email: "",
        password: "",
    };

    const [errors, setErrors] = useState(errorsInitialState);

    const validateForm = () => {
        let errors = {
            email: "",
            password: "",
        };

        let formIsValid = true;
        if (!fields.email) {
            formIsValid = false;
            errors.email = "* Please enter email.";
        }
        if (!fields.password) {
            formIsValid = false;
            errors.password = "* Please enter password.";
        }
        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
    };

    return (
        <form onSubmit={handleSubmit} className="custom-form">
            <div className="form-head">
                <img className="logo" src={Logo} alt="logo" />
                <div className="title">Sign in</div>
            </div>
            <div className="form-content">
                <input
                    id="email"
                    name="email"
                    placeholder="email"
                    type="text"
                    value={fields.email}
                    onChange={handleFieldChange}
                    className={errors?.email ? "error" : ""}
                />
                <input
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={fields.password}
                    onChange={handleFieldChange}
                    className={errors?.password ? "error" : ""}
                />
                <div className="form-footer">
                    <a href="#">Create an account</a>
                    <button className="button">Log in </button>
                </div>
            </div>
        </form>
    );
};

export default Login;
