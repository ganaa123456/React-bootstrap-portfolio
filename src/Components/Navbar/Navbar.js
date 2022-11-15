import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto gap-4">
            <Nav.Link>
              <Link to="">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="service">Service</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarMenu;
