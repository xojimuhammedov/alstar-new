import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';
import { FILE_URL } from '../../../api';
import { useTranslation } from 'react-i18next';

function Header({ products }) {
  const { i18n } = useTranslation();
  return (
    <Box position={'relative'}>
      <Image src={`${FILE_URL}/files/${products?.image}`} alt="ProductBanner" />
      <Box className="container">
        <Box {...css.box}>
          <Heading {...css.title}>{products?.[`name_${i18n?.language}`]}</Heading>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    position: 'absolute',
    left: {
      base: '15px',
      md: '50px'
    },
    fontSize: {
      base: '25px',
      md: '34px'
    },
    lineHeight: {
      base: '30px',
      md: '39px'
    },
    fontWeight: '200',
    color: '#111',
    textTransform: 'uppercase'
  },
  box: {
    position: 'absolute',
    top: '50px',
    left: 0,
    width: {
      base: '100%',
      md: '45%'
    },
    height: '100%'
  }
};
