import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import styles from './images.module.css'
function PhotoFilters(props) {
const sortImages =(event) =>{

    props.sort(event.target.title)
}
  return (
      
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" title="all" onClick={(e) => sortImages(e)}>Photos</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" className={styles.NavbarIcon}><CameraAltIcon color="success" fontSize="large" /></Navbar.Toggle>
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '400px' }}
        navbarScroll
      >
        <Nav.Link href="#monochrome" title="monochrome" onClick={(e) => sortImages(e)}>Monochrome</Nav.Link>
        <Nav.Link href="#street" title="street" onClick={(e) => sortImages(e)}>Street</Nav.Link>
        <Nav.Link href="#people" title="people" onClick={(e) => sortImages(e)}>People</Nav.Link>
        <Nav.Link href="#silhouette" title="silhouette" onClick={(e) => sortImages(e)}>Silhouette</Nav.Link>
        <NavDropdown title="Orientation" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#portrait" title="portrait" onClick={(e) => sortImages(e)}>Portrait</NavDropdown.Item>
          <NavDropdown.Item href="#landscape" title="landscape" onClick={(e) => sortImages(e)}>Landscape</NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item> */}
        </NavDropdown>
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default PhotoFilters