'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/hero-banner.png',
  '/project/project1.png',
  '/project/project2.png',
  '/project/project3.png',
  '/project/project4.png',
  '/project/project5.png',
];

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[1440/560] w-full overflow-hidden rounded-[48px]">
      <Image src={images[index]} alt="About" fill objectFit="cover" />
    </div>
  );
};

export default HeroBanner;
