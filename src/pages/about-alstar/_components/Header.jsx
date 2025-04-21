import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import CeoImage from '../../../assets/ceo1.jpg';
import { useTranslation } from 'react-i18next';

function Header() {
  const {t} = useTranslation()
  return (
    <>
      <Box {...css.box} className="about-image">
        <Box className="container">
          <Flex
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            justifyContent="space-between">
            <Box>
              <Heading {...css.title1}>{t('hello35')}</Heading>
              <Text {...css.text1}>{t('hello36')}</Text>
            </Box>
            <Image src={CeoImage} alt="CeoImage" {...css.image} />
          </Flex>
        </Box>
      </Box>
      {/* <Box {...css.box} className="about-image-one">
        <Box className="container">
          <Heading {...css.title}>{t('hello31')}</Heading>
          <Text {...css.text}>{t('hello32')}</Text>
        </Box>
      </Box>
      <Box {...css.box} className="about-image-two">
        <Box className="container">
          <Heading {...css.title}>{t('hello33')}</Heading>
          <Text {...css.text}>{t('hello34')}</Text>
        </Box>
      </Box> */}
    </>
  );
}

export default Header;

const css = {
  box: {
    padding: '50px 0'
  },
  title: {
    color: '#fff',
    background: '#000',
    display: 'inline-block',
    padding: '10px 15px',
    fontSize: { base: '20px', lg: '35px' },
    lineHeight: '40px',
    letterSpacing: '0.5px',
    fontWeight: 400,
    width: { base: '100%', lg: '700px', xl: '800px' },
    borderRadius: '6px'
  },
  text: {
    color: '#fff',
    background: 'gray',
    width: { base: '100%', lg: '700px', xl: '800px' },
    padding: '10px 15px',
    margin: '15px 0',
    fontSize: { base: '14px', lg: '16px' },
    lineHeight: { base: '20px', lg: '28px' },
    borderRadius: '6px'
  },
  image: {
    width: { base: '100%', lg: '520px', xl: '580px' },
    height: { base: '350px', lg: '520px', xl: '550px' },
    objectFit: 'cover',
    borderRadius: '12px'
  },
  title1: {
    fontSize: { base: '25px', lg: '35px' },
    lineHeight: { base: '30px', lg: '40px' },
    letterSpacing: '0.5px',
    color: '#111',
    fontWeight: 400,
    marginBottom: '20px',
    marginTop: { base: '20px', lg: 0 }
  },
  text1: {
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '0.6px',
    color: '#5F5E5E',
    fontWeight: 400,
    width: { base: '100%', lg: '700px' }
  }
};
