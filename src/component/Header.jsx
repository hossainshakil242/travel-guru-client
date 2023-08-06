import React from 'react';
import logo from '/logo.png'
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Image src={logo} style={{ width: '120px', height: '56px' }} />
                <Form className='ms-lg-5'>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">News</Nav.Link>
                        <Nav.Link href="#action2">Destination</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                        <Button className='btn btn-warning'>Login</Button>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;