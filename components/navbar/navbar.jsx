import React from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

import styles from './navbar.module.css'
const NavbarComponent = () => {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Deepak Rawat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Home</Nav.Link> */}
                            {/* 
                            <Nav.Link href="#pricing">Read</Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav >
                            <Link  href="/" ><p className = {styles.links}>Home</p></Link>
                            <Link  href="/blogs"><p className = {styles.links}>Blog</p></Link>
                            <Link eventKey={2} href="#photos">
                            <p className = {styles.links}>Photos</p>
                            </Link>
                            <Link eventKey={3} href="#projects">
                            <p className = {styles.links}>Projects</p>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavbarComponent
