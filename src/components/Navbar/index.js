import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Heading() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#landing">MERN'd Black</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="../../pages/Home">Explore</Nav.Link>
          <Nav.Link href="#favorites">Favorites</Nav.Link>
          <Nav.Link href="../../pages/About">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Heading;
