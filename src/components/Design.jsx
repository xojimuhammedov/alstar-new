import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { BASE_URL, FILE_URL } from '../api';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Design() {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/colours?limit=1000`)
      .then((res) => {
        setColor(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('color.name')}</Heading>
        <Text {...css.text}>{t('color.text')}</Text>
        <SimpleGrid gap={'24px'} columns={{ base: 1, sm: 2, md: 3, xl: 4 }}>
          {color?.slice(5, 9)?.map((item, index) => (
            <Box key={index}>
              <Image {...css.image} src={`${FILE_URL}/files/${item?.image}`} alt="DesignImage" />
              <Heading {...css.name}>{item[`name_${i18n?.language}`]}</Heading>
            </Box>
          ))}
        </SimpleGrid>

        <Flex mt="24px" justifyContent={'center'}>
          <Link to={'/colour'}>
            <Text {...css.link}>
              {t('Learn More')}
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Design;

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
    fontWeight: '400',
    color: '#111',
    textAlign: 'center',
    marginBottom: '24px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    textAlign: 'center',
    marginBottom: '24px'
  },
  image: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%'
  },
  name: {
    fontSize: '18px',
    lineHeight: '25px',
    color: '#111',
    marginTop: '12px',
    fontWeight: '500'
  },
  link: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '10px 20px',
    fontWeight: '500',
    fontSize: '16px',
    transition: '0.3s all',

    _hover: {
      background: '#C22329'
    }
  }
};
