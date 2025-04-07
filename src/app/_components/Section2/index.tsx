import React from 'react';
import GridItem from './Griditem';

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

      <div className="grid grid-cols-12 divide-x divide-y divide-[#202020] overflow-hidden rounded-[40px] border border-[#202020]">
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
