import { Col, Row, Container } from "react-bootstrap";
import ClassData from "./ClassData";
import ClassSW from "./ClassSW";
import Class from "./Class";
import ClassLoTR from "./ClassLoTR";
function CustomMain() {
  return (
    <Container className="flex-grow-1">
      <Row className="d-flex justify-content-between">
        <Col xs={6} md={6} lg={6}>
          <h1 className="text-white mb-4">Tv Shows & Movies </h1>
        </Col>
        <Col className="d-flex justify-content-end" xs={6} md={6} lg={6}>
          <button>
            <i className="bi bi-aspect-ratio"></i>
          </button>
          <button>
            <i className="bi bi-three-dots"></i>
          </button>
        </Col>
      </Row>
      {/* <Container>
        <Row>
          <Col sx={12}>
            <h3 className="text-white">Star Wars</h3>
            <ClassSW />
          </Col>
        </Row>
        <Row>
          <Col sx={12} className="mt-4">
            <h3 className="text-white">Lord of the rings </h3>
            <ClassLoTR />
          </Col>
        </Row>
        <Row>
          <Col sx={12} className="mt-4">
            <h3 className="text-white">Curse words </h3>
            <Class />
          </Col>
        </Row>
      </Container> */}
    </Container>
  );
}

export default CustomMain;
