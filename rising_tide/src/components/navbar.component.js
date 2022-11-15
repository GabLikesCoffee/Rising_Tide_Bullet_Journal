import React from "react"
//import './App.css';
//Already installed bootstrap through the terminal so no need to do it again
import "bootstrap/dist/css/bootstrap.min.css";
//Already installed react-router-dom through the terminal so no need to do it again
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Not using App.js anymore

function App() {
  return (
    <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="lightblue" variant="light">
      <Container>
        <Navbar.Brand href="/">Rising Tide</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/weeklyView">Weekly View</Nav.Link>
            <Nav.Link href="/archivePage">Archive Page</Nav.Link>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/signUpPage">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/signInPage">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="/">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default App;