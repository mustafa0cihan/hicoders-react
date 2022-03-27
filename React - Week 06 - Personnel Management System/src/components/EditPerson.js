import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditPerson = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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

    useEffect(() => {

        const loadPerson = async () => {
            const result = await axios.get(`http://localhost:3003/persons/${id}`);
            setPerson(result.data);
        };
        loadPerson();
    }, [id]);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/persons/${id}`, person);
        navigate.push("/");
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Person</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label for="floatingTextarea">First Name</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter First Name"
                            name="firstName"
                            value={firstName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="floatingTextarea">Last Name</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="floatingTextarea">E-Mail</label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="floatingTextarea">Password</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="floatingTextarea">About</label>
                        <textarea
                            type="text"
                            maxlength="100"
                            className="form-control form-control-lg"
                            placeholder="Enter Something About The Person"
                            name="about"
                            value={about}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block my-3 mx-2">Edit Person</button>
                    <Link className="btn btn-primary" to="/">
                        Back
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default EditPerson;