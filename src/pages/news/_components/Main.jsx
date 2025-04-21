import { Box, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NewsImage from "../../../assets/new.png";
import EventImage from "../../../assets/event.png";

function Main() {
  const { t } = useTranslation();
  return (
    <Box p={"36px 0"}>
      <Box className="container-mix">
        <Heading {...css.title}>{t("We will keep you up to date")}</Heading>

        <SimpleGrid mt={"48px"} gap={"36px"} columns={{ base: 1, md: 2 }}>
          <Box>
            <Image {...css.image} alt="Project One" src={NewsImage} />
            <Heading {...css.name}>{t("news-list.name")}</Heading>
            <Text {...css.text}>{t("news-list.text")}</Text>
            <Link to="/news-list">
              <Text {...css.link}>{t("Learn More")}</Text>
            </Link>
          </Box>
          <Box>
            <Image {...css.image} alt="Project One" src={EventImage} />
            <Heading {...css.name}>{t("news-events.name")}</Heading>
            <Text {...css.text}>{t("news-events.text")}</Text>
            <Link to="/news-events">
              <Text {...css.link}>{t("Learn More")}</Text>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: {
      base: "25px",
      md: "34px",
    },
    lineHeight: {
      base: "30px",
      md: "39px",
    },
    fontWeight: "200",
    color: "#111",
    marginBottom: "24px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#111",
    marginBottom: "16px",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    height: "300px",
    objectFit: "cover",
  },
  name: {
    fontSize: "25px",
    lineHeight: "30px",
    fontWeight: "200",
    color: "#111",
    margin: "8px 0",
  },
  link: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "8px 15px",
    fontWeight: "500",
    fontSize: "14px",
    transition: "0.3s all",
    borderRadius: "12px",
    width: "140px",
    textAlign: "center",

    _hover: {
      background: "#C22329",
    },
  },
};
