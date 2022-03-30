import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Person = () => {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        about: ""
    });
    const { id } = useParams();

    useEffect(() => {
        const loadPerson = async () => {
            const result = await axios.get(`http://localhost:3003/persons/${id}`);
            setPerson(result.data);
        };
        loadPerson();
    }, [id]);


    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                Back
            </Link>
            <h1 className="display-4">{person.name}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">First Name: {person.firstName}</li>
                <li className="list-group-item">Last name: {person.lastName}</li>
                <li className="list-group-item">Email: {person.email}</li>
                <li className="list-group-item">Password: {person.password}</li>
                <li className="list-group-item">About: {person.about}</li>
            </ul>
        </div>
    );
};

export default Person;