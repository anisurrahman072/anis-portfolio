import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/book.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANISUR RAHMAN </strong>
              </h1>

              <h5
                style={{
                  paddingTop: 50,
                  paddingLeft: 50,
                  paddingRight: 50,
                  paddingBottom: 20,
                  textAlign: "left",
                }}
              >
                Sr. Software Engineer with{" "}
                <b style={{ color: "gold" }}>5+ years</b> of JS{" "}
                <b style={{ color: "gold" }}>Full Stack</b> experience.
              </h5>

              <h5 style={{ paddingLeft: 50, textAlign: "left" }}>
                🟡 Web & Mobile (Android & iOS)
              </h5>
              <h5 style={{ paddingLeft: 50, textAlign: "left" }}>
                🟡 React, React Native, Node.js
              </h5>

              <h1 className="heading-name" style={{ marginTop: "50px" }}>
                COMMUNITY <strong className="main-name">ENDORSED ME </strong>
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid book-pic"
                style={{
                  maxHeight: "600px",
                  borderRadius: "10px",
                  position: "relative",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
