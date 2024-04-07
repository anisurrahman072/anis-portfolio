import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projectBsport from "../../Assets/projectBsport.gif";
import projectEcommerce from "../../Assets/projectEcommerce.gif";
import projectNft from "../../Assets/projectNft.gif";
import projectYouth from "../../Assets/projectYouth.gif";
import projectTruck from "../../Assets/projectTruck.gif";
import { motion } from "framer-motion";

function Blogs() {
  // STATE for mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Hover STATES
  const [isHoveredBsport, setIsHoveredBsport] = useState(false);
  const [isHoveredEcommerce, setIsHoveredEcommerce] = useState(false);
  const [isHoveredNft, setIsHoveredNft] = useState(false);
  const [isHoveredYouth, setIsHoveredYouth] = useState(false);
  const [isHoveredTruck, setIsHoveredTruck] = useState(false);

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

  const handleHoverBsport = () => {
    setIsHoveredBsport(!isHoveredBsport);
  };

  const handleHoverEcommerce = () => {
    setIsHoveredEcommerce(!isHoveredEcommerce);
  };

  const handleHoverNft = () => {
    setIsHoveredNft(!isHoveredNft);
  };

  const handleHoverYouth = () => {
    setIsHoveredYouth(!isHoveredYouth);
  };

  const handleHoverTruck = () => {
    setIsHoveredTruck(!isHoveredTruck);
  };

  return (
    <div>
      <Container className="projects-background">
        <motion.section
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="projects-background"
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
                paddingTop: "150px",
              }}
            >
              MY <strong className="main-name">BLOGS</strong> - CODE INSIGHTS
            </h1>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <Container className="projectsContents">
            <Row className="justify-content-center">
              {/* BLOG RN TESTING */}
              {/* BLOG RN TESTING */}
              {/* BLOG RN TESTING */}
              <Col
                sm={6}
                md={4}
                style={{
                  padding: "18px",
                }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="custom-link cursor-pointer"
                  href="https://medium.com/@anisurrahmanbup/react-native-testing-ultimate-guide-219a5e7ea5dc"
                >
                  <motion.div
                    className="blog-box"
                    style={{
                      borderRadius: "15px",
                      textAlign: "left",
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      overflow: "hidden",
                    }}
                    onHoverStart={handleHoverBsport}
                    onHoverEnd={handleHoverBsport}
                    variants={{
                      hidden: {
                        x: -100,
                        opacity: 0,
                      },
                      show: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          duration: 1.25,
                          delay: 0,
                        },
                      },
                    }}
                  >
                    <div>
                      <motion.div
                        initial={{ scale: 1 }} // Initial state: very small and invisible
                        animate={{
                          scale: isHoveredBsport ? 1.04 : 1, // Zoom in
                        }}
                        transition={{ duration: 0.45 }} // Animation duration (in seconds)
                        className="blog-image"
                      >
                        <img
                          src={
                            "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*v-mekN6hCmlHTruW1UruLA.png"
                          }
                          alt="home pic"
                          className="img-fluid"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </a>
              </Col>

              {/* BLOG RN DEBUGGING */}
              {/* BLOG RN DEBUGGING */}
              {/* BLOG RN DEBUGGING */}
              <Col
                sm={6}
                md={4}
                style={{
                  padding: "18px",
                }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="custom-link cursor-pointer"
                  href="https://medium.com/@anisurrahmanbup/react-native-ultimate-guide-on-debugging-profiling-performance-optimization-ios-android-7e44b8690cbe"
                >
                  <motion.div
                    className="blog-box"
                    style={{
                      borderRadius: "15px",
                      textAlign: "left",
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      overflow: "hidden",
                    }}
                    onHoverStart={handleHoverBsport}
                    onHoverEnd={handleHoverBsport}
                    variants={{
                      hidden: {
                        x: -100,
                        opacity: 0,
                      },
                      show: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          duration: 1.25,
                          delay: 0,
                        },
                      },
                    }}
                  >
                    <div>
                      <motion.div
                        initial={{ scale: 1 }} // Initial state: very small and invisible
                        animate={{
                          scale: isHoveredBsport ? 1.04 : 1, // Zoom in
                        }}
                        transition={{ duration: 0.45 }} // Animation duration (in seconds)
                        className="blog-image"
                      >
                        <img
                          src={
                            "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*EUZnJP1gClIZtUEiDamVrw.png"
                          }
                          alt="home pic"
                          className="img-fluid"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </a>
              </Col>

              {/* BLOG RN NEW ARCH */}
              {/* BLOG RN NEW ARCH */}
              {/* BLOG RN NEW ARCH */}
              <Col
                sm={6}
                md={4}
                style={{
                  padding: "18px",
                }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="custom-link cursor-pointer"
                  href="https://medium.com/@anisurrahmanbup/react-native-new-architecture-in-depth-hermes-jsi-fabric-fabric-renderer-yoga-turbo-module-1284a192a82b"
                >
                  <motion.div
                    className="blog-box"
                    style={{
                      borderRadius: "15px",
                      textAlign: "left",
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      overflow: "hidden",
                    }}
                    onHoverStart={handleHoverBsport}
                    onHoverEnd={handleHoverBsport}
                    variants={{
                      hidden: {
                        x: -100,
                        opacity: 0,
                      },
                      show: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          duration: 1.25,
                          delay: 0,
                        },
                      },
                    }}
                  >
                    <div>
                      <motion.div
                        initial={{ scale: 1 }} // Initial state: very small and invisible
                        animate={{
                          scale: isHoveredBsport ? 1.04 : 1, // Zoom in
                        }}
                        transition={{ duration: 0.45 }} // Animation duration (in seconds)
                        className="blog-image"
                      >
                        <img
                          src={
                            "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*udRjfqFoyN7zSXdnI9uZvg.png"
                          }
                          alt="home pic"
                          className="img-fluid"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </a>
              </Col>
            </Row>
          </Container>
        </motion.section>
      </Container>
    </div>
  );
}

export default Blogs;
