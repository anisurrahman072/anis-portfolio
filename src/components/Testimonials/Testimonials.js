import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Maciej from "../../Assets/maciej.jpg";
import Vadim from "../../Assets/vadim.jpg";
import Nehat from "../../Assets/nehat.jpg";
import Jamon from "../../Assets/jamon.jpg";
import Biskit from "../../Assets/biscit.jpg";
import Sayed from "../../Assets/sayed.jpg";
import Michihiro from "../../Assets/Michihiro.jpg";
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
        style={{ marginTop: "3.5rem", marginBottom: "2rem" }}
      >
        {/* AUTO HORIZONTAL SCROLLER */}
        {/* AUTO HORIZONTAL SCROLLER */}
        {/* AUTO HORIZONTAL SCROLLER */}
        <div className="inner">
          <div className="wrapper1">
            <section style={{ "--speed": `${50000}ms` }} className="my-section">
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

              {/* NAHAT */}
              {/* NAHAT */}
              {/* NAHAT */}
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
                      src={Nehat}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Nehat</div>
                      <div>Software Engineer @India</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>
                    Anis bro, You are really doing awesome job. Trust me I learn
                    a lot from your guide. Docs are shit. The way you explain is
                    dope bro.
                  </div>

                  {/* Text */}
                  <div>I'm feeling lucky and blessed that I found you 😘</div>
                </div>
              </div>

              {/* JAMON */}
              {/* JAMON */}
              {/* JAMON */}
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
                      src={Jamon}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Jamon</div>
                      <div>
                        CEO @infinite_red, Co-creator @ChainReactConf, Host
                        @ReactNativeRdio
                      </div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>
                    Anis has published this incredible React Native Advanced
                    Guide. I'm kind of blown away by how much he is covering.
                  </div>

                  {/* Text */}
                  <div>
                    If you are a React Native Engineer, especially one who is
                    still learning or even one who thought they were done
                    learning, this covers everything.
                  </div>
                </div>
              </div>

              {/* Biskit */}
              {/* Biskit */}
              {/* Biskit */}
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
                      src={Biskit}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Mr Biskit</div>
                      <div>Sr. Software Engineer</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>
                    Hey Anis, Just wanted to give a big shout out to the amazing
                    work you have done on the React Native Advanced Guide Book.
                  </div>

                  {/* Text */}
                  <div>
                    Thank you so much for your amazing contribution. You are a
                    gift that just keeps on giving.
                  </div>
                </div>
              </div>

              {/* Sayed */}
              {/* Sayed */}
              {/* Sayed */}
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
                      src={Sayed}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Syed Noman</div>
                      <div>Software Engineer</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>Hey Anis,</div>

                  {/* Text */}
                  <div>Great work on React Native Advance Guide 🔥</div>
                </div>
              </div>

              {/* Michihiro */}
              {/* Michihiro */}
              {/* Michihiro */}
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
                      src={Michihiro}
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
                        Michihiro Iwasaki
                      </div>
                      <div>Kotlin & Android Expert</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>Such an amazing guide!</div>

                  {/* Text */}
                  <div>
                    I've never seen articles that delve this deeply. 📝 This
                    will be a permanent repository for developers using React
                    Native!
                  </div>
                </div>
              </div>
            </section>

            {/* ADD THE SAME SECTION AGAIN SO THAT NO GAP THERE */}
            <section style={{ "--speed": `${50000}ms` }} className="my-section">
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

              {/* NAHAT */}
              {/* NAHAT */}
              {/* NAHAT */}
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
                      src={Nehat}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Nehat</div>
                      <div>Software Engineer @India</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>
                    Anis bro, You are really doing awesome job. Trust me I learn
                    a lot from your guide. Docs are shit. The way you explain is
                    dope bro.
                  </div>

                  {/* Text */}
                  <div>I'm feeling lucky and blessed that I found you 😘</div>
                </div>
              </div>

              {/* JAMON */}
              {/* JAMON */}
              {/* JAMON */}
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
                      src={Jamon}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Jamon</div>
                      <div>
                        CEO @infinite_red, Co-creator @ChainReactConf, Host
                        @ReactNativeRdio
                      </div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>
                    Anis has published this incredible React Native Advanced
                    Guide. I'm kind of blown away by how much he is covering.
                  </div>

                  {/* Text */}
                  <div>
                    If you are a React Native Engineer, especially one who is
                    still learning or even one who thought they were done
                    learning, this covers everything.
                  </div>
                </div>
              </div>

              {/* Biskit */}
              {/* Biskit */}
              {/* Biskit */}
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
                      src={Biskit}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Mr Biskit</div>
                      <div>Sr. Software Engineer</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>
                    Hey Anis, Just wanted to give a big shout out to the amazing
                    work you have done on the React Native Advanced Guide Book.
                  </div>

                  {/* Text */}
                  <div>
                    Thank you so much for your amazing contribution. You are a
                    gift that just keeps on giving.
                  </div>
                </div>
              </div>

              {/* Sayed */}
              {/* Sayed */}
              {/* Sayed */}
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
                      src={Sayed}
                      alt="home pic"
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Name & Designation */}
                    <div style={{ marginLeft: "20px" }}>
                      <div style={{ fontWeight: "bold" }}>Syed Noman</div>
                      <div>Software Engineer</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>Hey Anis,</div>

                  {/* Text */}
                  <div>Great work on React Native Advance Guide 🔥</div>
                </div>
              </div>

              {/* Michihiro */}
              {/* Michihiro */}
              {/* Michihiro */}
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
                      src={Michihiro}
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
                        Michihiro Iwasaki
                      </div>
                      <div>Kotlin & Android Expert</div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ color: "#FFD700", marginTop: "15px" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </div>

                  {/* Text */}
                  <div style={{ margin: "20px 0" }}>Such an amazing guide!</div>

                  {/* Text */}
                  <div>
                    I've never seen articles that delve this deeply. 📝 This
                    will be a permanent repository for developers using React
                    Native!
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
