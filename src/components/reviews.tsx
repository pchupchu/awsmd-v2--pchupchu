'use client';

import { useState } from 'react';

import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { reviews } from '@/utils/data';

import ReviewCard from './review-card';
import Title from './title';

const Reviews = () => {
  const [review, setReview] = useState(reviews[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setReview(reviews[currentIndex]);
  };

  return (
    <section id='#reviews' className='container pb-[30px] pt-10'>
      <Title number='06' title='What Our Clients Say' />
      <div className='mt-8 w-full'>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}>
          {reviews.map((review) => (
            <SwiperSlide className='w-full' key={review.id}>
              <div className='flex items-center justify-center' key={review.id}>
                <ReviewCard
                  reviews={reviews}
                  name={review.name}
                  profession={review.profession}
                  company={review.company}
                  description={review.description}
                  image={review.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Reviews;
