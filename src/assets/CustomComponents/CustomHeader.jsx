import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Col, Row } from "react-bootstrap";
import "../CustomComponents/CustomStyle.css";

function CustomHeader() {
  return (
    <Navbar expand="lg" className="bg-black mb-5 justify-content-center">
      <Container className=" m-0">
        <Navbar.Brand>
          <img
            style={{ width: "100px" }}
            src="./public\netflix_logo.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link className="text-white " href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white " href="/Star-wars">
              Star Wars
            </Nav.Link>
            <Nav.Link className="text-white " href="/Lord-of-the-rings">
              LoTR
            </Nav.Link>
            <Nav.Link className="text-white " href="/Shit">
              Curse Words
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
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
