import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSwiper } from 'swiper/react';

import { cn } from '@/lib/utils';

interface ReviewsControlsProps {
  reviews: {
    id: number;
    name: string;
    description: string;
    profession: string;
    company: string;
    image: string;
  }[];
}

const ReviewsControls = ({ reviews }: ReviewsControlsProps) => {
  const swiper = useSwiper();

  return (
    <div className='xs:ml-6 xs:gap-5 ml-3 flex items-center justify-center gap-3 text-xl text-[#7f7f7f]'>
      <button
        className={cn('h-5 w-5', swiper.realIndex === 0 && 'opacity-50')}
        type='button'
        aria-label='previous review'
        onClick={() => swiper.slidePrev()}>
        <BsArrowLeft className='w-full' />
      </button>
      <button
        className={cn(
          'h-5 w-5',
          swiper.realIndex === reviews.length - 1 && 'opacity-50'
        )}
        type='button'
        aria-label='next review'
        onClick={() => swiper.slideNext()}>
        <BsArrowRight />
      </button>
    </div>
  );
};

export default ReviewsControls;
