import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import copy from "copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function Contact() {
  // STATE for mobile device
  const [isMobile, setIsMobile] = useState(false);

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

  function copyToClipboard() {
    copy("anisurrahmanbup@gmail.com");
    toast.success("Thank you for copying the email!");
  }

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
            <div
              style={{
                display: "inline-block",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              <div
                className="cursor-pointer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  backgroundColor: "#cd5ff8",
                  margin: "auto",
                  borderRadius: "10px",
                }}
                onClick={() => copyToClipboard()}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  OR Copy Email
                </div>
                <FontAwesomeIcon
                  icon={faCopy}
                  style={{
                    color: "white",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                  fade={true}
                />
              </div>
            </div>
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
                url="mailto:anisurrahmanbup@gmail.com" // Replace with your Email
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                // target="_blank"
                className="social-icon"
              />
              <SocialIcon
                url="https://twitter.com/anis_RNCore" // Replace with your Twitter profile URL
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                target="_blank"
                className="social-icon"
              />
              <SocialIcon
                url="https://github.com/anisurrahman072" // Replace with your GitHub profile URL
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                target="_blank"
                className="social-icon"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/anisur-rahman-970a83152/" // Replace with your LinkedIn profile URL
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                target="_blank" // Open link in a new tab
                className="social-icon"
              />
              <SocialIcon
                url="https://medium.com/@anisurrahmanbup" // Replace with your Medium profile URL
                bgColor="#8A2BE2" // Violet color
                fgColor="#ffffff" // White color
                style={{ height: 40, width: 40, margin: "15px" }}
                target="_blank" // Open link in a new tab
                className="social-icon"
              />
            </Container>
          </motion.div>
        </motion.section>
      </Container>
    </div>
  );
}

export default Contact;
