import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useSelector, 
  // useDispatch 
} from "react-redux";
import { Button } from "react-bootstrap";
// import { setSort } from "../features/countries/countriesSlice";

const NavBar = () => {
  const favoriteCount = useSelector(
    (state) => state.countries.favoriteCountries.length
  );
  // const dispatch = useDispatch();
  const location = useLocation();

  const handleSort = (e) => {
    console.log('sorting by', e.target.value);
    // dispatch(setSort(e.target.value));
  };

  const showFilters = location.pathname.endsWith("/browse");

  return (
    <Navbar bg="light" expand="lg" sticky="top" style={{ width: "100vw" }}>
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
              Favorites{" "}
              {favoriteCount > 0 && (
                <span
                  style={{
                    backgroundColor: "#ff4d6d",
                    borderRadius: "100px",
                    width: "30px",
                    height: "30px",
                    fontSize: "10px",
                    color: "white",
                    padding: "2px",
                  }}
                >
                  {favoriteCount}
                </span>
              )}
            </Nav.Link>
          </Nav>

          {/* ✅ Only show on /browse */}
          {showFilters && (
            <>
              <Form.Select
                aria-label="Sort countries"
                className="me-2"
                onChange={handleSort}
                style={{ maxWidth: "200px" }}
              >
                <option value="name">Sort by Name</option>
                <option value="population">Sort by Population</option>
                <option value="currency">Sort by Currency</option>
              </Form.Select>
              <Form className="d-flex me-3">
                <Form.Control
                  type="search"
                  placeholder="Search countries"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
