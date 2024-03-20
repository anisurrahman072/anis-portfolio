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
                  paddingTop: 30,
                  paddingLeft: 50,
                  paddingRight: 50,
                  paddingBottom: 20,
                  textAlign: "left",
                }}
              >
                🟢 Sr. Software Engineer with{" "}
                <b style={{ color: "gold" }}>5+ years</b> of JS{" "}
                <b style={{ color: "gold" }}>Full Stack</b> experience.
              </h5>

              <h5
                style={{
                  paddingLeft: 50,
                  textAlign: "left",
                }}
              >
                🟢 React, React Native & Node.js (
                <b style={{ color: "gold" }}>MERN</b>) expert.
              </h5>

              <h1 className="endorse-title" style={{ marginTop: "80px" }}>
                COMMUNITY <strong className="main-name">ENDORSED ME 🔥</strong>
              </h1>

              <h5
                style={{
                  paddingTop: 30,
                  paddingLeft: 50,
                  paddingRight: 50,
                  paddingBottom: 20,
                  textAlign: "left",
                  position: "relative",
                }}
              >
                🎖️{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://x.com/mdj_dev/status/1750908771713315326?s=20"
                  className="custom-link cursor-pointer"
                >
                  My BOOK was <b style={{ color: "gold" }}>endorsed</b> by Top
                  RN Company - ( Callstack ) 🔗
                </a>
              </h5>

              <h5
                style={{
                  paddingLeft: 50,
                  textAlign: "left",
                  position: "relative",
                }}
              >
                🎖️{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://reactnativeradio.com/episodes/rnr-285-expo-dominates-the-app-store-and-other-news?t=23m1s"
                  className="custom-link cursor-pointer"
                >
                  I was featured on the Top{" "}
                  <b style={{ color: "gold" }}>RN Podcast</b> - ( by Infinite
                  Red ) 🔗
                </a>
              </h5>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{ position: "relative" }}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/anisurrahman072/React-Native-Advanced-Guide"
                  className="custom-link cursor-pointer"
                >
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid book-pic"
                    style={{
                      maxHeight: "600px",
                      borderRadius: "15px",
                      position: "relative",
                    }}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
