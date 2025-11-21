import {
  Flex,
  Modal,
  ModalContent,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../api";
import { Link } from "react-router-dom";

function NavModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <>
      <button onClick={onOpen} className="modal-open-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="25"
          viewBox="0 0 27 25">
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M2.5 0h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5z"></path>
        </svg>
      </button>

      <Modal {...css.list} isOpen={isOpen} onClose={onClose}>
        <ModalContent {...css.box}>
          <button onClick={onClose} className="modal-close-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 14 14">
              <path
                fill="none"
                fill-rule="evenodd"
                stroke="#FFFFFF"
                stroke-width="2.8"
                d="M7 7L1 1l6 6 6-6-6 6zm0 0l-6 6 6-6 6 6-6-6z"></path>
            </svg>
          </button>
          <Flex mt="50px" gap="25px" flexDirection="column">
            <Link to="/about-alstar">
              <Text {...css.link}>{t("nav1")}</Text>
            </Link>
            <Link to="/career">
              <Text {...css.link}>{t("nav2")}</Text>
            </Link>
            <Link to="/contact">
              <Text {...css.link}>{t("nav3")}</Text>
            </Link>
            <Link to="/branch">
              <Text {...css.link}>{t("branch")}</Text>
            </Link>
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
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavModal;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontWeight: "400",
    color: "#fff",
  },
  box: {
    background: "#111",
    height: "100vh !important",
    width: "100%",
    top: "-65px",
    right: 0,
    padding: "20px 0 0 40px",
    position: "fixed",
  },
  list: {
    right: 0,
  },
};
