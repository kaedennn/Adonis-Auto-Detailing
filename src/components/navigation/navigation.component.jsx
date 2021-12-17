import React from 'react'

import logo from '../../assets/adonis_logo.png';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './navigation.styles.css';

export default function Navigation() {
    return (
        <div className='container-fluid'>
            <Navbar className='nav' bg="red" expand="lg" collapseOnSelect>
                <Navbar.Brand>
                    <img src={logo} height="30px" alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link>Testimonials</Nav.Link>
                    <Nav.Link href='gallery'>Gallery</Nav.Link>
                    <NavDropdown title="Interior">
                        <NavDropdown.Item>Complete Detail</NavDropdown.Item>
                        <NavDropdown.Item>Deep Interior Detailing</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Exterior'>
                        <NavDropdown.Item>Premier Car Wash Detailing</NavDropdown.Item>
                        <NavDropdown.Item>Adonis Car Wash and Wax Detailing</NavDropdown.Item>
                        <NavDropdown.Item>Paint Enhancement</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Add-ons">
                        <NavDropdown.Item>Basic Interior</NavDropdown.Item>
                        <NavDropdown.Item>Engine Bay Cleaning</NavDropdown.Item>
                        <NavDropdown.Item>Odor Removal</NavDropdown.Item>
                        <NavDropdown.Item>Smoke Odor Removal</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>Contact us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
