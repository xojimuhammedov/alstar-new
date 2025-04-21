import { Box, Image } from '@chakra-ui/react';
import React from 'react';

function Header() {
  return (
    <Box position={'relative'}>
      <Image
        {...css.image}
        src={
          'https://www.alpolic.eu/uploads/media/fullsize-1920x/06/36-header_projekte_3840x537.webp?v=2-0'
        }
        alt="BannerOne"
      />
    </Box>
  );
}

export default Header;

const css = {
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: '200px',
    objectFit: 'cover',
  }
};
