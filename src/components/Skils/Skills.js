import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import reactNativeLogo from "../../Assets/react-native.svg";
import reactLogo from "../../Assets/react.svg";
import nodeJsLogo from "../../Assets/nodejs.svg";
import { motion } from "framer-motion";

function Skills() {
  // Hover STATES
  const [isHoveredReactNative, setIsHoveredReactNative] = useState(false);
  const [isHoveredReact, setIsHoveredReact] = useState(false);
  const [isHoveredNode, setIsHoveredNode] = useState(false);

  const handleHoverReactNative = () => {
    setIsHoveredReactNative(!isHoveredReactNative);
  };

  const handleHoverReact = () => {
    setIsHoveredReact(!isHoveredReact);
  };

  const handleHoverNode = () => {
    setIsHoveredNode(!isHoveredNode);
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
              <motion.div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -10,
                  opacity: 0.2,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredReactNative ? 40 : 0,
                  scale: isHoveredReactNative ? 1.3 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <img src={reactNativeLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 7,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredReactNative ? 30 : 0,
                  scale: isHoveredReactNative ? 1.3 : 1,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={reactNativeLogo} height={60} />
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
          {/* NODE SKILL */}
          {/* NODE SKILL */}
          {/* NODE SKILL */}
          <Col
            sm={6}
            md={3}
            style={{
              padding: "10px",
            }}
          >
            <motion.div
              className="node-skill-box cursor-pointer"
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
                  rotate: isHoveredNode ? -40 : 0,
                  scale: isHoveredNode ? 0.4 : 1,
                  x: isHoveredNode ? -60 : 0,
                }}
                transition={{ duration: 0.45 }}
              >
                <img src={nodeJsLogo} height={100} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 7,
                }}
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: isHoveredNode ? -40 : 0,
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
                  backgroundColor: "#3b91aa",
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  borderRadius: "15px",
                }}
                className="node-years"
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
                Node.js
              </p>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "12px",
                }}
                className="node-special-job"
              >
                Integrated tons of complex APIs (STRIPE Subscriptions,
                Blockchain Transactions, AWS S3 module, more)
              </p>
            </motion.div>
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
