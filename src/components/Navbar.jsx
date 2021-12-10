import React, { useState } from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [navbarPos, setNavbarPos] = useState(false);

  const handleStickScroll = (e) => {
    window.scrollY > 0 ? setNavbarPos(true) : setNavbarPos(false);
  };

  window.addEventListener("scroll", (e) => handleStickScroll(e));

  const [opened, setOpened] = useState(false);


  return (
    <nav className={navbarPos ? "fixed" : ""}>
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        className="navbar__container"
      >
        <Heading fontSize={{ base: "1rem", md: "1.5rem" }} fontWeight="800">
          Berita PTI
        </Heading>
        <Box
          className={navbarPos ? "nav-items scrolled" : "nav-items"}
          style={{}}
        >
          <NavLink className="link" to="/News">
            NEWS
          </NavLink>
          <NavLink className="link" to="/Blogs">
            BLOGS
          </NavLink>
          <NavLink className="link" to="/Developers">
            DEVELOPERS
          </NavLink>
          
        </Box>
        <div
            onClick={() => {
              setOpened(!opened);
              
            }}
            className={opened ? "hamburger active" : "hamburger"}
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
      </Flex>

      <Box className={`mobile-nav ${opened ? "mobile-nav-show" : "mobile-nav-hide"}`} >
        <Box
          className="mobile-nav-container"
          style={{}}
        >
          <NavLink className="link-mobile" to="/News">
            NEWS
          </NavLink>
          <NavLink className="link-mobile" to="/Blogs">
            BLOGS
          </NavLink>
          <NavLink className="link-mobile" to="/Developers">
            DEVELOPERS
          </NavLink>
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;
