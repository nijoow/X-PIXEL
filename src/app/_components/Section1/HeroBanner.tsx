'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/project/banner01.png',
  '/project/banner02.png',
  '/project/banner03.png',
  '/project/banner04.png',
  '/project/banner05.png',
];

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[1440/560] w-full overflow-hidden rounded-[48px]">
      <Image src={images[index]} alt="About" fill objectFit="cover" />
    </div>
  );
};

export default HeroBanner;
