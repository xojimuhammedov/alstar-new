import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({ products }) {
  const { i18n } = useTranslation();

  return (
    <Box className="header-product">
      <Box className="container">
        <Heading {...css.title}>{products?.[`name_${i18n?.language}`]}</Heading>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: '200',
    paddingTop: '25px',
    color: '#fff'
  }
};
