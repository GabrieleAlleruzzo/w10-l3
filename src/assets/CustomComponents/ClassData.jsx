import { Component } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "../CustomComponents/CustomStyle.css";

class ClassData extends Component {
  // oggetto state per memorizzare il nostro data
  state = {
    fetchFilms: [],
  };

  // dichiaro la funzione
  fetchUsers = () => {
    fetch("http://www.omdbapi.com/?apikey=9314109d&s=Star Wars")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore chiamata");
        }
      })
      .then((data) => {
        console.log("risposta dal server", data);
        this.setState({
          fetchFilms: data.Search,
        });
      })
      .catch((e) => {
        console.log("errore", e);
      });
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <>
        <ListGroup className="d-flex flex-row flex-nowrap overflow-x-auto">
          {this.state.fetchFilms.map((film) => (
            <ListGroup.Item
              style={{ border: "none", backgroundColor: "#000000" }}
              key={film.imdbID}
            >
              <Col className=" d-flex flex-wrap">
                <img
                  xs={6}
                  md={4}
                  lg={3}
                  id="cards"
                  src={film.Poster}
                  alt={`Poster di ${film.Title}`}
                />{" "}
              </Col>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default ClassData;
