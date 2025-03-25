import { projects } from '@/utils/data';

import Project from './project';
import Title from './title';

const Portfolio = () => {
  return (
    <section
      className='container flex flex-col items-center gap-[45px] pb-[55px] pt-[100px]'
      id='#portfolio'>
      <div className='flex flex-col gap-4'>
        <Title number='03' title='Our Portfolio' />
        <h3 className='font-secondary text-[33px] leading-[1.12] tracking-tight'>
          We don&apos;t do cookie-cutter solution
        </h3>
      </div>
      <ul className='mb-5 flex flex-col gap-[30px]'>
        {projects.map((project) => (
          <li key={project.id}>
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </li>
        ))}
      </ul>
      <a
        className='flex items-center gap-3 rounded-[40px] border border-[#242424] bg-[#242424] p-[15px] pr-8 text-base font-medium capitalize leading-tight tracking-tight text-white'
        href='https://dribbble.com/awsmd'
        target='_blank'
        rel='noreferrer'>
        <p>Check full portfolio</p>
        <span className='h-1 w-1 rounded-full bg-white'></span>
      </a>
    </section>
  );
};
export default Portfolio;
