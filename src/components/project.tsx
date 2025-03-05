import Image from 'next/image';

import { BsArrowUpRight } from 'react-icons/bs';

interface ProjectProps {
  key: number;
  title: string;
  description: string;
  image: string;
}

const Project = ({ key, title, description, image }: ProjectProps) => {
  return (
    <li key={key}>
      <a href='https://dribbble.com/awsmd' target='_blank' rel='noreferrer'>
        <div className='relative mb-[30px] min-h-[270px] w-full'>
          <Image
            className='rounded-[20px] object-cover'
            src={image}
            alt={title}
            fill
          />
          <div className='absolute right-[5px] top-[5px] flex h-10 w-10 items-center justify-center rounded-full bg-white'>
            <BsArrowUpRight />
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-[17px] font-bold leading-tight tracking-[-0.01em]'>
            {title}
          </h3>
          <p className='text-[14px] font-medium leading-[1.15] tracking-tighter text-[#8d8d8d]'>
            {description}
          </p>
        </div>
      </a>
    </li>
  );
};
export default Project;
