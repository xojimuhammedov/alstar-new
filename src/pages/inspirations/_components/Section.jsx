import { Box, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageFour from '../../../assets/image2.jpg';

import ImageThree from '../../../assets/image1.jpg';

function Section() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <SimpleGrid gap={'36px'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Image {...css.image} alt="Project One" src={ImageThree} />
            <Heading {...css.title}>{t('Projects')}</Heading>
            <Text {...css.text}>
              {t('Embark on a journey around the globe and discover the variety of ALSTAR.')}
            </Text>
            <Link href="/projects-list" {...css.link}>
              {t('Learn More')}
            </Link>
          </Box>
          <Box>
            <Image {...css.image} alt="Project One" src={ImageFour} />
            <Heading {...css.title}>{t('nav6')}</Heading>
            <Text {...css.text}>
              {t(
                'Discover architectural highlights that captivate with extraordinary colours, shapes or finishes.'
              )}
            </Text>
            <Link href="/projects-hight" {...css.link}>
              {t('Learn More')}
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: '270px',
    objectFit: 'cover'
  },
  title: {
    fontSize: '25px',
    lineHeight: '30px',
    fontWeight: '200',
    color: '#111',
    margin: '8px 0'
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '16px'
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
