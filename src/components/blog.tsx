'use client';

import { useState } from 'react';

import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { projects } from '@/utils/data';

import BlogCard from './blog-card';
import BlogControls from './blog-controls';

const latestProjects = projects.slice(-3);

const Blog = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <section className='container bg-[#0d0d0d] pb-10 pt-[30px] text-white'>
      <div className='relative flex flex-col'>
        <div className='mb-10 flex flex-col gap-3'>
          <h2 className='text-base font-medium capitalize text-[#999999]'>
            Our Portfolio
          </h2>
          <h3 className='font-secondary text-[33px] leading-[1.12] tracking-tight'>
            Latest Cases
          </h3>
        </div>
        <div className='w-full'>
          <Swiper
            className='mb-5'
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}>
            {latestProjects.map((project) => (
              <SwiperSlide className='w-full' key={project.id}>
                <div
                  className='flex items-center justify-center'
                  key={project.id}>
                  <BlogCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                  />
                </div>
              </SwiperSlide>
            ))}
            <BlogControls projects={latestProjects} />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
