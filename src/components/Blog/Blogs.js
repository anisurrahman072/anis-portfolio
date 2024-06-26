import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projectBsport from "../../Assets/projectBsport.gif";
import projectEcommerce from "../../Assets/projectEcommerce.gif";
import projectNft from "../../Assets/projectNft.gif";
import projectYouth from "../../Assets/projectYouth.gif";
import projectTruck from "../../Assets/projectTruck.gif";
import sdkresearch from "../../Assets/sdkresearch.png";
import sdkresearchMobile from "../../Assets/sdkresearchMobile.png";
import reactLogo from "../../Assets/react.svg";

import { motion } from "framer-motion";

function Blogs() {
  // STATE for mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Hover STATES
  const [isHoveredTesting, setIsHoveredTesting] = useState(false);
  const [isHoveredDebug, setIsHoveredDebug] = useState(false);
  const [isHoveredNewArch, setIsHoveredNewArch] = useState(false);
  const [isHoveredPerformance, setIsHoveredPerformance] = useState(false);
  const [isHoveredNestedVirtual, setIsHoveredNestedVirtual] = useState(false);
  const [isHoveredIap, setIsHoveredIap] = useState(false);
  const [isHoveredResearch, setIsHoveredResearch] = useState(false);

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

  const handleHoverTesting = () => {
    setIsHoveredTesting(!isHoveredTesting);
  };

  const handleHoverDebug = () => {
    setIsHoveredDebug(!isHoveredDebug);
  };

  const handleHoverNewArch = () => {
    setIsHoveredNewArch(!isHoveredNewArch);
  };

  const handleHoverPerformance = () => {
    setIsHoveredPerformance(!isHoveredPerformance);
  };

  const handleHoverNestedVirtual = () => {
    setIsHoveredNestedVirtual(!isHoveredNestedVirtual);
  };

  const handleHoverIap = () => {
    setIsHoveredIap(!isHoveredIap);
  };

  const handleHoverResearch = () => {
    setIsHoveredResearch(!isHoveredResearch);
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
                paddingTop: "200px",
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
                    onHoverStart={handleHoverTesting}
                    onHoverEnd={handleHoverTesting}
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
                          scale: isHoveredTesting ? 1.04 : 1, // Zoom in
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
                    onHoverStart={handleHoverDebug}
                    onHoverEnd={handleHoverDebug}
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
                          delay: 0.5,
                        },
                      },
                    }}
                  >
                    <div>
                      <motion.div
                        initial={{ scale: 1 }} // Initial state: very small and invisible
                        animate={{
                          scale: isHoveredDebug ? 1.04 : 1, // Zoom in
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
                    onHoverStart={handleHoverNewArch}
                    onHoverEnd={handleHoverNewArch}
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
                          delay: 1,
                        },
                      },
                    }}
                  >
                    <div>
                      <motion.div
                        initial={{ scale: 1 }} // Initial state: very small and invisible
                        animate={{
                          scale: isHoveredNewArch ? 1.04 : 1, // Zoom in
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

              {/* BLOG RN PERFORMANCE */}
              {/* BLOG RN PERFORMANCE */}
              {/* BLOG RN PERFORMANCE */}
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
                  href="https://medium.com/@anisurrahmanbup/react-native-app-performance-optimization-ios-android-be-a-sr-react-native-engineer-today-767cfcb0ed70"
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
                    onHoverStart={handleHoverPerformance}
                    onHoverEnd={handleHoverPerformance}
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
                          delay: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div
                      initial={{ scale: 1 }} // Initial state: very small and invisible
                      animate={{
                        scale: isHoveredPerformance ? 1.04 : 1, // Zoom in
                      }}
                      transition={{ duration: 0.45 }} // Animation duration (in seconds)
                      className="blog-image"
                      style={{
                        height: "100%",
                      }}
                    >
                      <img
                        src={
                          "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*dE39UV1l0AE2k-fTD5l7Xg.png"
                        }
                        alt="home pic"
                        className="img-fluid"
                        // style={{ height: "100%" }} // It made an issue IOS phone
                      />
                    </motion.div>
                  </motion.div>
                </a>
              </Col>

              {/* BLOG RN NESTED VIRTUALIZATION */}
              {/* BLOG RN NESTED VIRTUALIZATION */}
              {/* BLOG RN NESTED VIRTUALIZATION */}
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
                  href="https://medium.com/@anisurrahmanbup/react-native-nested-virtualization-anti-pattern-performance-optimization-958e98d4ea79"
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
                    onHoverStart={handleHoverNestedVirtual}
                    onHoverEnd={handleHoverNestedVirtual}
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
                          delay: 0.6,
                        },
                      },
                    }}
                  >
                    <div>
                      <motion.div
                        initial={{ scale: 1 }} // Initial state: very small and invisible
                        animate={{
                          scale: isHoveredNestedVirtual ? 1.04 : 1, // Zoom in
                        }}
                        transition={{ duration: 0.45 }} // Animation duration (in seconds)
                        className="blog-image"
                      >
                        <img
                          src={
                            "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ut1Fr0oJhGpHGaC2wTXd_Q.png"
                          }
                          alt="home pic"
                          className="img-fluid"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </a>
              </Col>

              {/* BLOG RN IAP */}
              {/* BLOG RN IAP */}
              {/* BLOG RN IAP */}
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
                  href="https://medium.com/@anisurrahmanbup/react-native-in-app-purchase-for-android-and-ios-implementation-details-3735fb398a5d"
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
                    onHoverStart={handleHoverIap}
                    onHoverEnd={handleHoverIap}
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
                          delay: 1.1,
                        },
                      },
                    }}
                  >
                    <div>
                      <motion.div
                        initial={{ scale: 1 }} // Initial state: very small and invisible
                        animate={{
                          scale: isHoveredIap ? 1.04 : 1, // Zoom in
                        }}
                        transition={{ duration: 0.45 }} // Animation duration (in seconds)
                        className="blog-image"
                      >
                        <img
                          src={
                            "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*GyY-nNROCWckM1r1QJ8lKw.png"
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

            {/* React Native #NotJustDev Research */}
            {/* React Native #NotJustDev Research */}
            {/* React Native #NotJustDev Research */}
            <motion.div
              animate={{
                scale: isMobile ? [1] : [1, 1.02],
                x: isMobile ? [1] : [0, 1.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Row className="justify-content-center">
                {isMobile ? (
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
                      href="https://github.com/anisurrahman072/React-Native-SDK-Research"
                    >
                      <motion.div
                        className="research-box"
                        style={{
                          borderRadius: "15px",
                          textAlign: "left",
                          position: "relative",
                          overflow: "hidden",
                          height: "100%",
                          overflow: "hidden",
                        }}
                        onHoverStart={handleHoverResearch}
                        onHoverEnd={handleHoverResearch}
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
                              delay: 1.6,
                            },
                          },
                        }}
                      >
                        <div>
                          <motion.div
                            initial={{ scale: 1 }} // Initial state: very small and invisible
                            animate={{
                              scale: isHoveredResearch ? 1.04 : 1, // Zoom in
                            }}
                            transition={{ duration: 0.45 }} // Animation duration (in seconds)
                            className="research-image"
                          >
                            <img
                              src={sdkresearchMobile}
                              alt="home pic"
                              className="img-fluid"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          style={{
                            position: "absolute",
                            top: -15,
                            right: -13,
                            opacity: 0.2,
                          }}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: isHoveredResearch ? -20 : 0,
                            scale: isHoveredResearch ? 1.1 : 0.8,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <img src={reactLogo} height={100} />
                        </motion.div>

                        <motion.div
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 3,
                          }}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: isHoveredResearch ? 150 : 0,
                            scale: isHoveredResearch ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.45 }}
                        >
                          <img src={reactLogo} height={60} />
                        </motion.div>
                      </motion.div>
                    </a>
                  </Col>
                ) : (
                  <Col
                    sm={12}
                    md={12}
                    style={{
                      padding: "18px",
                    }}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="custom-link cursor-pointer"
                      href="https://github.com/anisurrahman072/React-Native-SDK-Research"
                    >
                      <motion.div
                        className="research-box"
                        style={{
                          borderRadius: "15px",
                          textAlign: "left",
                          position: "relative",
                          overflow: "hidden",
                          height: "100%",
                          overflow: "hidden",
                        }}
                        onHoverStart={handleHoverResearch}
                        onHoverEnd={handleHoverResearch}
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
                              delay: 1.6,
                            },
                          },
                        }}
                      >
                        <div>
                          <motion.div
                            initial={{ scale: 1 }} // Initial state: very small and invisible
                            animate={{
                              scale: isHoveredResearch ? 1.04 : 1, // Zoom in
                            }}
                            transition={{ duration: 0.45 }} // Animation duration (in seconds)
                            className="research-image"
                          >
                            <img
                              src={sdkresearch}
                              alt="home pic"
                              className="img-fluid"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 5,
                            opacity: 0.2,
                          }}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: isHoveredResearch ? -20 : 0,
                            scale: isHoveredResearch ? 1.7 : 1,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <img src={reactLogo} height={100} />
                        </motion.div>

                        <motion.div
                          style={{
                            position: "absolute",
                            top: 20,
                            right: 23,
                          }}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: isHoveredResearch ? 150 : 0,
                            scale: isHoveredResearch ? 1.6 : 1,
                          }}
                          transition={{ duration: 0.45 }}
                        >
                          <img src={reactLogo} height={60} />
                        </motion.div>
                      </motion.div>
                    </a>
                  </Col>
                )}
              </Row>
            </motion.div>
          </Container>
        </motion.section>
      </Container>
    </div>
  );
}

export default Blogs;
