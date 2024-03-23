import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/book.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import { motion } from "framer-motion";
import Experience from "../Experience/Experience";
import Skills from "../Skils/Skills";

function Home() {
  const [isHoveredBook, setIsHoveredBook] = useState(false);

  const handleHoverBook = () => {
    setIsHoveredBook(!isHoveredBook);
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.div
                initial={{ x: "-200%", y: "-300%" }} // Initial position (off-screen to the left)
                animate={{ x: 0, y: 0 }} // Animate to the center (0%)
                transition={{ duration: 2 }} // Animation duration
              >
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
                  <b style={{ color: "gold" }}>Full Stack</b> exp.
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
              </motion.div>

              <motion.div
                initial={{ x: "-300%" }} // Initial position (off-screen to the left)
                animate={{ x: 0 }} // Animate to the center (0%)
                transition={{ duration: 3 }} // Animation duration
              >
                <motion.div
                  animate={{
                    // It will blink for 2 times
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0)",
                      "0 0 60px rgba(246, 255, 0, 1)",
                      "0 0 10px rgba(255, 255, 255, 0)",
                      "0 0 10px rgba(255, 255, 255, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <h1 className="endorse-title">
                    TOP <strong className="main-name">REMARKS 🔥</strong>
                  </h1>
                </motion.div>

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
                    I was <b style={{ color: "gold" }}>endorsed</b> by Top RN
                    Company - ( Callstack ) 🔗
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
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  initial={{ scale: 0.1, opacity: 0 }} // Initial state: very small and invisible
                  animate={{
                    scale: isHoveredBook ? 1.03 : 1, // Zoom in
                    opacity: 1, // Fade in
                    rotate: isHoveredBook ? 360 : 362, // Rotate 360 degrees (circulating)
                  }}
                  transition={{ duration: isHoveredBook ? 0.5 : 2.5 }} // Animation duration (in seconds)
                  onHoverStart={handleHoverBook}
                  onHoverEnd={handleHoverBook}
                  style={{ display: "inline-block" }}
                >
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
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Skills Component */}
      <Skills />
      {/* Experience Component */}
      <Experience />
      <Home2 />
    </section>
  );
}

export default Home;
