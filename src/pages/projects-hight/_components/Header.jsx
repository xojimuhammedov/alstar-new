import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import ImageFour from '../../../assets/image2.jpg';

function Header() {
  return (
    <Box position={'relative'}>
      <Image {...css.image} src={ImageFour} alt="BannerOne" />
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
    objectFit:"cover"
  }
};
