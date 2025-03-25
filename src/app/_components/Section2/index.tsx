import React from 'react';
import Image from 'next/image';
import Chip from '../../../components/Chip';

const GridItem = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="col-span-12 flex flex-col p-8 sm:col-span-6 sm:p-12 lg:col-span-4">
      <Image src={src} alt="UI/UX" width={88} height={88} />

      <div className="h-[3.75rem] sm:h-[4.75rem]" />

      <span className="text-[1.75rem] font-bold">{title}</span>

      <div className="h-8" />

      <div className="flex flex-wrap gap-2">
        <Chip />
        <Chip />
        <Chip /> <Chip />
        <Chip />
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <section className="flex flex-col items-center">
      <span className="text-center text-3xl font-bold whitespace-pre-line lg:text-5xl">
        Xpixel 모두 다 합니다.
      </span>
      <div className="h-6" />
      <span className="text-center text-lg break-keep whitespace-pre-line">
        비즈니스&nbsp;수요&nbsp;검증부터
        비즈니스&nbsp;설계&nbsp;&&nbsp;디자인&nbsp;&&nbsp;마케팅까지
        전문가로&nbsp;구성된&nbsp;팀을&nbsp;구독하세요.
      </span>

      <div className="h-15" />

      <div className="grid grid-cols-12 rounded-[40px] border-t border-l border-[#202020] [&>div]:border-r [&>div]:border-b [&>div]:border-[#202020]">
        <GridItem src="/ui-ux__dark.svg" title="UI/UX" />
        <GridItem src="/branding__dark.svg" title="Branding" />
        <GridItem src="/contents__dark.svg" title="Contents" />
        <GridItem src="/product-manager__dark.svg" title="Product Manager" />
        <GridItem src="/marketing__dark.svg" title="Marketing" />
        <GridItem src="/no-code__dark.svg" title="No-Code" />
      </div>
    </section>
  );
};

export default Section2;
