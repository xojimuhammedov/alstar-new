import { Box, Flex, Heading, Image, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { BASE_URL, FILE_URL } from '../api';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Design() {
  const { t, i18n } = useTranslation();
  const [filterData, setFilterData] = useState();
  const [collection, setCollection] = useState();
  const [value, setValue] = useState('78ea0bfc-1ce6-41c3-a9b0-a9c5aab4114c')

  useEffect(() => {
    axios
      .get(`${BASE_URL}/colours?limit=1000`)
      .then((res) => {
        setFilterData(
          res?.data?.data?.filter((item) => item?.collectionId === value),
        );
      })
      .catch((err) => console.log(err));
  }, [value]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/collections?limit=1000`)
      .then((res) => {
        setCollection(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('color.name')}</Heading>
        <Text className='color-text' {...css.text}>{t('color.text')}</Text>

        <Flex flexWrap={'wrap'} gap={'12px'}>
          {collection?.map((item, index) => (
            <Box {...css.button} onClick={() => setValue(item?.id)} key={index} value={item.id}>
              {item[`name_${i18n?.language}`]}
            </Box>
          ))}
        </Flex>

        <SimpleGrid
          mt={"24px"}
          gap={"24px"}
          columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
        >
          {filterData?.map((item, index) => (
            <Box key={index}>
              <Image
                {...css.image}
                src={`${FILE_URL}/files/${item?.image}`}
                alt="DesignImage"
              />
              <Heading {...css.name}>
                {item[`name_${i18n?.language}`]}
              </Heading>
            </Box>
          ))}
          {/* {value ? (
                  <>
                    {filterData?.map((item, index) => (
                      <Box key={index}>
                        <Image
                          {...css.image}
                          src={`${FILE_URL}/files/${item?.image}`}
                          alt="DesignImage"
                        />
                        <Heading {...css.name}>
                          {item[`name_${i18n?.language}`]}
                        </Heading>
                      </Box>
                    ))}
                  </>
                ) : (
                  <>
                    {color?.map((item, index) => (
                      <Box key={index}>
                        <Image
                          onClick={() => {
                            onOpen(), setColorId(item?.id);
                          }}
                          {...css.image}
                          src={`${FILE_URL}/files/${item?.image}`}
                          alt="DesignImage"
                        />
                        <Heading {...css.name}>
                          {item[`name_${i18n?.language}`]}
                        </Heading>
                      </Box>
                    ))}
                  </>
                )} */}
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
    fontSize: {
      base: "14px",
      lg: '16px'
    },
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
  },
  button: {
    backgroundColor: "#C22329",
    color: "white",
    padding: "8px 12px",
    borderRadius: "12px",
    textTransform: "uppercase",
    cursor: "pointer"
  }
};
