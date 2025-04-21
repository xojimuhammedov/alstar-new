import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Main() {
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>
        ALSTAR – the world`s first address for aluminium composite panels
        </Heading>
        <Text {...css.text}>
          ALSTAR – a brand of Mitsubishi Chemical Group – the world`s first address for
          high-quality aluminium composite panels for the complete range of building architecture,
          both in new and existing buildings. Production with state-of-the-art coil-coating
          technology takes place at 3 production sites under the strictest quality and environmental
          regulations. With more than 50 years of know-how and experience in the development and
          manufacture of aluminium composite panels for rear- ventilated building façades, we offer
          our customers both high-quality and individual solutions for sophisticated building
          envelopes. With an annual production volume of 10 - 12 million m2 worldwide, we are a
          global market leader in our industry. Our customers particularly appreciate the high
          manufacturing quality, our short delivery times and our professional product advice on all
          aspects of facade construction.
        </Text>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: '34px',
    lineHeight: '39px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '12px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    fontWeight: '200',
    color: '#111'
  }
};
