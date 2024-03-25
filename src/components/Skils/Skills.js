import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import reactNativeLogo from "../../Assets/react-native.svg";
import reactLogo from "../../Assets/react.svg";
import { motion } from "framer-motion";

function Skills() {
  // Hover STATES
  const [isHoveredReactNative, setIsHoveredReactNative] = useState(false);
  const [isHoveredReact, setIsHoveredReact] = useState(false);

  const handleHoverReactNative = () => {
    setIsHoveredReactNative(!isHoveredReactNative);
  };

  const handleHoverReact = () => {
    setIsHoveredReact(!isHoveredReact);
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
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          MY <strong className="main-name">5 YEARS</strong> SKILLS
        </h1>
      </motion.div>

      <Container className="skills-container">
        <Row>
          {/* REACT NATIVE SKILL */}
          {/* REACT NATIVE SKILL */}
          {/* REACT NATIVE SKILL */}
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <motion.div
              className="react-native-skill-box cursor-pointer"
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
            >
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -10,
                  opacity: 0.2,
                }}
              >
                <img src={reactNativeLogo} height={100} />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 7,
                }}
              >
                <img src={reactNativeLogo} height={60} />
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
                className="react-native-years"
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
                }}
                className="react-native-special-job"
              >
                Integrated complex SDKs (IAP, Video Stream, Camera, more) &
                maintained deployments.
              </p>
            </motion.div>
          </Col>

          {/* REACT SKILL */}
          {/* REACT SKILL */}
          {/* REACT SKILL */}
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <motion.div
              className="react-skill-box cursor-pointer"
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
            >
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -10,
                  opacity: 0.2,
                }}
              >
                <img src={reactLogo} height={100} />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 7,
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
                  backgroundColor: "#3b91aa",
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  borderRadius: "15px",
                }}
                className="react-years"
              >
                5 yrs
              </p>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "6px",
                }}
              >
                React
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "12px",
                }}
                className="react-special-job"
              >
                Handled complex renderings (Join multiple Live Streams with
                distinct Socket data, more).
              </p>
            </motion.div>
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
