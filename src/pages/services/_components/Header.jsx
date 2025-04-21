import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ServicesImage from "../../../assets/services.png";

function Header() {
  return (
    <Box position={"relative"}>
      <Image {...css.image} src={ServicesImage} alt="BannerOne" />
    </Box>
  );
}

export default Header;

const css = {
  image: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    height: "200px",
  },
};
