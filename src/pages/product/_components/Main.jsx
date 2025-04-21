import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Main({ products }) {
  const { i18n } = useTranslation();
  return (
    <Box className='main-products' p="36px 0">
      <Box className="container-mix">
        <Text
          {...css.text}
          dangerouslySetInnerHTML={{
            __html: products?.[`description_${i18n?.language}`]
          }}
        />
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '400',
    color: '#111'
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '200',
    color: '#111',
    margin: '12px 0'
  }
};
