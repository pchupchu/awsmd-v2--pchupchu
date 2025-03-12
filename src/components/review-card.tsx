import Image from 'next/image';

import ReviewsControls from './reviews-controls';

interface ReviewCardProps {
  reviews: {
    id: number;
    name: string;
    profession: string;
    company: string;
    description: string;
    image: string;
  }[];
  name: string;
  profession: string;
  company: string;
  description: string;
  image: string;
}

const ReviewCard = ({
  reviews,
  name,
  profession,
  company,
  description,
  image,
}: ReviewCardProps) => {
  return (
    <div className='bg-[url(/icons/review.svg)] bg-[65px_auto] bg-left-top bg-no-repeat px-5'>
      <p className='border-b border-[#e5e5e5] pb-[27px] font-secondary text-[6.4vw] font-semibold leading-[1.2]'>
        {description}
      </p>
      <div className='flex items-center pt-[18px]'>
        <div className='flex items-center gap-[10px] sm:gap-4'>
          <div className='relative h-12 w-12'>
            <Image
              className='rounded-full object-cover'
              src={image}
              alt={name}
              fill
            />
          </div>
          <div className='min-w-14 max-w-min pr-2'>
            <h3 className='mb-2 text-[15px] font-semibold leading-[1.2] tracking-tight'>
              {name}
            </h3>
            <p className='text-[10px] leading-[1.2] tracking-tight text-[#7f7f7f]'>
              {profession}
            </p>
          </div>
        </div>
        <p className='ml-auto max-w-min text-[11px] leading-[1.2] tracking-tight text-[#7f7f7f]'>
          {company}
        </p>
        <ReviewsControls reviews={reviews} />
      </div>
    </div>
  );
};
export default ReviewCard;
