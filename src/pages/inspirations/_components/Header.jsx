import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import BannerOne from '../../../assets/banner1.webp';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  return (
    <Box position={'relative'}>
      <Image {...css.image} src={BannerOne} alt="BannerOne" />
      <Box className="container">
        <Box {...css.box}>
          <Heading {...css.title}>{t('nav6')}</Heading>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    position: 'absolute',
    left: '50px',
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: '200',
    color: '#111',
    textTransform: 'uppercase'
  },
  box: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '45%',
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
