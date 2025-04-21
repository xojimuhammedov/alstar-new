import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { newsData } from '../../../api/data';
import { Link } from 'react-router-dom';

function Section() {
  const { t, i18n } = useTranslation();
  return (
    <Box p="24px 0">
      <Box className="container-mix">
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="20px">
          {newsData.map((item, index) => (
            <Box key={index} {...css.box}>
              <Image {...css.image} src={item.image} alt="News One Image" />
              <Box {...css.item}>
                <Heading {...css.subtitle} size="h4">
                  {item?.[`title_${i18n?.language}`]}
                </Heading>
                <Text {...css.text}>{item?.[`text_${i18n?.language}`]}</Text>
                <Link to={`/news-about/${item?.id}`}>{t('Learn More')}</Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  news: {
    padding: '30px 0'
  },
  title: {
    fontSize: '35px',
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: '40px',
    marginBottom: '30px',
    color: '#2E3A6B'
  },
  box: {
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 9px 18px 0 rgba(144,173,248,0.25)',
    background: '#fff',
    borderRadius: '8px'
  },
  item: {
    padding: '10px 15px',
    paddingBottom: '25px'
  },
  subtitle: {
    color: '#2E3A6B',
    fontSize: { xl: '20px', lg: '20px', md: '20px', sm: '16px', base: '16px' },
    lineHeight: '24px',
    letterSpacing: '0.2px',
    fontWeight: '600',
    marginBottom: '10px'
  },
  text: {
    fontSize: { xl: '14px', lg: '14px', md: '14px', sm: '12px', base: '14px' },
    lineHeight: '22px',
    letterSpacing: '0.2px',
    color: 'gray',
    opacity: '0.9',
    fontWeight: 400,
    marginBottom: '15px'
  },
  link: {
    color: '#C3242A',
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 400
  },
  image: {
    height: '250px',
    width: '100%',
    objectFit: 'cover'
  }
};
