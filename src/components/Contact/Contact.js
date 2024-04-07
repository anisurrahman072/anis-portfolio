import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projectBsport from "../../Assets/projectBsport.gif";
import projectEcommerce from "../../Assets/projectEcommerce.gif";
import projectNft from "../../Assets/projectNft.gif";
import projectYouth from "../../Assets/projectYouth.gif";
import projectTruck from "../../Assets/projectTruck.gif";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

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
    <div className="contact-main-background" style={{ position: "relative" }}>
      <Container className="contact-background">
        <motion.section
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="projects-background"
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
                paddingTop: "300px",
              }}
            >
              <strong className="main-name">CONTACT</strong> ME
            </h1>
            <h5 style={{ color: "white", marginTop: "20px" }}>
              Please send me an email{" "}
              <a href="mailto:anisurrahmanbup@gmail.com">
                anisurrahmanbup@gmail.com
              </a>{" "}
            </h5>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          style={{ paddingBottom: "100px" }}
        >
          <motion.div
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
                },
              },
            }}
          >
            <Container className="contactContents">
              <SocialIcon
                url="https://twitter.com/anis_RNCore" // Replace with your Twitter profile URL
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                target="_blank"
              />
              <SocialIcon
                url="https://github.com/anisurrahman072" // Replace with your GitHub profile URL
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                target="_blank"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/anisur-rahman-970a83152/" // Replace with your LinkedIn profile URL
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                target="_blank" // Open link in a new tab
              />
              <SocialIcon
                url="https://medium.com/@anisurrahmanbup" // Replace with your Medium profile URL
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                target="_blank" // Open link in a new tab
              />
            </Container>
          </motion.div>
        </motion.section>
      </Container>
    </div>
  );
}

export default Contact;
