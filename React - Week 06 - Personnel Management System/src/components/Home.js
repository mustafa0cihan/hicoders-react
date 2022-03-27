import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        loadPersons();
    }, []);

    const loadPersons = async () => {
        const result = await axios.get("http://localhost:3003/persons");
        setPersons(result.data);
    };

    const deletePerson = async (id) => {
        await axios.delete(`http://localhost:3003/persons/${id}`);
        loadPersons();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">About</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((person, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.password}</td>
                                <td class="overflow-md-hidden">{person.about}</td>
                                <td>
                                    <div className="d-flex">
                                        <Link className="btn btn-primary mx-3" to={`/persons/${person.id}`}>
                                            View
                                        </Link>
                                        <Link
                                            className="btn btn-warning mx-3"
                                            to={`/persons/edit/${person.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            class="btn btn-danger mx-3"
                                            onClick={() => deletePerson(person.id)}
                                            to="/"
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Home;