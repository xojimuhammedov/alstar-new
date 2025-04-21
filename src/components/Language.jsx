import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import UzbekImage from "../assets/uzbek.png";
import RussianImage from "../assets/russian.png";
import EnglishImage from "../assets/english.png";
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";

const languageData = [
  {
    id: 1,
    image: UzbekImage,
    value: "uz",
  },
  {
    id: 2,
    image: RussianImage,
    value: "ru",
  },
  {
    id: 3,
    image: EnglishImage,
    value: "en",
  },
];

function Language() {
  const { i18n } = useTranslation();

  const onChangeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const languageImage =
    i18n?.language === "uz"
      ? UzbekImage
      : i18n?.language === "ru"
      ? RussianImage
      : EnglishImage;

  const data = languageData?.filter((item) => item?.value != i18n.language);

  return (
    <>
      <Menu isLazy>
        <MenuButton>
          <Image
            className={"language-image"}
            src={languageImage}
            alt="Language"
          />
        </MenuButton>
        <MenuList ml={"-7px"} zIndex="999" {...css.menuItem}>
          {data?.map((item, index) => (
            <MenuItem key={index}>
              <Box onClick={() => onChangeLanguage(item.value)}>
                <Image
                  className={"language-image"}
                  src={item.image}
                  alt="English"
                />
              </Box>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default Language;

const css = {
  menuItem: {
    minWidth: "35px",
  },
};
