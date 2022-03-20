import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
             <img src="https://res.cloudinary.com/karthy/image/upload/v1647568843/Paripoorna/Registration_Logo_omm6v9.ico" alt="logo" width="30" height="30"/> Enrolling-App
              </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#applicant">Applicants</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
