import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import github from "../Assets/github.svg";
import { motion } from "framer-motion";
import axios from "axios";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Repo Star Count
  const [starCount, setStarCount] = useState(null);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  // Fetch Github STAR Count
  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/anisurrahman072/React-Native-Advanced-Guide`
        );
        setStarCount(response.data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Nav className="" defaultActiveKey="#home">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/anisurrahman072/React-Native-Advanced-Guide"
          className="custom-link cursor-pointer"
        >
          <motion.div
            style={{
              border: "1px solid #676767c7",
              borderRadius: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              paddingTop: "5px",
              paddingBottom: "0px",
              display: "flex",
              alignItems: "center",
              color: "white",
              margin: 0,
              lineHeight: 1,
              marginTop: "10px",
              marginBottom: "10px",
            }}
            className="nav-github-star-box cursor-pointer"
            onHoverStart={handleHover}
            onHoverEnd={handleHover}
            initial={{ x: 0, y: "-100%", opacity: 0 }} // Initial position (off-screen to the left)
            animate={{ x: 0, y: 0, opacity: 1 }} // Animate to the center (0%)
            transition={{ duration: 2 }} // Animation duration
          >
            <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>
              <img src={github} height="20px" />
            </h6>
            <h6
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                fontWeight: "bolder",
                color: "gold",
              }}
              className="github-star-count"
            >
              {starCount !== null ? starCount : 1200}
            </h6>
            <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isHovered ? 720 : 0 }}
                transition={{ duration: 1 }}
              >
                ⭐️
              </motion.div>
            </h6>
            <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>
              GitHub STAR
            </h6>
            <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: isHovered ? "15%" : 0 }}
                transition={{ duration: 0.1 }}
              >
                ➤
              </motion.div>
            </h6>
          </motion.div>
        </a>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
