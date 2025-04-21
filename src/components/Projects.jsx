import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Navigation } from 'swiper/modules';

import ImageOne from '../assets/image1.jpg';
import ImageTwo from '../assets/image2.jpg';
import ImageThree from '../assets/image3.jpg';
import ImageFour from '../assets/image4.jpg';
import ImageFive from '../assets/image5.jpg';
import ImageSix from '../assets/image6.jpg';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Heading {...css.title}>{t('All over the country: Our References')}</Heading>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide'
        }}
        loop
        watchSlidesProgress={true}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        slidesPerView={3}
        className="mySwiper">
        <SwiperSlide>
          <Image {...css.image} src={ImageOne} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image {...css.image} src={ImageTwo} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image {...css.image} src={ImageThree} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image {...css.image} src={ImageFour} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image {...css.image} src={ImageSix} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageFive} alt="CarouselOne" {...css.image} />
        </SwiperSlide>
        <div className="button-next-slide swiper-right next-button">
          <ChevronRightIcon fontSize={'34px'} />
        </div>
        <div className="button-prev-slide swiper-left next-button">
          <ChevronLeftIcon fontSize={'34px'} />
        </div>
      </Swiper>
    </Box>
  );
}

export default Projects;

const css = {
  image: {
    height: '250px',
    objectFit: 'cover',
    width: '100%'
  },
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
  }
};
