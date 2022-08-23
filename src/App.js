
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Browse from './components/pages/Browse';
import SingleItem from './components/pages/SingleItem';
import Test from './components/pages/Test';

import './components/styles/home.css';
import './components/styles/browse.css'
import './components/styles/Card.css';

import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const App = () => {

  return (
    <BrowserRouter>

      <Navbar bg="light" expand="lg" style={{
        width:"100vw",
      }}>
        <Container>

        <LinkContainer to="/">
          <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <LinkContainer to="/">
                <Nav.Link to="#home">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Browse">
                <Nav.Link >Browse</Nav.Link>
              </LinkContainer>
              
 
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">

                <LinkContainer to="test">
                  <NavDropdown.Item >Action</NavDropdown.Item>
                </LinkContainer>
                
                <LinkContainer to="test">
                  <NavDropdown.Item >Action</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="test">
                  <NavDropdown.Item >Action</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />

                <LinkContainer to="test">
                  <NavDropdown.Item >Action</NavDropdown.Item>
                </LinkContainer>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>    

      
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="browse/:single" element={<SingleItem />} />

        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
