import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function Main({ newsAboutData }) {
  const { t, i18n } = useTranslation();
  return (
    <Box p={"18px 0"}>
      <Box className="container-mix">
        <Heading {...css.title}>
          {" "}
          {newsAboutData?.[`title_${i18n?.language}`]}
        </Heading>
        <Text {...css.text}> {newsAboutData?.[`text_${i18n?.language}`]}</Text>
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

    _hover: {
      background: "#C22329",
    },
  },
};
