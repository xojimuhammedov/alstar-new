import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AlstarIcon from "../assets/logo.png";
import Language from './Language';
import axios from "axios";
import { useTranslation } from "react-i18next";
import NavModal from "./NavModal";
import { Link } from "react-router-dom";
import { BASE_URL } from "../api";

function Navbar() {
  const [products, setProducts] = useState();
  const [projects, setProjects] = useState();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        const responseData = res?.data?.data;
        const firstElement = res?.data?.data?.splice(0, 1);
        responseData.push(firstElement[0]);
        setProducts(responseData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects`)
      .then((res) => {
        const responseDataOne = res?.data?.data;
        setProjects(responseDataOne);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box {...css.nav}>
      <Box className="container">
        <Flex {...css.top}>
          <Link to="/about-alstar">
            <Text {...css.links}>{t("nav1")}</Text>
          </Link>
          <Link to="/career">
            <Text {...css.links}>{t("nav2")}</Text>
          </Link>
          <Link to="/contact">
            <Text {...css.links}>{t("nav3")}</Text>
          </Link>
          <Link to="/branch">
            <Text {...css.links}>{t("branch")}</Text>
          </Link>
          <Language />
        </Flex>
        <Flex {...css.list}>
          <Link to="/">
            <Image {...css.icon} src={AlstarIcon} alt="AlstarIcon" />
          </Link>
          <Box display={{ base: "block", lg: "none" }}>
            <NavModal />
          </Box>
          <Flex {...css.item}>
            <div className="dropdown">
              <Text className="dropbtn" {...css.link}>
                {t("nav4")}
              </Text>
              <div className="dropdown-content">
                {projects?.map((item, index) => (
                  <Link key={index} to={`/product/${item?.id}`}>
                    {item[`name_${i18n?.language}`]}
                  </Link>
                ))}
              </div>
            </div>
            <div className="dropdown">
              <Text className="dropbtn" {...css.link}>
                {t("nav5")}
              </Text>
              <div className="dropdown-content dropdown-menu">
                {products?.map((item, index) => (
                  <Link key={index} to={`/alstar-product/${item?.id}`}>
                    {item[`name_${i18n?.language}`]}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/inspirations">
              <Text {...css.link}>{t("nav6")}</Text>
            </Link>
            <Link to="/colour">
              <Text {...css.link}>{t("nav7")}</Text>
            </Link>
            <Link to="/service-download">
              <Text {...css.link}>{t("nav8")}</Text>
            </Link>
            <Link to="/news">
              <Text {...css.link}>{t("nav9")}</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  icon: {
    width: {
      base: "180px",
      md: "250px",
    },
  },
  nav: {
    padding: {
      base: "10px 0",
      md: "24px 0",
    },
  },
  list: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
    gap: "24px",
    display: {
      base: "none",
      md: "flex",
    },
  },
  link: {
    color: "#111",
    fontSize: "16px",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontWeight: "400",
    transition: "0.3s",
    display: {
      base: "none",
      md: "block",
    },

    _hover: {
      color: "#EE1818",
    },
  },
  top: {
    justifyContent: "flex-end",
    gap: "12px",
    padding: "16px 0",
    alignItems: "center",
  },
  links: {
    color: "#5F5E5E",
    fontSize: "14px",
    lineHeight: "20px",
    textTransform: "uppercase",
    fontWeight: "500",
    transition: "0.3s",
    display: {
      base: "none",
      md: "block",
    },

    _hover: {
      color: "#EE1818",
    },
  },
  menuItem: {
    top: "50px",
    minWidth: "120px",
  },
};
