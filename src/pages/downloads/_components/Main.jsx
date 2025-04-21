import { Box, Heading, SimpleGrid, Text, Image, Link, Flex } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
// import FileAlstarOne from '@/assets/alstar1.pdf';

function Main() {
  const { t } = useTranslation();
  return (
    <Box p={'18px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('download.name')}</Heading>
        <Text {...css.text}>{t('download.text')}</Text>
        {/* <Flex justifyContent={'space-between'} align={'center'}>
          <Heading {...css.name}>ALSTARPRO № 1</Heading>
          <Link target="_blank" href="#">
            {t('Download')}
          </Link>
        </Flex> */}
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
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
    marginBottom: '24px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    marginBottom: '16px'
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%'
  },
  name: {
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: '500',
    color: '#111',
    margin: '8px 0'
  },
  link: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '8px 15px',
    fontWeight: '500',
    fontSize: '14px',
    transition: '0.3s all',
    borderRadius: '12px',

    _hover: {
      background: '#C22329'
    }
  }
};
