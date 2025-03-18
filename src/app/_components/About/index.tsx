import Image from 'next/image';
import React from 'react';
import Slider from './Slider';

const About = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-[7.5rem]">
      <div className="flex w-fit items-center gap-2 rounded-full border border-[#808080] px-5 py-2.5">
        <div className="flex size-4 items-center justify-center rounded-full bg-[#168FFF]/15">
          <div className="size-1.5 rounded-full bg-[#168FFF]" />
        </div>
        <span>Subscriptions to the Business Agency team, Xpixel</span>
      </div>

      <div className="h-6" />

      <span className="text-center text-[56px] font-bold whitespace-pre-line">
        {`어떤 비즈니스를 하고 싶으신가요? 
        지금 바로 만들어드립니다.`}
      </span>

      <div className="h-8" />

      <button
        type="button"
        className="cursor-pointer rounded-full px-6 py-4 text-sm dark:bg-white dark:text-black"
      >
        X PIXEL 시작하기
      </button>

      <div className="h-16" />

      <div className="relative aspect-[1440/560] w-full">
        <Image src="/hero-banner.png" alt="About" fill />
      </div>

      <div className="h-10" />

      <Slider />
    </div>
  );
};

export default About;
