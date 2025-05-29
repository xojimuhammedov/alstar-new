import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import CarouselOne from "../assets/slider1.jpg";
import CarouselTwo from "../assets/carousel-two.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Company() {
  const { t } = useTranslation();
  return (
    <Box className="company" p={"50px 0"} bg={"#111"}>
      <Swiper
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        loop
        className="mySwiper">
        <SwiperSlide>
          <Box className="container">
            <Flex
              flexDirection={{ base: "column-reverse", md: "row" }}
              gap={"24px"}
              justifyContent={"space-between"}>
              <Box pl={'24px'} pt={"36px"}>
                <Heading {...css.title}>
                  {t("Unlimited versatile façade design")}
                </Heading>
                <Text {...css.text}>
                  {t("ALSTAR:First choice for demanding projects worldwide.")}
                </Text>
                <Link to={`/projects-list`}>
                  <Text {...css.link}>{t("Learn More")}</Text>
                </Link>
                {/* <Link href="/projects-list" {...css.link}>
                  {t("Learn More")}
                </Link> */}
              </Box>
              <Image {...css.image} src={CarouselOne} alt="Company" />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="container">
            <Flex
              flexDirection={{ base: "column-reverse", md: "row" }}
              gap={"24px"}
              pb={"36px"}
              justifyContent={"space-between"}>
              <Box pl={'24px'} pt={"48px"}>
                <Heading {...css.title}>{t("From idea to form")}</Heading>
                <Text {...css.text}>
                  {t(
                    "ALSTAR: Inexhaustible design possibilities and simple processing."
                  )}
                </Text>
                <Link to={`/projects-hight`}>
                  <Text {...css.link}>{t("Learn More")}</Text>
                </Link>
              </Box>
              <Image {...css.image} src={CarouselTwo} alt="Company" />
            </Flex>
          </Box>
        </SwiperSlide>
        <div className="button-next-slide swiper-right next-button">
          <ChevronRightIcon fontSize={"34px"} />
        </div>
        <div className="button-prev-slide swiper-left next-button">
          <ChevronLeftIcon fontSize={"34px"} />
        </div>
      </Swiper>
    </Box>
  );
}

export default Company;

const css = {
  link: {
    backgroundColor: "#fff",
    color: "#111",
    padding: "8px 15px",
    fontWeight: "500",
    fontSize: "14px",
    transition: "0.3s all",
    borderRadius: "12px",
    width: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    _hover: {
      background: "#C22329",
      color: "#fff",
    },
  },
  image: {
    width: "650px",
    height: "300px",
    objectFit: "cover",
  },
  title: {
    fontSize: {
      base: "25px",
      md: "35px",
    },
    lineHeight: {
      base: "30px",
      md: "40px",
    },
    fontWeight: "200",
    marginBottom: "12px",
    color: "#fff",
  },
  text: {
    fontSize: "18px",
    color: "#fff",
    lineHeight: "26px",
    marginBottom: "24px",
  },
};
