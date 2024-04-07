import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projectBsport from "../../Assets/projectBsport.gif";
import projectEcommerce from "../../Assets/projectEcommerce.gif";
import projectNft from "../../Assets/projectNft.gif";
import projectYouth from "../../Assets/projectYouth.gif";
import projectTruck from "../../Assets/projectTruck.gif";
import { motion } from "framer-motion";

function Contact() {
  // STATE for mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Hover STATES
  const [isHoveredTesting, setIsHoveredTesting] = useState(false);
  const [isHoveredDebug, setIsHoveredDebug] = useState(false);
  const [isHoveredNewArch, setIsHoveredNewArch] = useState(false);
  const [isHoveredPerformance, setIsHoveredPerformance] = useState(false);
  const [isHoveredNestedVirtual, setIsHoveredNestedVirtual] = useState(false);
  const [isHoveredIap, setIsHoveredIap] = useState(false);

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
                paddingTop: "140px",
              }}
            >
              <strong className="main-name">CONTACT</strong> (EMAIL ME)
            </h1>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <Container className="projectsContents">
            {/* <Icons></Icons> */}
          </Container>
        </motion.section>
      </Container>
    </div>
  );
}

export default Contact;
