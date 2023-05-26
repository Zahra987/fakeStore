import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../card/Card'
export default function Slider() {
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={5}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
  </Swiper>
  )
}
