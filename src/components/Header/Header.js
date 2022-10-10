import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../Header/Header.css';


const Header = () => {
    return (
        <div className="header">
            {/* <NavLink >
                <Link to={'/topics'}>Topics</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blog'}>Blog</Link>
            </NavLink> */}
            <Navbar bg="primary" variant="dark" >
                <Container className='header'>
                    <Navbar.Brand as={Link} to={'/'}>Skill Assessment</Navbar.Brand>
                    <div className='linkstochange'>
                        <Nav className="me-auto ">
                            <Nav.Link as={Link} to={'/topics'}>Topics</Nav.Link>
                            <Nav.Link as={Link} to={'/statistics'}>Statistics</Nav.Link>
                            <Nav.Link as={Link} to={'/blog'}>Blog</Nav.Link>
                        </Nav>
                    </div>

                </Container>
            </Navbar>
        </div>

    );
};

export default Header;