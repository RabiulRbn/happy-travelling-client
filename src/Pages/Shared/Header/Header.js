import React from 'react';
import {  Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header-container" >
            <Navbar variant="dark" fixed="top"  collapseOnSelect expand="lg " className="navbar" >
                <Container>
                    <Navbar.Brand className="nav-logo" style={{color:"Blue"}}  href="#home">TourEO</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-link" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="nav-link" as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link className="nav-link" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="nav-link" as={HashLink} to="/home#contact">Contact</Nav.Link>
                        <Nav.Link className="nav-link" as={HashLink} to="/orders">My Orders</Nav.Link>
                        <Nav.Link className="nav-link" as={HashLink} to="/addService">Add-Events</Nav.Link>
                        <Nav.Link className="nav-link" as={HashLink} to="/manageService">Manage-Events</Nav.Link>
                        
                        
                         {user?.displayName ?
                            <Button onClick={logOut}  variant="light" className="logout">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                           <a className="user-name" href="#login">{user?.displayName}</a>
                        </Navbar.Text> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;