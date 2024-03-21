import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import github from "../Assets/github.svg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

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
        <div
          style={{
            border: "1px solid white",
            borderRadius: "25px",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingTop: "7px",
            paddingBottom: "2px",
            display: "flex",
            alignItems: "center",
            color: "white",
            margin: 0,
            lineHeight: 1,
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>
            <img src={github} height="20px" />
          </h6>
          <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>1212</h6>
          <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>|</h6>
          <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>Give a STAR</h6>
          <h6 style={{ marginLeft: "5px", marginRight: "5px" }}>➤</h6>
        </div>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
