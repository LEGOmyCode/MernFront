import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Heading() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#landing">MERN'd Black</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Explore">Explore</Nav.Link>
          <Nav.Link href="#favorites">My Locations</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Heading;
