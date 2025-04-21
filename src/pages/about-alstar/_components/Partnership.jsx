import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

function Partnership() {
  return (
    <Box>
      <Box className="container-mix">
        <Heading {...css.title}>Partnerships</Heading>
        <SimpleGrid></SimpleGrid>
      </Box>
    </Box>
  );
}

export default Partnership;

const css = {
  title: {
    fontSize: '34px',
    lineHeight: '39px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '12px'
  }
};
