'use client';

import { fadeInAnimation } from '@/utils/animation';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Chip from '@/components/Chip';

const GridItem = ({ src, title }: { src: string; title: string }) => {
  return (
    <motion.div
      className="col-span-12 flex flex-col p-8 sm:col-span-6 sm:p-12 lg:col-span-4"
      {...fadeInAnimation}
    >
      <Image src={src} alt="UI/UX" width={88} height={88} />

      <div className="h-[3.75rem] sm:h-[4.75rem]" />

      <span className="text-[1.75rem] font-bold">{title}</span>

      <div className="h-8" />

      <div className="flex flex-wrap gap-2">
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </div>
    </motion.div>
  );
};

export default GridItem;
