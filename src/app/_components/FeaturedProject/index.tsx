import Chip from '@/components/Chip';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import React from 'react';

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
    <div
      className={cn('@container relative overflow-hidden rounded-[48px]', {
        'col-span-12 aspect-square sm:col-span-6': col === 1,
        'col-span-12 aspect-[2/1]': col === 2,
      })}
    >
      <Image src={src} alt={alt ?? '프로젝트 이미지'} fill />

      <div className="absolute bottom-8 left-8 flex flex-wrap gap-2 @md:bottom-12 @md:left-12">
        <Chip /> <Chip />
        <Chip />
      </div>
    </div>
  );
};

const FeaturedProject = () => {
  return (
    <section className="flex flex-col items-center">
      <span className="text-center text-4xl font-bold whitespace-pre-line md:text-5xl">
        Featured Project
      </span>

      <div className="grid w-full grid-cols-12 gap-6 py-15">
        <ProjectCard src="/project/project1.png" col={1} />
        <ProjectCard src="/project/project2.png" col={1} />
        <ProjectCard src="/project/project3.png" col={1} />
        <ProjectCard src="/project/project4.png" col={1} />
        <ProjectCard src="/project/project5.png" col={2} />
      </div>

      <button
        type="button"
        className="w-full rounded-full border border-[#202020] py-4.5"
      >
        + View More
      </button>
    </section>
  );
};

export default FeaturedProject;
