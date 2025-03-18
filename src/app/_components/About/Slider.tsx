'use client';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderContent = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <div className="size-14 rounded-full bg-white"></div>
        <div className="flex flex-col">
          <span className="text-lg font-bold">알고크라시</span>
          <span className="text-sm text-[#808080]">CEO</span>
        </div>
      </div>

      <div className="h-8" />

      <span className="text-2xl font-bold">
        stellar job on our new website.
      </span>

      <div className="h-5" />

      <span>
        “Two Hands did an absolutely stellar job on our new website. Everything
        was on point and better than our team expected. “Two Hands did
        an absolutely stellar job on our new website. Everything was on point
        and better than our team expected.”
      </span>
    </div>
  );
};

const PrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#202020]"
      onClick={() => swiper.slidePrev()}
    >
      <Image src="arrow-left.svg" alt="Previous" width={24} height={24} />
    </button>
  );
};

const NextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#202020]"
      onClick={() => swiper.slideNext()}
    >
      <Image src="arrow-right.svg" alt="Next" width={24} height={24} />
    </button>
  );
};

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={64}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => {
          console.log(swiper);
        }}
        loop={true}
        className="flex h-fit w-full flex-col"
      >
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>

        <div className="h-8" />
        <div className="ml-auto flex w-fit justify-between gap-3">
          <PrevButton />
          <NextButton />
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
