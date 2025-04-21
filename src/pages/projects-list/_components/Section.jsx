import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, FILE_URL } from '../../../api';

import { useTranslation } from 'react-i18next';

function Section() {
  const { t, i18n } = useTranslation();
  const [project, setProject] = useState();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/news?limit=1000`)
      .then((res) => {
        setProject(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box p={'24px 0'}>
      <Box className="container-mix">
        <SimpleGrid gap={'24px'} columns={{ base: 1, md: 2, lg: 3 }}>
          {project?.map((item, index) => (
            <Box key={index}>
              <Image {...css.image} src={`${FILE_URL}/files/${item?.image}`} alt="DesignImage" />
              <Heading {...css.name}>{item[`name_${i18n?.language}`]}</Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  image: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
    height: '180px',
    objectFit: 'cover'
  },
  name: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    marginTop: '12px',
    fontWeight: '400'
  }
};
