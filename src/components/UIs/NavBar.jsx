import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

const NavBar = () => {
  const favoriteCount = useSelector(state => state.countries.favoriteCountries.length);
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        width: "100vw",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Countries App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/browse">
              Browse
            </Nav.Link>

            <Nav.Link as={Link} to="/favorites">
              Favorites  
              {favoriteCount > 0 && 
                 <span style={{backgroundColor:"#ff4d6d", borderRadius: '100px', width:'30px', height:'30px', fontSize:'10px', color:'white', padding:'2px' }}> {favoriteCount} </span>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

