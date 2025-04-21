import { Box, Button, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Form() {
  const { t } = useTranslation();
  return (
    <Box {...css.form}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('Here you get all our attention')}</Heading>
        <Text {...css.text}>{t('contactText')}</Text>

        <Text m={'24px 0'} {...css.text}>
          {t('Do you have any questions or suggestions?')}
        </Text>
        <Text mb={'24px'} {...css.text}>
          {t('contactText1')}
        </Text>

        <form action="">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="24px">
            <label className="form-label" htmlFor="">
              {t('First name*')}
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              {t('Last name*')}
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              {t('Company*')}
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              {t('email*')}
              <Input {...css.input} type="email" />
            </label>
            <label className="form-label" htmlFor="">
              {t('Street')}
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              {t('Location / Town')}
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              {t('Country')}
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              {t('Phone number')}
              <Input {...css.input} type="text" />
            </label>
          </SimpleGrid>
          <Button type="submit" {...css.button}>
            {t('Submit')}
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Form;

const css = {
  form: {
    padding: '36px 0'
  },
  title: {
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '24px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    fontWeight: '200',
    color: '#111'
  },
  input: {
    padding: '8px 12px',
    outline: 'none'
  },
  button: {
    background: '#111',
    color: '#fff',
    height: '40px',
    width: '120px',
    fontSize: '16px',
    lineHeight: '25px',
    borderRadius: '6px',
    marginTop: '24px',
    cursor: 'pointer'
  }
};
