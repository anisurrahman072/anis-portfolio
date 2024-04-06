import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import graphqlLogo from "../../Assets/graphql.svg";
import nextjsLogo from "../../Assets/nextjs.svg";
import ethereumLogo from "../../Assets/ethereum.svg";
import mysqlLogo from "../../Assets/mysql.svg";
import rabbitmqLogo from "../../Assets/rabbitmq.svg";
import microserviceLogo from "../../Assets/microservice.svg";
import awsLogo from "../../Assets/aws.svg";
import mongodbLogo from "../../Assets/mongodb.svg";
import { motion } from "framer-motion";

function AdditionalSkills() {
  // Hover STATES
  const [isHoveredGraphql, setIsHoveredGraphql] = useState(false);
  const [isHoveredNextjs, setIsHoveredNextjs] = useState(false);
  const [isHoveredBlockchain, setIsHoveredBlockchain] = useState(false);
  const [isHoveredAws, setIsHoveredAws] = useState(false);
  const [isHoveredMysql, setIsHoveredMysql] = useState(false);
  const [isHoveredRabbitmq, setIsHoveredRabbitmq] = useState(false);
  const [isHoveredMicroservice, setIsHoveredMicroservice] = useState(false);

  const handleHoverGraphql = () => {
    setIsHoveredGraphql(!isHoveredGraphql);
  };

  const handleHoverNextjs = () => {
    setIsHoveredNextjs(!isHoveredNextjs);
  };

  const handleHoverBlockchain = () => {
    setIsHoveredBlockchain(!isHoveredBlockchain);
  };

  const handleHoverAws = () => {
    setIsHoveredAws(!isHoveredAws);
  };

  const handleHoverMysql = () => {
    setIsHoveredMysql(!isHoveredMysql);
  };

  const handleHoverRabbitmq = () => {
    setIsHoveredRabbitmq(!isHoveredRabbitmq);
  };

  const handleHoverMicroservice = () => {
    setIsHoveredMicroservice(!isHoveredMicroservice);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      style={{ position: "relative", paddingBottom: "110px" }}
    >
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
              onHoverStart={handleHoverGraphql}
              onHoverEnd={handleHoverGraphql}
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
                  rotate: isHoveredGraphql ? -20 : 0,
                  scale: isHoveredGraphql ? 1.3 : 1,
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
                  rotate: isHoveredGraphql ? 359 : 0,
                  scale: isHoveredGraphql ? 1.2 : 1,
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
                  fontSize: "23px",
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
              onHoverStart={handleHoverNextjs}
              onHoverEnd={handleHoverNextjs}
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
                  top: -15,
                  right: -14,
                  opacity: 0.2,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredNextjs ? 20 : 0,
                  scale: isHoveredNextjs ? 1.2 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={nextjsLogo} height={110} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredNextjs ? 10 : 0,
                  scale: isHoveredNextjs ? 1.2 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={nextjsLogo} height={70} />
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
                  fontSize: "23px",
                  marginBottom: "6px",
                }}
              >
                Next.js (R&D)
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="nextjs-special-job"
              >
                Implemented <b>OG Protocol</b> for crawlers to play{" "}
                <b>Videos</b> in Twitter, Discord using Next.js <b>SSR</b>.
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
              onHoverStart={handleHoverBlockchain}
              onHoverEnd={handleHoverBlockchain}
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
                  top: -5,
                  right: 2,
                  opacity: 0.1,
                }}
                initial={{ rotate: 0, scale: 1, x: 0, y: 0 }}
                animate={{
                  rotate: isHoveredBlockchain ? -200 : 0,
                  scale: isHoveredBlockchain ? 0.4 : 1,
                  x: isHoveredBlockchain ? -60 : 0,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={ethereumLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 15,
                  right: 14,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredBlockchain ? -10 : 0,
                  scale: isHoveredBlockchain ? 1.2 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={ethereumLogo} height={60} />
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
                2 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "23px",
                  marginBottom: "6px",
                }}
              >
                Blockchain (R&D)
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="blockchain-special-job"
              >
                Done deep R&D and led team to deploy <b>64K NFT</b>, ERC20{" "}
                <b>Token</b> in Polygon & <b>Trading bot</b> in Solana.
              </p>
            </motion.div>
          </Col>

          {/* AWS S3 SKILL */}
          {/* AWS S3 SKILL */}
          {/* AWS S3 SKILL */}
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <motion.div
              className="aws-skill-box cursor-pointer"
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                height: "100%",
              }}
              onHoverStart={handleHoverAws}
              onHoverEnd={handleHoverAws}
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
                  rotate: isHoveredAws ? -10 : 0,
                  scale: isHoveredAws ? 0 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={awsLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 12,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredAws ? -10 : 0,
                  scale: isHoveredAws ? 1.3 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={awsLogo} height={60} />
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
                className="aws-years"
              >
                1 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "23px",
                  marginBottom: "6px",
                }}
              >
                AWS S3
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="aws-special-job"
              >
                Integrated AWS S3 module with <b>RN</b> & <b>Node.js</b> for{" "}
                <b>Agora Streaming</b> Cloud Recording.
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
              onHoverStart={handleHoverMysql}
              onHoverEnd={handleHoverMysql}
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
                  rotate: isHoveredMysql ? -10 : 0,
                  scale: isHoveredMysql ? 0 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={mysqlLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 12,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredMysql ? -10 : 0,
                  scale: isHoveredMysql ? 1.3 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={mysqlLogo} height={60} />
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
                  fontSize: "23px",
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
              className="rabbitmq-skill-box cursor-pointer"
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                height: "100%",
              }}
              onHoverStart={handleHoverRabbitmq}
              onHoverEnd={handleHoverRabbitmq}
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
                  right: -15,
                  opacity: 0.2,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredRabbitmq ? -20 : 0,
                  scale: isHoveredRabbitmq ? 0 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={rabbitmqLogo} height={80} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 8,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotateX: isHoveredRabbitmq ? 180 : 0,
                  scale: isHoveredRabbitmq ? 1.2 : 1,
                  x: isHoveredRabbitmq ? -14 : 0,
                  y: isHoveredRabbitmq ? 13 : 0,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={rabbitmqLogo} height={40} />
              </motion.div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginBottom: "12px",
                  color: "black",
                  backgroundColor: "rgb(94 94 211)",
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  borderRadius: "15px",
                }}
                className="rabbitmq-years"
              >
                1 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "23px",
                  marginBottom: "6px",
                }}
              >
                RabbitMQ (R&D)
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "13px",
                }}
                className="rabbitmq-special-job"
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
              className="microservice-skill-box cursor-pointer"
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                height: "100%",
              }}
              onHoverStart={handleHoverMicroservice}
              onHoverEnd={handleHoverMicroservice}
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
                  right: -6,
                  opacity: 0.1,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredMicroservice ? -70 : 0,
                  scale: isHoveredMicroservice ? 0.3 : 1,
                  x: isHoveredMicroservice ? -40 : 0,
                  y: isHoveredMicroservice ? 30 : 0,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={microserviceLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 12,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredMicroservice ? 50 : 0,
                  scale: isHoveredMicroservice ? 1.2 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={microserviceLogo} height={60} />
              </motion.div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginBottom: "12px",
                  color: "black",
                  backgroundColor: "rgb(63 140 148)",
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  borderRadius: "15px",
                }}
                className="microservice-years"
              >
                2 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "23px",
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
                className="microservice-special-job"
              >
                Built <b>7 Microservices</b> to handle rapid actions of{" "}
                <b>1M live users</b> (BD Govt project).
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* BOTTOM SVG */}
      <div class="custom-shape-divider-bottom-1711715159">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
}

export default AdditionalSkills;
