import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  return (
    <Box className="contact" {...css.header}>
      <Box className="container">
        <Heading {...css.title}>{t('nav7')}</Heading>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  header: {
    height: {
      base:"250px",
      md:'180px'
    }
  },
  title: {
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: '200',
    paddingTop: '25px',
    color: '#111',
    textTransform: 'uppercase'
  }
};
