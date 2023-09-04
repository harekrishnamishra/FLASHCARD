import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react'

function NavBar() {
    return (
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary nav">
            <Container>
                <Navbar.Brand href="#"><h2><span id='span'>Fl</span>ashcard</h2></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar