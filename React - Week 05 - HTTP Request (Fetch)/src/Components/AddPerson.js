import React from 'react';
import { Form, Button } from 'react-bootstrap';
function AddPerson({
    handleSubmit, firstName, setFirstName,
    lastName, setLastName,
    password, setPassword,
    email, setEmail,
    about, setAbout
}) {
    return (
        <div className='container' onSubmit={handleSubmit} >
            <h2>ADD PERSON</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="First Name" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last Name" value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="About" value={about}
                        onChange={(e) => setAbout(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Add Personal</Button>
            </Form>
        </div>
    )
}
export default AddPerson;