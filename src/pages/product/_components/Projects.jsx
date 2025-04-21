import { Box, Heading, Image, SimpleGrid, Text, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import axios from 'axios';
import { BASE_URL, FILE_URL } from '../../../api';

function Projects() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects`)
      .then((res) => {
        const responseDataOne = res?.data?.data;
        setProjects(responseDataOne);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>
          {t('Boost your performance with ALSTAR: discover the benefits!')}
        </Heading>
        <SimpleGrid mt={'24px'} gap="24px" columns={{ base: 1, md: 2, lg: 3 }}>
          {projects?.map((item, index) => (
            <Box key={index} width={'100%'}>
              <Image alt="Project" {...css.image} src={`${FILE_URL}/files/${item?.image}`} />
              <Heading {...css.name}>{item[`name_${i18n?.language}`]}</Heading>
              <Link href={`/product/${item?.id}`} {...css.link}>
                {t('Learn More')}
              </Link>
              {/* <Text {...css.text}>
              The special composition of the core material in combination with our unique fusion
              process makes ALSTAR composite panels so superior.
            </Text> */}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Projects;

const css = {
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: '210px',
    objectFit: 'cover'
  },
  title: {
    fontSize: {
      base: '25px',
      md: '32px'
    },
    lineHeight: {
      base: '30px',
      md: '39px'
    },
    fontWeight: '400',
    color: '#111'
  },
  name: {
    fontSize: '25px',
    lineHeight: '30px',
    fontWeight: '400',
    color: '#111',
    margin: '16px 0'
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '200',
    color: '#111'
  },
  link: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '8px 15px',
    fontWeight: '500',
    fontSize: '14px',
    transition: '0.3s all',

    _hover: {
      background: '#C22329'
    }
  }
};
