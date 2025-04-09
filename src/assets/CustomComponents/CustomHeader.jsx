import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Col, Row } from "react-bootstrap";
import "../CustomComponents/CustomStyle.css";
import { Link, useNavigate } from "react-router-dom";

function CustomHeader() {
  // const useNavigate = useNavigate()  //ritorna se stesso :O

  return (
    <Navbar expand="lg" className="bg-black mb-5 justify-content-center">
      <Container className=" m-0">
        <Navbar.Brand>
          <Link to="/">
            <img
              style={{ width: "100px" }}
              src="./public\netflix_logo.png"
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Link
              className="p-2 Nav-Link text-white fw-normal text-decoration-none"
              to="/"
            >
              Home
            </Link>
            <Link
              className="p-2 Nav-Link text-white fw-normal text-decoration-none"
              to="/Star-wars"
            >
              Star Wars
            </Link>
            <Link
              className="p-2 Nav-Link text-white fw-normal text-decoration-none"
              to="/Lord-of-the-rings"
            >
              LoTR
            </Link>
            <Link
              className="p-2 Nav-Link text-white fw-normal text-decoration-none"
              to="/Shit"
            >
              Curse Words
            </Link>

            <Nav.Link className="text-white" href="/">
              TvShows
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span id="hide">
          <Col className="d-flex flex-row gap-3 text-white">
            <i className="bi bi-search"></i>
            <p className="fw-bold text-end">kids</p>
            <i className="bi bi-bell-fill"></i>
            <img
              src="./public\kids_icon.png"
              style={{ width: "25px", height: "25px" }}
              alt="profile"
            />
            <NavDropdown
              className="text-white bg-black"
              title=""
              id="basic-nav-dropdown"
            >
              <Nav.Link className="p-1 " href="#home">
                Log out
              </Nav.Link>
              <Nav.Link className="p-1" href="#link">
                Settings
              </Nav.Link>
              <Nav.Link className="p-1" href="#link">
                Lorem
              </Nav.Link>
              <Nav.Link className="p-1" href="#link">
                Ipsum
              </Nav.Link>
            </NavDropdown>
          </Col>
        </span>
      </Container>
    </Navbar>
  );
}

export default CustomHeader;
