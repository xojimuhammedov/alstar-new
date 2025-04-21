import { galleryData } from '../../../api/data';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/styles.css';
import Share from 'yet-another-react-lightbox/plugins/share';

function Section() {
  const [open, setOpen] = React.useState(false);
  const [imageId, setImageId] = React.useState(0);
  const galleryAbout = galleryData?.find((item) => item?.id === Number(imageId));
  return (
    <Box pb={'24px'}>
      <Box className="container-mix">
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={'18px'}>
          {galleryData?.map((item, index) => (
            <Image
              onClick={() => {
                setImageId(item.id);
                setOpen(true);
              }}
              {...css.image}
              key={index}
              src={item?.image}
              alt="gallery"
            />
          ))}
        </SimpleGrid>
      </Box>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Fullscreen, Share]}
        slides={[
          {
            src: galleryAbout?.image
          }
        ]}
      />
    </Box>
  );
}

export default Section;

const css = {
  image: {
    width: '100%',
    height: {
      base: '100%',
      md: '380px'
    },
    objectFit: 'cover',
    cursor: 'pointer'
  }
};
