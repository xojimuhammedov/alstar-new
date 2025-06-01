import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { BASE_URL, FILE_URL } from "../api";
import { Link } from "react-router-dom";

import HeaderBanner from '../assets/header-banner.jpg'
import HeaderEnglish from '../assets/header-english.jpg'
import HeaderUzbek from '../assets/header-uzbek.jpg'
import HeaderRussian from '../assets/header-russian.jpg'

function Header() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects`)
      .then((res) => {
        const responseDataOne = res?.data?.data;
        setProjects(responseDataOne);
      })
      .catch((err) => console.log(err));
  }, []);

  const imageBanner = i18n?.language === "en" ? HeaderEnglish : i18n?.language === "ru" ? HeaderRussian : HeaderUzbek
  return (
    <Box className="header" position={"relative"}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        loop
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide className="header-desktop">
          <Box width={"100%"}>
            <Image
              {...css.image}
              src={HeaderBanner}
              alt="CarouselOne"
            />
          </Box>
        </SwiperSlide>
         <SwiperSlide className="header-mobile">
          <Box width={"100%"}>
            <Image
              {...css.images}
              src={imageBanner}
              alt="CarouselOne"
            />
          </Box>
        </SwiperSlide>
        {/* {projects?.map((item, index) => (
          <SwiperSlide key={index}>
            <Box width={"100%"}>
              <Image
                {...css.image}
                src={`${FILE_URL}/files/${item?.image}`}
                alt="CarouselOne"
              />
            </Box>
            <Box {...css.box}>
              <Heading {...css.title}>{item[`name_${i18n?.language}`]}</Heading>

              <Link to={`/product/${item?.id}`}>
                <Text {...css.link}>{t("Learn More")}</Text>
              </Link>
            </Box>
          </SwiperSlide>
        ))} */}
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

export default Header;

const css = {
  image: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    height: {
      base: "250px",
      md: "100%",
    },
    objectFit: "cover",
  },
  images:{
    height:"100%"
  },
  box: {
    position: "absolute",
    top: {
      base: "75px",
      md: "130px",
    },
    left: {
      base: "15px",
      md: "70px",
    },
    width: {
      base: "100%",
      md: "40%",
    },
  },
  title: {
    fontSize: {
      base: "25px",
      md: "30px",
    },
    lineHeight: {
      base: "30px",
      md: "35px",
    },
    fontWeight: "200",
    width: {
      base: "100%",
      md: "400px",
    },
    marginBottom: "24px",
    color: "#111",
  },
  text: {
    fontSize: "14px",
    color: "#5F5E5E",
    lineHeight: "22px",
    width: "480px",
    marginBottom: "24px",
  },
  link: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "500",
    fontSize: "16px",
    width: "175px",
    transition: "0.3s all",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    _hover: {
      background: "#C22329",
    },
  },
};
