import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/book.gif";
import Particle from "../Particle";
import { motion } from "framer-motion";

function LeadershipSkills() {
  // STATE for mobile device
  const [isMobile, setIsMobile] = useState(false);

  // STATE for checking Hover
  const [isHoveredBook, setIsHoveredBook] = useState(false);

  const handleHoverBook = () => {
    setIsHoveredBook(!isHoveredBook);
  };

  // Check if the device is a mobile or not (Assuming less than 767 is a MOBILE)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
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
  );
}

export default LeadershipSkills;
