import React from "react"
//import './App.css';
//Already installed bootstrap through the terminal so no need to do it again
import "bootstrap/dist/css/bootstrap.min.css";
//Already installed react-router-dom through the terminal so no need to do it again
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

let bigFont = false;

const toggleFontSize = event => {
  let fontSizeBtn = document.getElementById("fontSizeBtn");
  let labels = document.getElementsByTagName("label");
  let paragraphs = document.getElementsByTagName("p");
  let headers = document.getElementsByTagName("h1");

  if(bigFont === false){
    fontSizeBtn.innerHTML = "Reduce Font Size"

    for(let l of labels){
      l.style = "font-size: 3.3vw"
    }
    for(let p of paragraphs){
      p.style = "font-size: 26px"
    }
    for(let h of headers){
      h.style = "font-size: 42px"
    }
  }
  else{
    fontSizeBtn.innerHTML = "Increase Font Size"
    for(let l of labels){
      l.style = "font-size: 3vw"
    }
    for(let p of paragraphs){
      p.style = "font-size: 16px"
    }
    for(let h of headers){
      h.style = "font-size: 32px"
    }
  }
  bigFont = !bigFont;
}

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
            <Nav.Link href="/helpPage">Help Page</Nav.Link>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/signUpPage">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/signInPage">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="/">Sign Out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="fontSizeBtn" onClick={toggleFontSize}>Increase Font Size</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default App;