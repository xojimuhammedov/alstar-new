import { Box, Image } from "@chakra-ui/react";
import React from "react";
import NewsEvents from "../../../assets/events.png";

function Header() {
  return (
    <Box position={"relative"}>
      <Image {...css.image} src={NewsEvents} alt="BannerOne" />
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
    objectFit: "cover",
  },
};
