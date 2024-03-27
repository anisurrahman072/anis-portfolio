import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import graphqlLogo from "../../Assets/graphql.svg";
import reactLogo from "../../Assets/react.svg";
import nodeJsLogo from "../../Assets/nodejs.svg";
import mongodbLogo from "../../Assets/mongodb.svg";
import { motion } from "framer-motion";

function AdditionalSkills() {
  // Hover STATES
  const [isHoveredReactNative, setIsHoveredReactNative] = useState(false);
  const [isHoveredReact, setIsHoveredReact] = useState(false);
  const [isHoveredNode, setIsHoveredNode] = useState(false);
  const [isHoveredMongo, setIsHoveredMongo] = useState(false);

  const handleHoverReactNative = () => {
    setIsHoveredReactNative(!isHoveredReactNative);
  };

  const handleHoverReact = () => {
    setIsHoveredReact(!isHoveredReact);
  };

  const handleHoverNode = () => {
    setIsHoveredNode(!isHoveredNode);
  };

  const handleHoverMMongo = () => {
    setIsHoveredMongo(!isHoveredMongo);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      style={{ position: "relative" }}
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
            marginBottom: "50px",
          }}
        >
          MORE - <strong className="main-name">R&D</strong> SKILLS
        </h1>
      </motion.div>

      <Container className="skills-container">
        <Row className="justify-content-center">
          {/* GRAPHQL SKILL */}
          {/* GRAPHQL SKILL */}
          {/* GRAPHQL SKILL */}
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <motion.div
              className="graphql-skill-box cursor-pointer"
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                height: "100%",
              }}
              onHoverStart={handleHoverReactNative}
              onHoverEnd={handleHoverReactNative}
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
              <motion.div
                style={{
                  position: "absolute",
                  top: -10,
                  right: -13,
                  opacity: 0.2,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredReactNative ? -20 : 0,
                  scale: isHoveredReactNative ? 1.3 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <img src={graphqlLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 7,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredReactNative ? 359 : 0,
                  scale: isHoveredReactNative ? 1.2 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={graphqlLogo} height={60} />
              </motion.div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginBottom: "12px",
                  color: "black",
                  backgroundColor: "rgb(192 142 68)",
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  borderRadius: "15px",
                }}
                className="graphql-years"
              >
                3 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "6px",
                  position: "relative",
                }}
              >
                GraphQL
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="graphql-special-job"
              >
                Built complex in-app features using Apollo Client-Server.{" "}
                <b>Wrote 400+</b> Queries & Mutations.
              </p>
            </motion.div>
          </Col>

          {/* NEXTJS SKILL */}
          {/* NEXTJS SKILL */}
          {/* NEXTJS SKILL */}
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <motion.div
              className="nextjs-skill-box cursor-pointer"
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
                    delay: 0.5,
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
                  backgroundColor: "rgb(137 137 137)",
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  borderRadius: "15px",
                }}
                className="nextjs-years"
              >
                1 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "6px",
                }}
              >
                Next.js
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="nextjs-special-job"
              >
                Implemented <b>OG Protocol</b> for crawlers to play{" "}
                <b>Videos</b> in Twitter, Discord, Facebook using Next.js{" "}
                <b>SSR</b>.
              </p>
            </motion.div>
          </Col>

          {/* Blockchain SKILL */}
          {/* Blockchain SKILL */}
          {/* Blockchain SKILL */}
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <motion.div
              className="blockchain-skill-box cursor-pointer"
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                height: "100%",
              }}
              onHoverStart={handleHoverReact}
              onHoverEnd={handleHoverReact}
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
                  visibility: 2,
                },
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -10,
                  opacity: 0.2,
                }}
                initial={{ rotate: 0, scale: 1, x: 0, y: 0 }}
                animate={{
                  rotate: isHoveredReact ? -40 : 0,
                  scale: isHoveredReact ? 0.4 : 1,
                  x: isHoveredReact ? -60 : 0,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={reactLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 7,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredReact ? -40 : 0,
                  scale: isHoveredReact ? 1.3 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={reactLogo} height={60} />
              </motion.div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginBottom: "12px",
                  color: "black",
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  borderRadius: "15px",
                }}
                className="blockchain-years"
              >
                1 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "6px",
                }}
              >
                Blockchain
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="blockchain-special-job"
              >
                Done deep R&D and led team to deploy <b>64K NFT</b> & ERC20
                Token in <b>Polygon</b>, SPL Token in <b>Solana</b>.
              </p>
            </motion.div>
          </Col>

          {/* MYSQL SKILL */}
          {/* MYSQL SKILL */}
          {/* MYSQL SKILL */}
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <motion.div
              className="mysql-skill-box cursor-pointer"
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                height: "100%",
              }}
              onHoverStart={handleHoverNode}
              onHoverEnd={handleHoverNode}
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
                  right: -5,
                  opacity: 0.2,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredNode ? -20 : 0,
                  scale: isHoveredNode ? 0 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={nodeJsLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 12,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredNode ? 20 : 0,
                  scale: isHoveredNode ? 1.3 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={nodeJsLogo} height={60} />
              </motion.div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginBottom: "12px",
                  color: "black",
                  backgroundColor: "rgb(68, 118, 192)",
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  borderRadius: "15px",
                }}
                className="mysql-years"
              >
                2 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "6px",
                }}
              >
                MySQL
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="mysql-special-job"
              >
                Implemented & maintained a database of <b>1M live users</b> (BD
                Govt project).
              </p>
            </motion.div>
          </Col>

          {/* RabbitMQ SKILL */}
          {/* RabbitMQ SKILL */}
          {/* RabbitMQ SKILL */}
          <Col
            sm={6}
            md={3}
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
                    delay: 2,
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
                1 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "6px",
                }}
              >
                RabbitMQ
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="mongo-special-job"
              >
                <b>Led team</b> to implement RabbitMQ in 7 Microservices with{" "}
                <b>SAGA</b> (communication) pattern.
              </p>
            </motion.div>
          </Col>

          {/* MicroService SKILL */}
          {/* MicroService SKILL */}
          {/* MicroService SKILL */}
          <Col
            sm={6}
            md={3}
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
                    delay: 2.5,
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
                2 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "6px",
                }}
              >
                MicroService
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="mongo-special-job"
              >
                Built <b>7 Microservices</b> to handle rapid actions of{" "}
                <b>1M live users</b> (BD Govt project).
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default AdditionalSkills;
