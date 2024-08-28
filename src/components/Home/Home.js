import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/book.gif";
import Particle from "../Particle";
import { motion } from "framer-motion";
import Experience from "../Experience/Experience";
import Skills from "../Skils/Skills";
import AdditionalSkills from "../Skils/AdditionalSkills";
import LeadershipSkills from "../Skils/LeadershipSkills";
import Projects from "../Projects/Projects";
import GoDownLogo from "../../Assets/godown.svg";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blog/Blogs";
import Contact from "../Contact/Contact";

function Home() {
  // STATE for mobile device
  const [isMobile, setIsMobile] = useState(false);

  // STATE for checking Hover
  const [isHoveredBook, setIsHoveredBook] = useState(false);

  // Show down indicator button when scrolled
  const [showGoDown, setShowGoDown] = useState(true);

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

  // Show down indicator button when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoDown(false);
      } else {
        setShowGoDown(true);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Col md={7} className="home-header">
              <motion.div
                initial={{ x: "-200%", y: "-300%" }} // Initial position (off-screen to the left)
                animate={{ x: 0, y: 0 }} // Animate to the center (0%)
                transition={{ duration: 2 }} // Animation duration
              >
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> ANISUR RAHMAN 🙋‍♂️ </strong>
                </h1>

                <h5
                  className="home-general-text-common-style"
                  style={{
                    paddingTop: 30,
                    paddingRight: 50,
                    paddingBottom: 20,
                  }}
                >
                  🟢 Sr. <b style={{ color: "gold" }}>Mobile</b> Engineer with{" "}
                  <b style={{ color: "gold" }}>5+ years</b> of JS{" "}
                  <b style={{ color: "gold" }}>Full Stack</b> exp.
                </h5>

                <h5 className="home-general-text-common-style">
                  🟢 <b style={{ color: "gold" }}>Mobile</b>,{" "}
                  <b style={{ color: "gold" }}>Web</b> &{" "}
                  <b style={{ color: "gold" }}>Blockchain</b> expert with{" "}
                  <b style={{ color: "gold" }}>R&D</b> skill.
                </h5>
              </motion.div>

              <motion.div
                initial={{ x: "-300%" }} // Initial position (off-screen to the left)
                animate={{ x: 0 }} // Animate to the center (0%)
                transition={{ duration: 3 }} // Animation duration
              >
                <div className="remarks-title-container">
                  {}
                  <motion.div
                    animate={{
                      // It will blink for 2 times
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0)",
                        "0 0 10px rgba(255, 255, 255, 0)",
                        "0 0 60px rgba(246, 255, 0, 1)",
                        "0 0 10px rgba(255, 255, 255, 0)",
                      ],
                      scale: isMobile ? [1] : [1, 1.1],
                      x: isMobile ? [0] : [0, 13],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <h1 className="endorse-title">
                      TOP <strong className="main-name">REMARKS 🔥</strong>
                    </h1>
                  </motion.div>
                </div>

                <h5
                  className="home-general-text-common-style"
                  style={{
                    paddingTop: 30,
                    paddingBottom: 20,
                    position: "relative",
                  }}
                >
                  🎖️{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://x.com/mdj_dev/status/1750908771713315326?s=20"
                    className="custom-link cursor-pointer"
                  >
                    Top RN Company ( <b style={{ color: "gold" }}>Callstack</b>{" "}
                    ) endorsed me 🔗
                  </a>
                </h5>

                <h5
                  className="home-general-text-common-style"
                  style={{
                    paddingBottom: 20,
                    position: "relative",
                  }}
                >
                  🎖️{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://reactnativeradio.com/episodes/rnr-285-expo-dominates-the-app-store-and-other-news?t=23m1s"
                    className="custom-link cursor-pointer"
                  >
                    Top RN Podcast featured me - ({" "}
                    <b style={{ color: "gold" }}>Infinite Red</b> ) 🔗
                  </a>
                </h5>

                {/* <h5
                  style={{
                    paddingLeft: 50,
                    paddingBottom: 20,
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  🎖️{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Shopify/react-native-skia/pull/2350"
                    className="custom-link cursor-pointer"
                  >
                    I was added ( by <b style={{ color: "gold" }}>Shopify</b> )
                    as Contributor in RN SKIA 🔗
                  </a>
                </h5> */}

                <h5
                  className="home-general-text-common-style"
                  style={{
                    position: "relative",
                  }}
                >
                  🎖️{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/anisurrahman072/React-Native-Advanced-Guide/blob/master/Testing/RNTL-Component-Testing-ultimate-guide.md"
                    className="custom-link cursor-pointer"
                  >
                    My BOOK was added ( by{" "}
                    <b style={{ color: "gold" }}>Callstack</b> ) in RNTL doc 🔗
                  </a>
                </h5>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  initial={{ scale: 0.1, opacity: 0 }} // Initial state: very small and invisible
                  animate={{
                    scale: isHoveredBook ? 1.03 : 1, // Zoom in
                    opacity: 1, // Fade in
                    rotate: isHoveredBook ? 360 : 362, // Rotate 360 degrees (circulating)
                  }}
                  transition={{ duration: isHoveredBook ? 0.5 : 2.5 }} // Animation duration (in seconds)
                  onHoverStart={handleHoverBook}
                  onHoverEnd={handleHoverBook}
                  style={{ display: "inline-block" }}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/anisurrahman072/React-Native-Advanced-Guide"
                    className="custom-link cursor-pointer"
                  >
                    <img
                      src={homeLogo}
                      alt="home pic"
                      className="img-fluid book-pic"
                      style={{
                        maxHeight: "600px",
                        borderRadius: "15px",
                        position: "relative",
                      }}
                    />
                  </a>
                </motion.div>
              </div>
            </Col>
          </Row>
          <div id="skills-section-id"></div>
          {showGoDown && !isMobile && (
            <div
              style={{
                position: "fixed",
                bottom: 30,
                right: 20,
                textDecoration: "null",
              }}
            >
              <a
                href="#skills-section-id"
                className="custom-link cursor-pointer"
              >
                <div
                  style={{
                    borderRadius: "25px",
                    height: "80px",
                  }}
                  className="show-godown-box"
                >
                  <div>
                    <motion.div
                      animate={{
                        y: [0, 24, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      style={{
                        fontSize: "30px",
                        textDecoration: null,
                        padding: "5px",
                      }}
                    >
                      <img src={GoDownLogo} height={20} widtj={20} />
                    </motion.div>
                  </div>
                </div>
              </a>
            </div>
          )}
        </Container>
      </Container>
      {/* Skills Component */}
      <Skills />
      {/* Additional Skills */}
      <AdditionalSkills />
      {/* Experience Component */}
      <Experience />
      {/* Leadership SKILL & AWARDS */}
      <LeadershipSkills />
      {/* MY PROJECTS */}
      <Projects />
      {/* BLOGS */}
      <Blogs />
      {/* Testimonials */}
      <Testimonials />
      {/* CONTACT */}
      <Contact />
    </section>
  );
}

export default Home;
