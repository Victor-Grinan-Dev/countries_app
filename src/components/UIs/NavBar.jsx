import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        width: "100vw",
      }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Countries App </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link to="home">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/browse">
              <Nav.Link>Browse</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <LinkContainer to="/favorites">
                <NavDropdown.Item>Favorites</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/analizer">
                <NavDropdown.Item>Data Analizer</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
