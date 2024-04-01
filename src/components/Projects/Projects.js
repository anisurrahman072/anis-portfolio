import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projectBsport from "../../Assets/projectBsport.gif";
import projectEcommerce from "../../Assets/projectEcommerce.gif";
import projectNft from "../../Assets/projectNft.gif";
import mongodbLogo from "../../Assets/mongodb.svg";
import { motion } from "framer-motion";

function Projects() {
  // STATE for mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Hover STATES
  const [isHoveredBsport, setIsHoveredBsport] = useState(false);
  const [isHoveredEcommerce, setIsHoveredEcommerce] = useState(false);
  const [isHoveredNft, setIsHoveredNft] = useState(false);
  const [isHoveredMongo, setIsHoveredMongo] = useState(false);

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

  const handleHoverMMongo = () => {
    setIsHoveredMongo(!isHoveredMongo);
  };

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
                marginTop: "100px",
              }}
            >
              MY <strong className="main-name">PROJECTS</strong>
            </h1>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Container className="projectsContents">
          <Row>
            {/* PROJECT BASEMENT SPORTS */}
            {/* PROJECT BASEMENT SPORTS */}
            {/* PROJECT BASEMENT SPORTS */}
            <Col
              sm={6}
              md={4}
              style={{
                padding: "10px",
              }}
            >
              <motion.div
                className="project-bsport-box cursor-pointer"
                style={{
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
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
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "6px",
                  }}
                >
                  Sports Scoring App
                </p>

                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    initial={{ scale: 1 }} // Initial state: very small and invisible
                    animate={{
                      scale: isHoveredBsport ? 1.06 : 1, // Zoom in
                    }}
                    transition={{ duration: 0.45 }} // Animation duration (in seconds)
                    style={{
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                    className="project-bsport-image"
                  >
                    <img
                      src={projectBsport}
                      alt="home pic"
                      className="img-fluid"
                      style={{
                        maxHeight: "600px",
                        borderRadius: "15px",
                        position: "relative",
                      }}
                    />
                  </motion.div>
                </div>

                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "15px",
                  }}
                  className="project-bsport-special-job"
                >
                  I led full-stack <b>mobile</b> (Android & iOS) & <b>web</b>{" "}
                  development, enabling <b>5-10 investors</b> by Sports
                  Streaming feature.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "15px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "rgb(68, 118, 192)",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-bsport-years"
                  >
                    React Native
                  </div>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "rgb(68, 118, 192)",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-bsport-years"
                  >
                    React
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "rgb(68, 118, 192)",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-bsport-years"
                  >
                    Node.js
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "rgb(68, 118, 192)",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-bsport-years"
                  >
                    Next.js
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "rgb(68, 118, 192)",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-bsport-years"
                  >
                    GraphQL
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "rgb(68, 118, 192)",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-bsport-years"
                  >
                    MongoDB
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "rgb(68, 118, 192)",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-bsport-years"
                  >
                    Streaming (Agora)
                  </p>
                </div>
              </motion.div>
            </Col>

            {/* PROJECT BASEMENT SPORTS */}
            {/* PROJECT BASEMENT SPORTS */}
            {/* PROJECT BASEMENT SPORTS */}
            <Col
              sm={6}
              md={4}
              style={{
                padding: "10px",
              }}
            >
              <motion.div
                className="project-ecommerce-box cursor-pointer"
                style={{
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
                onHoverStart={handleHoverEcommerce}
                onHoverEnd={handleHoverEcommerce}
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
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "6px",
                  }}
                >
                  E-commerce
                </p>

                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    initial={{ scale: 1 }} // Initial state: very small and invisible
                    animate={{
                      scale: isHoveredEcommerce ? 1.06 : 1, // Zoom in
                    }}
                    transition={{ duration: 0.45 }} // Animation duration (in seconds)
                    style={{
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                    className="project-ecommerce-image"
                  >
                    <img
                      src={projectEcommerce}
                      alt="home pic"
                      className="img-fluid"
                      style={{
                        maxHeight: "600px",
                        borderRadius: "15px",
                        position: "relative",
                      }}
                    />
                  </motion.div>
                </div>

                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "15px",
                  }}
                  className="project-ecommerce-special-job"
                >
                  Orchestrated <b>requirement analysis</b> and led{" "}
                  <b>full-stack development</b>, boosting orders to <b>$35M</b>.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "15px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#3b91aa",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-ecommerce-years"
                  >
                    React
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#3b91aa",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-ecommerce-years"
                  >
                    Node.js
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#3b91aa",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-ecommerce-years"
                  >
                    Sails.js
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#3b91aa",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-ecommerce-years"
                  >
                    MySQL
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#3b91aa",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-ecommerce-years"
                  >
                    REST
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#3b91aa",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-ecommerce-years"
                  >
                    Redis
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#3b91aa",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-ecommerce-years"
                  >
                    Payment Gateway
                  </p>
                </div>
              </motion.div>
            </Col>

            {/* PROJECT NFT SPORTS */}
            {/* PROJECT NFT SPORTS */}
            {/* PROJECT NFT SPORTS */}
            <Col
              sm={6}
              md={4}
              style={{
                padding: "10px",
              }}
            >
              <motion.div
                className="project-nft-box cursor-pointer"
                style={{
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
                onHoverStart={handleHoverNft}
                onHoverEnd={handleHoverNft}
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
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "6px",
                  }}
                >
                  Blockchain (64K NFT)
                </p>

                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    initial={{ scale: 1 }} // Initial state: very small and invisible
                    animate={{
                      scale: isHoveredNft ? 1.06 : 1, // Zoom in
                    }}
                    transition={{ duration: 0.45 }} // Animation duration (in seconds)
                    style={{
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                    className="project-nft-image"
                  >
                    <img
                      src={projectNft}
                      alt="home pic"
                      className="img-fluid"
                      style={{
                        maxHeight: "600px",
                        borderRadius: "15px",
                        position: "relative",
                      }}
                    />
                  </motion.div>
                </div>

                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "15px",
                  }}
                  className="project-nft-special-job"
                >
                  Guided team through unknown topic - <b>Deploy 64K NFTs</b> on{" "}
                  <b>Polygon</b> Chain & increased <b>more 20K users</b> in App.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "15px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#aa9f3b",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-nft-years"
                  >
                    React
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#aa9f3b",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-nft-years"
                  >
                    Node.js
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#aa9f3b",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-nft-years"
                  >
                    Sails.js
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#aa9f3b",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-nft-years"
                  >
                    MySQL
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#aa9f3b",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-nft-years"
                  >
                    REST
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#aa9f3b",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-nft-years"
                  >
                    Redis
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "black",
                      backgroundColor: "#aa9f3b",
                      display: "inline-block",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "15px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                    className="project-nft-years"
                  >
                    Payment Gateway
                  </p>
                </div>
              </motion.div>
            </Col>

            {/* MONGODB SKILL */}
            {/* MONGODB SKILL */}
            {/* MONGODB SKILL */}
            <Col
              sm={6}
              md={4}
              style={{
                padding: "10px",
              }}
            >
              <motion.div
                className="mongo-skill-box cursor-pointer"
                style={{
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
                onHoverStart={handleHoverMMongo}
                onHoverEnd={handleHoverMMongo}
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
                      delay: 1.5,
                    },
                    visibility: 2,
                  },
                }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    top: -10,
                    right: -9,
                    opacity: 0.2,
                  }}
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{
                    rotate: isHoveredMongo ? -20 : 0,
                    scale: isHoveredMongo ? 0.5 : 1,
                    x: isHoveredMongo ? -60 : 0,
                    y: isHoveredMongo ? 20 : 0,
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <img src={mongodbLogo} height={110} />
                </motion.div>

                <motion.div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 12,
                  }}
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{
                    rotate: isHoveredMongo ? 20 : 0,
                    scale: isHoveredMongo ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <img src={mongodbLogo} height={70} />
                </motion.div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    marginBottom: "12px",
                    color: "black",
                    backgroundColor: "#8a5ed3",
                    display: "inline-block",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    borderRadius: "15px",
                  }}
                  className="mongo-years"
                >
                  3 yrs
                </p>

                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginBottom: "6px",
                  }}
                >
                  MongoDB
                </p>

                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "13px",
                  }}
                  className="mongo-special-job"
                >
                  Led teams in <b>architecting schema</b> structures to handle
                  complex features (Ex: 64K NFTs schema, more)
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </Container>
  );
}

export default Projects;