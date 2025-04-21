import { Box, Button, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Form() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
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
