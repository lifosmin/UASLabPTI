import React from "react";
import "../styles/Footer.scss";
import {
  Flex,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Flex className="footer">
        <Flex w="20%" className="footer__logo">
          <h1>Berita PTI</h1>
          <div className="footer__lv"></div>
        </Flex>
        <Flex w="50%" className="footer__navigation">
          <Flex>
            <Link p="10px">News</Link>
            <Link p="10px">Blogs</Link>
            <Link p="10px">Developers</Link>
          </Flex>
          <Flex className="footer__copyright">
            Copyright@2021 Kelompok 1
          </Flex>
        </Flex>
        <Flex w="30%" className="footer__aboutus">
          
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
