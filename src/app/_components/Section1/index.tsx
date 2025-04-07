import React from 'react';
import Slider from './Slider';
import HeroBanner from './HeroBanner';

const Section1 = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-fit items-center gap-2 rounded-full border border-[#808080] px-5 py-2.5">
        <div className="flex size-4 items-center justify-center rounded-full bg-[#168FFF]/15">
          <div className="size-1.5 rounded-full bg-[#168FFF]" />
        </div>
        <span className="text-xs md:text-base">
          Subscriptions to the Business Agency team, Xpixel
        </span>
      </div>

      <div className="h-6" />

      <span className="font-pretendard text-center text-[24px] font-bold whitespace-pre-line md:text-[42px] lg:text-[56px]">
        {`어떤 비즈니스를 하고 싶으신가요? 
        지금 바로 만들어드립니다.`}
      </span>

      <div className="h-8" />

      <button
        type="button"
        className="rounded-full bg-white px-6 py-4 text-sm text-black"
      >
        X PIXEL 시작하기
      </button>

      <div className="h-16" />

      <HeroBanner />

      <div className="h-10" />

      <Slider />
    </section>
  );
};

export default Section1;
