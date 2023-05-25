import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Slider() {
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={5}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>suggestion 1</SwiperSlide>
    <SwiperSlide>suggestion 2</SwiperSlide>
    <SwiperSlide>suggestion 3</SwiperSlide>
    <SwiperSlide>suggestion 4</SwiperSlide>
    <SwiperSlide>suggestion 5</SwiperSlide>
    <SwiperSlide>suggestion 6</SwiperSlide>
    <SwiperSlide>suggestion 7</SwiperSlide>
    <SwiperSlide>suggestion 8</SwiperSlide>
    <SwiperSlide>suggestion 9</SwiperSlide>
  </Swiper>
  )
}
