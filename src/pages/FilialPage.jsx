import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Icon,
  Link,
  Flex,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const FilialPage = () => {
  const { t } = useTranslation();
  return (
    <Box p={"24px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("Filiallar")}</Heading>
        <Box
          bg="white"
          borderRadius="2xl"
          p={8}
          shadow="lg"
          border="1px solid"
          borderColor="gray.100"
        >
          <Flex flexDirection={{ base: "column", lg: "row" }} gap={{ base: "24px", lg: "48px" }}>
            <Box width={{ base: "100%", lg: "30%" }}>
              <Text fontSize="2xl" mb={4} fontWeight="semibold" color="blue.800">
                {t("Bosh ofis")}
              </Text>
              <VStack align="start" spacing={3} minW="250px">
                <HStack spacing={3}>
                  <Icon as={PhoneIcon} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Telefon nomer")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  <Text color="gray.600" fontSize="md">
                    +998 77 000 87 00
                  </Text>
                  <Text color="gray.600" fontSize="md">
                    +998 77 000 89 00
                  </Text>
                </VStack>
              </VStack>
              <VStack align="start" m={'12px 0'} spacing={3} minW="250px">
                <HStack spacing={3}>
                  <Icon as={MdLocationOn} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Manzil")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>

                  <Text color="gray.600" fontSize="md">
                    {t("Izza Ko'chasi 59, Тоshkent")},
                  </Text>
                </VStack>
              </VStack>
              <VStack align="start" m={'12px 0'} spacing={3} minW="250px">
                <HStack spacing={3}>
                  <Icon as={EmailIcon} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Elektron pochta manzili")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  <Text color="gray.600" fontSize="md">
                    info@alstar.uz
                  </Text>
                </VStack>
              </VStack>
            </Box>
            <YMaps>
              <Map defaultState={{ center: [47.112570, 51.903453], zoom: 18 }} className="yandex-map">
                <Placemark geometry={[47.112570, 51.903453]} />
              </Map>
            </YMaps>
          </Flex>
        </Box>

        <Box
          bg="white"
          borderRadius="2xl"
          p={8}
          shadow="lg"
          m={'16px 0'}
          border="1px solid"
          borderColor="gray.100"
        >
          <Flex flexDirection={{ base: "column", lg: "row" }} gap={{ base: "24px", lg: "48px" }}>
            <Box width={{ base: "100%", lg: "30%" }}>
              <Text fontSize="2xl" mb={4} fontWeight="semibold" color="blue.800">
                {t("Qozog'iston filiali")}
              </Text>
              <VStack align="start" spacing={3} minW="200px">
                <HStack spacing={3}>
                  <Icon as={PhoneIcon} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Telefon nomer")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  <Text color="gray.600" fontSize="md">
                    +998 77 000 87 00
                  </Text>
                  <Text color="gray.600" fontSize="md">
                    +998 77 000 89 00
                  </Text>
                </VStack>
              </VStack>
              <VStack align="start" m={'12px 0'} spacing={3} minW="250px">
                <HStack spacing={3}>
                  <Icon as={MdLocationOn} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Manzil")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  <Link href="https://yandex.uz/maps/-/CLSOeT15" target="_blank" color="gray.600" fontSize="md">
                    {t("Республика Казахстан, Туркестанская область, город Шымкент, 226 квартал")}
                  </Link>
                </VStack>
              </VStack>
              <VStack align="start" spacing={3} minW="250px">
                <HStack spacing={3}>
                  <Icon as={EmailIcon} color="blue.600" boxSize={5} />
                  <Text fontSize="lg" fontWeight="semibold" color="blue.800">
                    {t("Elektron pochta manzili")}
                  </Text>
                </HStack>
                <VStack align="start" spacing={1} pl={8}>
                  <Text color="gray.600" fontSize="md">
                    info@alstar.uz
                  </Text>
                </VStack>
              </VStack>
            </Box>
            <YMaps>
              <Map defaultState={{ center: [42.377354, 69.679343], zoom: 18 }} className="yandex-map">
                <Placemark geometry={[42.377354, 69.679343]} />
              </Map>
            </YMaps>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default FilialPage;

const css = {
  title: {
    fontSize: {
      base: "30px",
      sm: "45px",
    },
    lineHeight: {
      base: "40px",
    },
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#121D50",
    margin: "12px 0",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "26px",
  },
};