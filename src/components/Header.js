import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Form } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ height: "100px", marginBottom: "50px" }}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>Pokédex</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
