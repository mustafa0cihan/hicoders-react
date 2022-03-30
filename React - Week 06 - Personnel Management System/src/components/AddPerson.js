import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AddPerson = () => {
    const navigate = useNavigate();
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        about: ""
    });

    const { firstName, lastName, email, password, about } = person;
    const onInputChange = e => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/persons", person);
        navigate.push("/");
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Person</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group my-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter First Name"
                            name="firstName"
                            value={firstName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Last Name "
                            name="lastName"
                            value={lastName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Something About The Person"
                            name="about"
                            value={about}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <br />
                    <button className="btn btn-primary btn-block mx-2">Add Person</button>
                    <Link className="btn btn-primary" to="/">
                        Back
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AddPerson;