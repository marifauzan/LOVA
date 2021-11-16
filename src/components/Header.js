import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">LOVA</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Location">
            Location
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
