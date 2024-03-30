import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import awardGiff from "../../Assets/award.gif";
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
    <motion.section
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <motion.div
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.25,
            },
          },
        }}
      >
        <h1
          style={{
            color: "white",
            marginTop: "100px",
          }}
        >
          PROVEN <strong className="main-name">LEADERSHIP</strong> SUCCESS
        </h1>
      </motion.div>

      <Container className="leadershipContainer">
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col md={7}>
            <motion.div
              initial={{ x: "-200%", y: "-300%" }} // Initial position (off-screen to the left)
              animate={{ x: 0, y: 0 }} // Animate to the center (0%)
              transition={{ duration: 2 }} // Animation duration
            >
              <h5
                style={{
                  paddingLeft: 50,
                  paddingRight: 50,
                  textAlign: "left",
                  lineHeight: "30px",
                }}
              >
                🟢 Promoted from Jr. Engineer to{" "}
                <b style={{ color: "gold" }}>Team Lead</b>, I managed a team of
                4 engineers, resulting in <b style={{ color: "gold" }}>$35M</b>{" "}
                in E-commerce orders.
              </h5>

              <h5
                style={{
                  paddingTop: 30,
                  paddingLeft: 50,
                  paddingRight: 50,
                  textAlign: "left",
                  lineHeight: "30px",
                }}
              >
                🟢 <b style={{ color: "gold" }}>Led</b> BD Govt Project{" "}
                <b style={{ color: "gold" }}>Backend Team</b>, scaled to{" "}
                <b style={{ color: "gold" }}>1M users</b>, and won Best Software
                Engineer Award in 2022.
              </h5>

              <h5
                style={{
                  paddingTop: 30,
                  paddingLeft: 50,
                  paddingRight: 50,
                  paddingBottom: 20,
                  textAlign: "left",
                  lineHeight: "30px",
                }}
              >
                🟢 <b style={{ color: "gold" }}>Led team</b> to deploy 64K NFTs
                on Polygon Blockchain, attracting{" "}
                <b style={{ color: "gold" }}>20K users</b>. CEO sponsored
                Indonesia Tour.
              </h5>
            </motion.div>
          </Col>

          <Col md={5} style={{}}>
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
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/posts/soft-bd-ltd_bestperformers-employeeofthequarter-activity-6909435535258263552-Ax2m?utm_source=share&utm_medium=member_desktop"
                  className="custom-link cursor-pointer"
                >
                  <img
                    src={awardGiff}
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
    </motion.section>
  );
}

export default LeadershipSkills;
