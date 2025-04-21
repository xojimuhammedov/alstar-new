import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading
          {...css.title}
          dangerouslySetInnerHTML={{
            __html: t('company.name')
          }}
        />
        <Text {...css.text}>{t('company.text')}</Text>
      </Box>
    </Box>
  );
}

export default About;

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
    marginBottom: '12px',
    textAlign: 'center'
  }
};
