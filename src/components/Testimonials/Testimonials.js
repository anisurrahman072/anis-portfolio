import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Maciej from "../../Assets/maciej.jpg";
import Vadim from "../../Assets/vadim.jpg";
import projectBsport from "../../Assets/projectBsport.gif";
import projectEcommerce from "../../Assets/projectEcommerce.gif";
import projectNft from "../../Assets/projectNft.gif";
import projectYouth from "../../Assets/projectYouth.gif";
import projectTruck from "../../Assets/projectTruck.gif";
import { motion } from "framer-motion";

function Testimonials() {
  // STATE for mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Hover STATES
  const [isHoveredBsport, setIsHoveredBsport] = useState(false);
  const [isHoveredEcommerce, setIsHoveredEcommerce] = useState(false);
  const [isHoveredNft, setIsHoveredNft] = useState(false);
  const [isHoveredYouth, setIsHoveredYouth] = useState(false);
  const [isHoveredTruck, setIsHoveredTruck] = useState(false);

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

  const handleHoverYouth = () => {
    setIsHoveredYouth(!isHoveredYouth);
  };

  const handleHoverTruck = () => {
    setIsHoveredTruck(!isHoveredTruck);
  };

  const images = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

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
              <strong className="main-name">TESTIMONIALS</strong> FROM 1000+
              DEVS
            </h1>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        {/* AUTO HORIZONTAL SCROLLER */}
        {/* AUTO HORIZONTAL SCROLLER */}
        {/* AUTO HORIZONTAL SCROLLER */}
        <div className="inner">
          <div className="wrapper1">
            <section style={{ "--speed": `${40000}ms` }} className="my-section">
              {/* MACIEJ */}
              {/* MACIEJ */}
              {/* MACIEJ */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="testimonial-box"
                  style={{
                    borderRadius: "15px",
                    padding: "30px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", fontSize: "13px" }}>
                    <img
                      src={Maciej}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>
                        Maciej Jastrzębski
                      </div>
                      <div>Innovation Lead @callstackio</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>
                    I've updated React Native Testing Library community
                    resources page with comprehensive guide to RNTL from Anis 🔥
                  </div>

                  {/* Text */}
                  <div>
                    His guide contains a lot of useful knowledge in an easy to
                    understand format.
                  </div>
                </div>
              </div>

              {/* VADIM */}
              {/* VADIM */}
              {/* VADIM */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="testimonial-box"
                  style={{
                    borderRadius: "15px",
                    padding: "30px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", fontSize: "13px" }}>
                    <img
                      src={Vadim}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Vadim Savin</div>
                      <div>CEO of @NotJustDev</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>
                    Hey Anis, I just found your React Native Advanced Guide.
                    Read one part of it, and I must say - it's golden 🏅
                  </div>
                </div>
              </div>

              {/* PROJECT NFT */}
              {/* PROJECT NFT */}
              {/* PROJECT NFT */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="project-nft-box cursor-pointer"
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "23px",
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
                    Guided team through unknown topic - <b>Deploy 64K NFTs</b>{" "}
                    on <b>Polygon</b> Chain & increased <b>more 20K users</b> in
                    App.
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
                      React Native
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
                      Polygon
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
                      Alchemy
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
                      Opensea
                    </p>
                  </div>
                </div>
              </div>

              {/* PROJECT YOUTH */}
              {/* PROJECT YOUTH */}
              {/* PROJECT YOUTH */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="project-youth-box cursor-pointer"
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "23px",
                      marginTop: "6px",
                    }}
                  >
                    Youth Management
                  </p>

                  <div style={{ overflow: "hidden" }}>
                    <motion.div
                      initial={{ scale: 1 }} // Initial state: very small and invisible
                      animate={{
                        scale: isHoveredYouth ? 1.06 : 1, // Zoom in
                      }}
                      transition={{ duration: 0.45 }} // Animation duration (in seconds)
                      style={{
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                      className="project-youth-image"
                    >
                      <img
                        src={projectYouth}
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
                    className="project-youth-special-job"
                  >
                    Led the backend <b>R&D team</b>, deftly managing{" "}
                    <b>1M active users</b> across 7 microservices using
                    RabbitMQ.
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
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      Lumen
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      Microservice
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      RabbitMQ
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      SAGA Pattern
                    </p>

                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      MySQL
                    </p>
                  </div>
                </div>
              </div>

              {/* PROJECT TRUCK MANAGEMENT */}
              {/* PROJECT TRUCK MANAGEMENT */}
              {/* PROJECT TRUCK MANAGEMENT */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="project-truck-box cursor-pointer"
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "23px",
                      marginTop: "6px",
                    }}
                  >
                    Truck Management
                  </p>

                  <div style={{ overflow: "hidden" }}>
                    <motion.div
                      initial={{ scale: 1 }} // Initial state: very small and invisible
                      animate={{
                        scale: isHoveredTruck ? 1.06 : 1, // Zoom in
                      }}
                      transition={{ duration: 0.45 }} // Animation duration (in seconds)
                      style={{
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                      className="project-truck-image"
                    >
                      <img
                        src={projectTruck}
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
                    className="project-truck-special-job"
                  >
                    Integrated 3 BD <b>payment gateways</b>, delivered{" "}
                    <b>full-stack</b> solutions, and enrolled <b>50K+ users</b>.
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
                        backgroundColor: "rgb(94 94 211)",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-truck-years"
                    >
                      React
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "rgb(94 94 211)",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-truck-years"
                    >
                      Node.js
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "rgb(94 94 211)",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-truck-years"
                    >
                      Express.js
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "rgb(94 94 211)",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-truck-years"
                    >
                      MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ADD THE SAME SECTION AGAIN SO THAT NO GAP THERE */}
            <section style={{ "--speed": `${40000}ms` }} className="my-section">
              {/* PROJECT BASEMENT SPORTS */}
              {/* PROJECT BASEMENT SPORTS */}
              {/* PROJECT BASEMENT SPORTS */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="project-bsport-box cursor-pointer"
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "23px",
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
                      AWS S3
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
                      Stream
                    </p>
                  </div>
                </div>
              </div>

              {/* PROJECT ECOMMERCE */}
              {/* PROJECT ECOMMERCE */}
              {/* PROJECT ECOMMERCE */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="project-ecommerce-box cursor-pointer"
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "23px",
                      marginTop: "6px",
                    }}
                  >
                    E-Commerce
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
                    <b>full-stack development</b>, boosting orders to{" "}
                    <b>$35M</b>.
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
                </div>
              </div>

              {/* PROJECT NFT */}
              {/* PROJECT NFT */}
              {/* PROJECT NFT */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="project-nft-box cursor-pointer"
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "23px",
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
                    Guided team through unknown topic - <b>Deploy 64K NFTs</b>{" "}
                    on <b>Polygon</b> Chain & increased <b>more 20K users</b> in
                    App.
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
                      React Native
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
                      Polygon
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
                      Alchemy
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
                      Opensea
                    </p>
                  </div>
                </div>
              </div>

              {/* PROJECT YOUTH */}
              {/* PROJECT YOUTH */}
              {/* PROJECT YOUTH */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="project-youth-box cursor-pointer"
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "23px",
                      marginTop: "6px",
                    }}
                  >
                    Youth Management
                  </p>

                  <div style={{ overflow: "hidden" }}>
                    <motion.div
                      initial={{ scale: 1 }} // Initial state: very small and invisible
                      animate={{
                        scale: isHoveredYouth ? 1.06 : 1, // Zoom in
                      }}
                      transition={{ duration: 0.45 }} // Animation duration (in seconds)
                      style={{
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                      className="project-youth-image"
                    >
                      <img
                        src={projectYouth}
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
                    className="project-youth-special-job"
                  >
                    Led the backend <b>R&D team</b>, deftly managing{" "}
                    <b>1M active users</b> across 7 microservices using
                    RabbitMQ.
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
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      Lumen
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      Microservice
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      RabbitMQ
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      SAGA Pattern
                    </p>

                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "#8a5ed3",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-youth-years"
                    >
                      MySQL
                    </p>
                  </div>
                </div>
              </div>

              {/* PROJECT TRUCK MANAGEMENT */}
              {/* PROJECT TRUCK MANAGEMENT */}
              {/* PROJECT TRUCK MANAGEMENT */}
              <div
                style={{
                  minWidth: "350px",
                  padding: "18px",
                }}
              >
                <div
                  className="project-truck-box cursor-pointer"
                  style={{
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "left",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "23px",
                      marginTop: "6px",
                    }}
                  >
                    Truck Management
                  </p>

                  <div style={{ overflow: "hidden" }}>
                    <motion.div
                      initial={{ scale: 1 }} // Initial state: very small and invisible
                      animate={{
                        scale: isHoveredTruck ? 1.06 : 1, // Zoom in
                      }}
                      transition={{ duration: 0.45 }} // Animation duration (in seconds)
                      style={{
                        marginTop: "15px",
                        marginBottom: "15px",
                      }}
                      className="project-truck-image"
                    >
                      <img
                        src={projectTruck}
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
                    className="project-truck-special-job"
                  >
                    Integrated 3 BD <b>payment gateways</b>, delivered{" "}
                    <b>full-stack</b> solutions, and enrolled <b>50K+ users</b>.
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
                        backgroundColor: "rgb(94 94 211)",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-truck-years"
                    >
                      React
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "rgb(94 94 211)",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-truck-years"
                    >
                      Node.js
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "rgb(94 94 211)",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-truck-years"
                    >
                      Express.js
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        backgroundColor: "rgb(94 94 211)",
                        display: "inline-block",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "15px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="project-truck-years"
                    >
                      MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.section>
    </Container>
  );
}

export default Testimonials;
