import { Col, Row, Container, Navbar } from "react-bootstrap";

function CustomFooter() {
  return (
    <Container
      sticky="bottom"
      className="bg-black py-5"
      style={{ color: "grey" }}
    >
      <Row>
        <Col xs={12} md={6} lg={3}>
          <Col className="d-flex flex-row justify-content-evenly text-start">
            <i className="bi bi-twitter"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
          </Col>
          <img
            style={{ width: "100px" }}
            src="public\netflix_logo.png"
            alt=""
          />

          <p className=" text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            veritatis corporis ipsam, doloremque alias mollitia, nobis amet
            porro unde hic dolorem doloribus maiores provident, modi tempore.
            Optio maxime veritatis minus.
          </p>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className=" d-flex flex-column align-items-start"
        >
          <h4>Titolo</h4>
          <p className=" text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            veritatis corporis ipsam, doloremque alias mollitia, nobis amet
            porro unde hic dolorem doloribus maiores provident, modi tempore.
            Optio maxime veritatis minus.
          </p>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className=" d-flex flex-column align-items-start"
        >
          <h4>Titolo</h4>
          <p className=" text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            veritatis corporis ipsam, doloremque alias mollitia, nobis amet
            porro unde hic dolorem doloribus maiores provident, modi tempore.
            Optio maxime veritatis minus.
          </p>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className=" d-flex flex-column align-items-start "
        >
          <h4>Titolo</h4>
          <p className=" text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            veritatis corporis ipsam, doloremque alias mollitia, nobis amet
            porro unde hic dolorem doloribus maiores provident, modi tempore.
            Optio maxime veritatis minus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomFooter;
