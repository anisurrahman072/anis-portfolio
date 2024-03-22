import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/book.gif";
import Particle from "../Particle";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import experiences from "../../utils/experiences";

function Experience() {
  const [isHoveredBook, setIsHoveredBook] = useState(false);

  const handleHoverBook = () => {
    setIsHoveredBook(!isHoveredBook);
  };

  return (
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
        <h1
          style={{
            color: "white",
            fontSize: "60px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          Work Experience
        </h1>
      </motion.div>

      <Container fluid className="" id="home">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={experience.icon}
                    alt={experience.companyName}
                    style={{
                      height: "60%",
                      width: "60%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              }
            >
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {experience.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    fontWeight: "semibold",
                  }}
                >
                  {experience.companyName}
                </p>
              </div>

              <ul
                style={{
                  marginLeft: "5px",
                  marginTop: "5px",
                  listStyleType: "disc",
                  marginBottom: "0.5rem", // Add some spacing between list items
                }}
              >
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    style={{
                      color: "white",
                      paddingLeft: "1px",
                      fontSize: "14px",
                      letterSpacing: "wider",
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </motion.section>
  );
}

export default Experience;
