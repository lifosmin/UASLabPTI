import React, { useState } from "react";
import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { MyButton } from "./Button";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [navbarPos, setNavbarPos] = useState(false);
  const [opened, setOpened] = useState(false);

  const isLogged = localStorage.getItem("logged");

  const handleStickScroll = (e) => {
    window.scrollY > 0 ? setNavbarPos(true) : setNavbarPos(false);
  };

  window.addEventListener("scroll", (e) => handleStickScroll(e));

  return (
    <nav className={navbarPos ? "fixed" : ""}>
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        className="navbar__container"
      >
        <NavLink to="/" className="nav-brand">
          <Image
            src="/assets/logo-med.png"
            height="2rem"
            mt="5px"
            mr="0.2rem"
          />
          <Heading margin="0">Berita PTI</Heading>
        </NavLink>
        <Box className={navbarPos ? "nav-items scrolled" : "nav-items"}>
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
        {isLogged ? (
          <NavLink to="/logout" className="nav-btn-login">
            <MyButton className="nav-login" navScrolled={navbarPos}>
              Logout
            </MyButton>
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav-btn-login">
            <MyButton className="nav-login" navScrolled={navbarPos}>
              Login
            </MyButton>
          </NavLink>
        )}
        <div
          onClick={() => {
            setOpened(!opened);
          }}
          className={opened ? "hamburger active" : "hamburger"}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </Flex>

      <Box
        className={`mobile-nav ${
          opened ? "mobile-nav-show" : "mobile-nav-hide"
        }`}
      >
        <Box className="mobile-nav-container" style={{}}>
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
