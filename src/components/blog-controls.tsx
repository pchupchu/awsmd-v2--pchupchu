import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

import { cn } from '@/lib/utils';

interface BlogControlsProps {
  projects: { id: number; title: string; description: string; image: string }[];
}

const BlogControls = ({ projects }: BlogControlsProps) => {
  const swiper = useSwiper();

  return (
    <div className='mt-11 flex items-center justify-center gap-11'>
      <button
        className='h-4 w-4'
        type='button'
        aria-label='previous project'
        onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold height={16} width={16} />
      </button>
      <ul className='flex items-center gap-[6px]'>
        {projects.map((_, index) => (
          <li
            key={index}
            className={cn(
              'h-1 w-8 rounded-[40px] bg-[#6a6a6a]',
              swiper.realIndex === index && 'bg-white'
            )}></li>
        ))}
      </ul>
      <button
        className='h-4 w-4'
        type='button'
        aria-label='next project'
        onClick={() => swiper.slideNext()}>
        <PiCaretRightBold height={16} width={16} />
      </button>
    </div>
  );
};

export default BlogControls;
