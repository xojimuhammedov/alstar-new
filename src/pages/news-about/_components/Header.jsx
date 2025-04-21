import { Box, Image } from '@chakra-ui/react';
import React from 'react';

function Header() {
  return (
    <Box position={'relative'}>
      <Image
        {...css.image}
        src={
          'https://www.alpolic.eu/uploads/media/fullsize-1920x/07/7-header_webnews_3840x537_neu_4.webp?v=6-0'
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
    objectFit: 'cover'
  }
};
