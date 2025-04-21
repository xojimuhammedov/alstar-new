import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import BannerOne from '../../../assets/service-banner.webp';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  return (
    <Box position={'relative'}>
      <Image {...css.image} src={BannerOne} alt="BannerOne" />
      <Box className="container">
        <Box {...css.box}>
          <Heading {...css.title}>{t('nav8')}</Heading>
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
      base: '20px',
      md: '50px'
    },
    fontSize: {
      base: '25px',
      md: '35px'
    },
    lineHeight: {
      base: '30px',
      md: '40px'
    },
    fontWeight: '200',
    color: '#111',
    textTransform: 'uppercase'
  },
  box: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: {
      base: '100%',
      md: '45%'
    },
    height: '100%',
    background: 'linear-gradient(-60deg, transparent 140px, rgba(255,255,255,0.85) 0) bottom right',
    textAlign: 'left',
    padding: '24px'
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: '200px',
    objectFit:"cover"
  }
};
