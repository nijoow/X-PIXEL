'use client';
import React from 'react';
import Chip from '@/components/Chip';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '@/utils/animation';

const ProjectCard = ({
  src,
  alt,
  col,
}: {
  src: string;
  col: 1 | 2;
  alt?: string;
}) => {
  return (
    <motion.div
      className={cn('@container relative overflow-hidden rounded-[48px]', {
        'col-span-12 aspect-square sm:col-span-6': col === 1,
        'col-span-12 aspect-[2/1]': col === 2,
      })}
      {...fadeInAnimation}
    >
      <Image src={src} alt={alt ?? '프로젝트 이미지'} fill />

      <div className="absolute bottom-8 left-8 flex flex-wrap gap-2 @md:bottom-12 @md:left-12">
        <Chip /> <Chip />
        <Chip />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
