import React from 'react'

import logo from '../../assets/adonis_logo.png';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './navigation.styles.css';

export default function Navigation() {
    return (
        <div className='container-fluid'>
            <Navbar className='nav' bg="red" expand="lg" fixed="top" collapseOnSelect>
                <Navbar.Brand>
                    <Nav.Link href='/'>
                        <img src={logo} height="30vw" alt='logo'/>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='testimonials'>Testimonials</Nav.Link>
                    <Nav.Link href='gallery'>Gallery</Nav.Link>
                    <NavDropdown title="Interior">
                        <NavDropdown.Item href='complete-detail'>Complete Detail</NavDropdown.Item>
                        <NavDropdown.Item href='deep-interior-detail'>Deep Interior Detailing</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Exterior'>
                        <NavDropdown.Item href='adonis-wash-and-wax'>Adonis Car Wash and Wax</NavDropdown.Item>
                        <NavDropdown.Item href='paint-enhancement'>Paint Enhancement</NavDropdown.Item>
                        <NavDropdown.Item href='ceramic-coating'>Ceramic Coating</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Add-ons">
                        <NavDropdown.Item href='basic-detail'>Basic Interior</NavDropdown.Item>
                        <NavDropdown.Item href='premier-wash'>Premier Car Wash</NavDropdown.Item>
                        <NavDropdown.Item href='engine-bay'>Engine Bay Cleaning</NavDropdown.Item>
                        <NavDropdown.Item href='headlight-restoration'>Headlight Restoration</NavDropdown.Item>
                        {/* <NavDropdown.Item>Scratch Removal</NavDropdown.Item> */}
                        <NavDropdown.Item href='odor-removal'>Odor Removal</NavDropdown.Item>
                        <NavDropdown.Item href='smoke-removal'>Smoke Odor Removal</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='contact'>Contact us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
