import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About'

function NavBarComp() {
    return (
        <BrowserRouter>
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        variant="pills"
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div >
        </BrowserRouter >
    )
};
export default NavBarComp;