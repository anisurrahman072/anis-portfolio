import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Maciej from "../../Assets/maciej.jpg";
import Vadim from "../../Assets/vadim.jpg";
import Nehat from "../../Assets/nehat.jpg";
import Jamon from "../../Assets/jamon.jpg";
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
                marginTop: "120px",
              }}
            >
              <strong className="main-name">TESTIMONIALS</strong> FROM COMMUNITY
            </h1>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        style={{ marginTop: "3.5rem" }}
      >
        {/* AUTO HORIZONTAL SCROLLER */}
        {/* AUTO HORIZONTAL SCROLLER */}
        {/* AUTO HORIZONTAL SCROLLER */}
        <div className="inner">
          <div className="wrapper1">
            <section style={{ "--speed": `${50000}ms` }} className="my-section">
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
          <div
            style={{
              height: "100%",

              position: "absolute",
              top: 0,
              left: 0,
            }}
            className="left-bar-scroller"
          ></div>
          <div
            style={{
              height: "100%",
              position: "absolute",
              top: 0,
              right: 0,
            }}
            className="right-bar-scroller"
          ></div>
        </div>
      </motion.section>
    </Container>
  );
}

export default Testimonials;
