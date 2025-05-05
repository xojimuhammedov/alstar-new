import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function Form() {
  const { t } = useTranslation();

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }
  function changeCountry(item) {
    setCountry(item);
  }
  function changeLocation(item) {
    setLocation(item);
  }
  function changeEmail(item) {
    setEmail(item);
  }

  const handleClear = () => {
    setNameValue("");
    setNumberValue("");
    setTextValue("");
    setCountry("");
    setLocation("");
    setEmail("");
  };
  let bot = {
    TOKEN: "8079582965:AAHnzaDrrD3kW-sSM_PxELulc-gj83rPmLg",
    chatID: "-1002560271570",
    message: `
          Здравствуйте, для вас новые новости!
          Имя 👤: ${nameValue}; 
          Номер телефона ☎: ${numberValue};
          Почта: ${email};
          Состояние: ${country};
          Город: ${location};
          Сообщение: ${textValue};
          `,
  };

  const encodedMessage = encodeURIComponent(bot.message);

  function sendMessage(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
      {
        method: "GET",
      }
    ).then(
      () => {
        handleClear();
        // window.location.reload();
        toast.success(t("Ваше сообщение успешно отправлено!"));
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <Box pb={{ base: "36px" }}>
      <Box {...css.form} className="container">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={{
            base: "36px",
            lg: "84px",
          }}>
          <Box>
            <Heading {...css.title}>{t("Here you get all our attention")}</Heading>
            <input
              className="form-input"
              value={nameValue}
              onChange={(e) => changeName(e.target.value)}
              type="text"
              placeholder={t("First name*")}
            />
            <input
              className="form-input"
              value={country}
              onChange={(e) => changeCountry(e.target.value)}
              type="text"
              placeholder={t("Last name*")}
            />
            <input
              value={location}
              onChange={(e) => changeLocation(e.target.value)}
              className="form-input"
              type="text"
              placeholder={t("Company*")}
            />
            <input
              className="form-input"
              value={email}
              onChange={(e) => changeEmail(e.target.value)}
              type="email"
              placeholder={t("email*")}
            />
            <input
              className="form-input"
              value={numberValue}
              onChange={(e) => changeNumber(e.target.value)}
              type="tell"
              placeholder={t("Phone number")}
            />
            <Button type="submit" onClick={sendMessage} {...css.button}>
              {t("Submit")}
            </Button>
          </Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.4067209538903!2d69.14643347597071!3d41.278251871313934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89ab90079343%3A0x83f0d6b947ce3de2!2sIzza%20Ko&#39;chasi%2059%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1746425542781!5m2!1sen!2s"
            className="form-map"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Flex>
      </Box>
    </Box>
  );
}

export default Form;

const css = {
  form: {
    background: "#F6F6F6",
    borderRadius: "10px",
    padding: {
      base: "10px",
      lg: "40px",
    },
  },
  button: {
    background: "#0563AB",
    borderRadius: "18px",
    color: "white",
    height: "45px",
    border: "2px solid #0563AB",
    width: "100%",
    lineHeight: "normal",
    fontFamily: "sans-serif",
    marginTop: "25px",

    _hover: {
      background: "#0563AB",
    },
  },
  title: {
    fontSize: {
      base: "35px",
      lg: "46px",
    },
    lineHeight: "normal",
    letterSpacing: "0.46px",
    color: "#000000",
    fontWeight: "600",
  },
  text: {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000000",
    fontWeight: "400",
    letterSpacing: "0.14px",
  },
};

