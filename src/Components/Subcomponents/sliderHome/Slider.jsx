import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../card/Card'
import { useDispatch, useSelector } from 'react-redux';
import {loadSuggestionsProducts} from '../../../redux/reqFunctions'

export default function Slider() {

  const dispatch= useDispatch();
  const suggestonsProducts= useSelector((state) => state.suggestionsProductsReducer);
 
  useEffect(() => {
    dispatch(loadSuggestionsProducts())
  },[])

  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={5}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {suggestonsProducts.map((item,i) => 
      <SwiperSlide><Card product={item} key={i} /></SwiperSlide>
    )}
    </Swiper>
  )
}
