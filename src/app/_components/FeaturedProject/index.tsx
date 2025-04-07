import React from 'react';
import ProjectCard from './ProjectCard';

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
