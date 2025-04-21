import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import axios from "axios";
import { BASE_URL, FILE_URL } from "../../../api";

import { useTranslation } from "react-i18next";
import AboutColor from "./AboutColor";

function Section() {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState();
  const [value, setValue] = React.useState(null);
  const [filterData, setFilterData] = useState();
  const [collection, setCollection] = useState();
  const [colorId, setColorId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/colours?limit=1000`)
      .then((res) => {
        setColor(res?.data?.data);
        setFilterData(
          res?.data?.data?.filter((item) => item?.collectionId === value),
        );
      })
      .catch((err) => console.log(err));
  }, [value]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/collections?limit=1000`)
      .then((res) => {
        setCollection(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box p={"24px 0"}>
      <Box className="container-mix">
        <Heading {...css.title}>{t("Colour Collections")}</Heading>
        <Accordion {...css.accordion} allowMultiple>
          <AccordionItem border={"0"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {t("Choose")}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column">
                  {collection?.map((item, index) => (
                    <Radio key={index} value={item.id}>
                      {item[`name_${i18n?.language}`]}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <SimpleGrid
          mt={"24px"}
          gap={"24px"}
          columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
        >
          {value ? (
            <>
              {filterData?.map((item, index) => (
                <Box key={index}>
                  <Image
                    onClick={() => {
                      onOpen(), setColorId(item?.id);
                    }}
                    {...css.image}
                    src={`${FILE_URL}/files/${item?.image}`}
                    alt="DesignImage"
                  />
                  <Heading {...css.name}>
                    {item[`name_${i18n?.language}`]}
                  </Heading>
                </Box>
              ))}
            </>
          ) : (
            <>
              {color?.map((item, index) => (
                <Box key={index}>
                  <Image
                    onClick={() => {
                      onOpen(), setColorId(item?.id);
                    }}
                    {...css.image}
                    src={`${FILE_URL}/files/${item?.image}`}
                    alt="DesignImage"
                  />
                  <Heading {...css.name}>
                    {item[`name_${i18n?.language}`]}
                  </Heading>
                </Box>
              ))}
            </>
          )}
        </SimpleGrid>
      </Box>

      <AboutColor colorId={colorId} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default Section;

const css = {
  image: {
    maxWidth: "100%",
    minWidth: "100%",
    width: "100%",
    height: "120px",
    cursor: "pointer",
  },
  name: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#111",
    marginTop: "12px",
    fontWeight: "400",
  },
  title: {
    fontSize: "18px",
    lineHeight: "25px",
    color: "#111",
    margin: "10px 0",
    fontWeight: "500",
  },
  accordion: {
    border: "2px solid #111",
    width: {
      base: "100%",
      sm: "400px",
    },
  },
};
