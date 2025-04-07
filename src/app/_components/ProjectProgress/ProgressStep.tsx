'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '@/utils/animation';

const ProgressStep = ({
  src,
  index,
  title,
  description,
}: {
  src: string;
  index: number;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className="col-span-12 flex flex-col border-b border-[#202020] py-15 sm:col-span-6 lg:col-span-4"
      {...fadeInAnimation}
    >
      <div className="flex w-fit items-center gap-3 rounded-full bg-[#202020] p-2 pr-5.5 text-[#808080]">
        <Image src={src} alt="UI/UX" width={36} height={36} />
        <span>Step {index + 1}</span>
      </div>

      <div className="h-12" />

      <span className="text-[28px] font-bold">{title}</span>

      <div className="h-4" />

      <span className="text-[#808080]">{description}</span>
    </motion.div>
  );
};

export default ProgressStep;
