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
    <Container className="leadershipContainer">
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
          <motion.div
            animate={{
              // It will blink for 2 times
              textShadow: [
                "0 0 10px rgba(255, 255, 255, 0)",
                "0 0 60px rgba(246, 255, 0, 0.4)",
              ],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <h1
              style={{
                color: "white",
                marginTop: "140px",
              }}
            >
              PROVEN <strong className="main-name">LEADERSHIP</strong> SUCCESS
            </h1>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Container className="leadershipContents">
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col md={7} className="leadership-texts">
              <motion.div
                variants={{
                  hidden: {
                    x: -300,
                    opacity: 0,
                  },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      duration: 3,
                    },
                  },
                }}
              >
                {/* 1st leadership success */}
                <div
                  style={{
                    textAlign: "left",
                    lineHeight: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    animate={{
                      // It will blink for 2 times
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0)",
                        "0 0 20px rgba(246, 255, 0, 1)",
                      ],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <h1>🎖️</h1>
                  </motion.div>{" "}
                  <h5 style={{ marginLeft: "10px" }}>
                    Promoted from Jr. to{" "}
                    <b style={{ color: "gold" }}>Team Lead</b> of 4 engineers,
                    resulting in <b style={{ color: "gold" }}>$35M</b> in
                    E-commerce orders.
                  </h5>
                </div>

                {/* 1st leadership success */}
                <div
                  style={{
                    paddingTop: 30,
                    textAlign: "left",
                    lineHeight: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    animate={{
                      // It will blink for 2 times
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0)",
                        "0 0 20px rgba(246, 255, 0, 1)",
                      ],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <h1>🎖️</h1>
                  </motion.div>{" "}
                  <h5 style={{ marginLeft: "10px" }}>
                    Managed BD Govt Project{" "}
                    <b style={{ color: "gold" }}>Backend Team</b>, scaled to{" "}
                    <b style={{ color: "gold" }}>1M users</b>, won Best Software
                    Engineer Award in 2022.
                  </h5>
                </div>

                {/* 1st leadership success */}
                <div
                  style={{
                    paddingTop: 30,
                    paddingBottom: 20,
                    textAlign: "left",
                    lineHeight: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    animate={{
                      // It will blink for 2 times
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0)",
                        "0 0 20px rgba(246, 255, 0, 1)",
                      ],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <h1>🎖️</h1>
                  </motion.div>{" "}
                  <h5 style={{ marginLeft: "10px" }}>
                    Directed team to deploy 64K NFTs on Polygon Chain,
                    attracting <b style={{ color: "gold" }}>50K users</b>. CEO
                    sponsored Indonesia Tour.
                  </h5>
                </div>
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
                  variants={{
                    hidden: {
                      scale: 0.1,
                      opacity: 0,
                    },
                    show: {
                      scale: isHoveredBook ? 1.03 : 1, // Zoom in
                      opacity: 1, // Fade in
                      transition: {
                        type: "spring",
                        duration: isHoveredBook ? 0.5 : 2.5,
                      },
                    },
                  }}
                  onHoverStart={handleHoverBook}
                  onHoverEnd={handleHoverBook}
                >
                  <motion.div
                    animate={{
                      scale: isMobile ? [1] : [1, 1.04],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
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
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </Container>
  );
}

export default LeadershipSkills;
