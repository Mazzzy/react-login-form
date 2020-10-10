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
        const errors = {
            email: "",
            password: "",
        };

        let formIsValid = true;
        if (!fields.email) {
            formIsValid = false;
            errors.email = "* Please enter email.";
        } else {
            // regular expression for email validation
            const emailPattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!emailPattern.test(fields.email)) {
                formIsValid = false;
                errors.email = "* Please enter valid email in the format <email>@<domain>.com";
            }
        }
        if (!fields.password) {
            formIsValid = false;
            errors.password = "* Please enter password.";
        } else {
            // regular expression for password validation
            const passwordPattern = new RegExp(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/);
            if (!fields.password.match(passwordPattern)) {
                formIsValid = false;
                errors.password = "* Please enter password of length 8 and at-least 1 special character + upper case";
            }
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
                    className={!errors?.email ? "" : "error"}
                    title={!errors?.email ? "" : errors?.email}
                />
                <input
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={fields.password}
                    onChange={handleFieldChange}
                    className={!errors?.password ? "" : "error"}
                    title={!errors?.password ? "" : errors?.password}
                />
                <div className="form-footer">
                    <a href="#">Create an account</a>
                    <button className="button">Log in </button>
                </div>
                <ul>
                    {errors?.email ? <li>{errors.email}</li> : ""}
                    {errors?.password ? <li>{errors.password}</li> : ""}
                </ul>
            </div>
        </form>
    );
};

export default Login;
