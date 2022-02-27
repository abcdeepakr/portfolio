import React from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

import styles from './navbar.module.css'
const NavbarComponent = () => {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className ={styles.navbar}>
                <Container>
                    <Navbar.Brand href="/">Deepak Rawat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav >
                            <Link  href="/" passHref  ><p className = {styles.links}>Home</p></Link>
                            <Link  href="/blogs" passHref><p className = {styles.links}>Blog</p></Link>
                            <Link eventKey={2} href="/photos" passHref>
                            <p className = {styles.links}>Photos</p>
                            </Link>
                            {/* <Link eventKey={3} href="/projects" passHref>
                            <p className = {styles.links}>Projects</p>
                            </Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavbarComponent
