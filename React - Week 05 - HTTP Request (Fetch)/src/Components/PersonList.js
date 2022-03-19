import React from 'react';
import { Table } from 'react-bootstrap';
function PersonList({ list, DeletePerson }) {
    return (
        <div>
            <h2>
                PERSON LIST
            </h2>
            <Table responsive="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td>{e.about}</td>
                            <td>
                                <button onClick={() => DeletePerson(e.id)} >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
};

export default PersonList;