import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import reactLogo from "../../Assets/react.svg";
import { motion } from "framer-motion";

function Skills() {
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
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          MY <strong className="main-name">5 YEARS</strong> SKILLS
        </h1>
      </motion.div>

      <Container className="skills-container">
        <Row>
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <div
              className="react-native-skill-box"
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "left",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 7,
                  color: "red",
                }}
              >
                <img src={reactLogo} height={60} />
              </div>
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
                React Native
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "12px",
                  color: "rgb(144 165 201)",
                }}
              >
                Integrated complex SDKs (IAP, Video Stream, Camera, more) &
                maintained deployments.
              </p>
            </div>
          </Col>
          <Col sm={6} md={3} style={{ backgroundColor: "green" }}>
            {" "}
            React
          </Col>
          <Col sm={6} md={3} style={{ backgroundColor: "yellow" }}>
            Node.js
          </Col>
          <Col sm={6} md={3} style={{ backgroundColor: "green" }}>
            MongoDb
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Skills;
