import React, { useState, useEffect } from "react";

import axios from "axios";
import { BASE_URL, FILE_URL } from "../../../api";

import { useTranslation } from "react-i18next";
import { LinkIcon } from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

function AboutColor({ isOpen, onClose, colorId }) {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState();
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/colours?limit=1000`)
      .then((res) => {
        setColor(res?.data?.data.find((item) => item?.id === colorId));
      })
      .catch((err) => console.log(err));
  }, [colorId]);

  const copyUrlToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setCopy(true);
  };

  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Image
            {...css.image}
            src={`${FILE_URL}/files/${color?.image}`}
            alt="CarouselOne"
          />
          <Text {...css.text}>Colour: {color?.[`name_${i18n?.language}`]}</Text>
        </ModalBody>
        <ModalFooter>
          <Button {...css.button} mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={copyUrlToClipboard}
            {...css.button}
            leftIcon={<LinkIcon />}
            variant="solid"
          >
            {copy ? t("Copied link") : t("Copy link")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AboutColor;

const css = {
  image: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    marginTop: "36px",
    height: "350px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
    marginTop: "16px",
  },
  button: {
    background: "#111",
    color: "#fff",

    _hover: {
      background: "#111",
      color: "#fff",
    },
  },
};
