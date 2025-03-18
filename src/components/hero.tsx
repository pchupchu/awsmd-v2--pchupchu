import Image from 'next/image';

import { HiOutlineArrowLongDown } from 'react-icons/hi2';

const Hero = () => {
  return (
    <section className='rounded-[15px] bg-fuchsia-300'>
      <div className='relative w-full overflow-hidden rounded-[15px]'>
        <video
          className='absolute h-full w-full object-cover object-center'
          src='/hero.mp4'
          loop
          muted
          playsInline
          autoPlay></video>
        <div className='container relative z-30 px-3 py-2 text-white'>
          <div className='mb-4 flex flex-col pt-28 font-accent text-5xl uppercase leading-[0.9]'>
            <h1>We create</h1>
            <span className='text-right font-accent_bold tracking-tighter'>
              <i className='pr-1'>a</i>wesome
            </span>
            <div className='font-accent_bold tracking-tighter'>design</div>
          </div>
          <div className='mb-5 flex items-center gap-4'>
            <button
              className='before:animate-btnPulse relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-black before:absolute before:left-1/2 before:top-1/2 before:block before:h-[105%] before:w-[105%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-[2px] before:border-white/50 before:content-[""]'
              type='button'>
              <HiOutlineArrowLongDown className='text-2xl' />
            </button>
            <div className='flex flex-1 flex-col items-end gap-[6px] text-xs'>
              <p>Scroll</p>
              <div className='h-[1px] w-full bg-white'></div>
              <p>Down</p>
            </div>
          </div>
          <a
            className='mb-5 flex items-center gap-[18px] py-[6px]'
            href='https://clutch.co/profile/awsmd'>
            <div className='flex items-center gap-2 rounded-[74px] bg-white py-[6px] pl-[6px] pr-3 text-black'>
              <svg
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.364 2.78249C14.1053 1.45389 12.5016 0.549101 10.7558 0.18254C9.00999 -0.18402 7.20039 0.0041113 5.55585 0.723143C3.91132 1.44218 2.50571 2.65981 1.51678 4.22208C0.527842 5.78435 5.80008e-07 7.62107 0 9.5C-5.80008e-07 11.3789 0.52784 13.2156 1.51677 14.7779C2.5057 16.3402 3.91131 17.5578 5.55585 18.2769C7.20038 18.9959 9.00998 19.184 10.7558 18.8175C12.5016 18.4509 14.1053 17.5461 15.364 16.2175L9 9.5L15.364 2.78249Z'
                  fill='black'
                />
                <ellipse
                  cx='9.00008'
                  cy='9.5'
                  rx='5.21053'
                  ry='5.5'
                  fill='white'
                />
                <ellipse
                  cx='8.99987'
                  cy='9.5'
                  rx='3.31579'
                  ry='3.5'
                  fill='#FF0000'
                />
              </svg>

              <div className='flex'>
                <svg
                  width='13'
                  height='12'
                  viewBox='0 0 13 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M5.76484 0.713039C6.04208 0.0670365 6.95792 0.0670371 7.23516 0.71304L8.33558 3.27718C8.45134 3.54693 8.70554 3.73162 8.99786 3.75836L11.7766 4.01255C12.4766 4.07659 12.7596 4.94762 12.2309 5.41091L10.1323 7.24983C9.91153 7.44329 9.81444 7.74211 9.87934 8.02839L10.4962 10.7496C10.6517 11.4352 9.91073 11.9735 9.30673 11.6139L6.90931 10.1862C6.6571 10.0361 6.3429 10.0361 6.09069 10.1862L3.69327 11.6139C3.08927 11.9735 2.34833 11.4352 2.50375 10.7496L3.12066 8.02839C3.18556 7.74211 3.08847 7.44329 2.86769 7.24983L0.769096 5.41091C0.240381 4.94762 0.523395 4.07659 1.22345 4.01255L4.00214 3.75836C4.29446 3.73162 4.54866 3.54693 4.66442 3.27718L5.76484 0.713039Z'
                    fill='#FFC149'
                  />
                </svg>
                <svg
                  width='13'
                  height='12'
                  viewBox='0 0 13 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M5.76484 0.713039C6.04208 0.0670365 6.95792 0.0670371 7.23516 0.71304L8.33558 3.27718C8.45134 3.54693 8.70554 3.73162 8.99786 3.75836L11.7766 4.01255C12.4766 4.07659 12.7596 4.94762 12.2309 5.41091L10.1323 7.24983C9.91153 7.44329 9.81444 7.74211 9.87934 8.02839L10.4962 10.7496C10.6517 11.4352 9.91073 11.9735 9.30673 11.6139L6.90931 10.1862C6.6571 10.0361 6.3429 10.0361 6.09069 10.1862L3.69327 11.6139C3.08927 11.9735 2.34833 11.4352 2.50375 10.7496L3.12066 8.02839C3.18556 7.74211 3.08847 7.44329 2.86769 7.24983L0.769096 5.41091C0.240381 4.94762 0.523395 4.07659 1.22345 4.01255L4.00214 3.75836C4.29446 3.73162 4.54866 3.54693 4.66442 3.27718L5.76484 0.713039Z'
                    fill='#FFC149'
                  />
                </svg>

                <svg
                  width='13'
                  height='12'
                  viewBox='0 0 13 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M5.76484 0.713039C6.04208 0.0670365 6.95792 0.0670371 7.23516 0.71304L8.33558 3.27718C8.45134 3.54693 8.70554 3.73162 8.99786 3.75836L11.7766 4.01255C12.4766 4.07659 12.7596 4.94762 12.2309 5.41091L10.1323 7.24983C9.91153 7.44329 9.81444 7.74211 9.87934 8.02839L10.4962 10.7496C10.6517 11.4352 9.91073 11.9735 9.30673 11.6139L6.90931 10.1862C6.6571 10.0361 6.3429 10.0361 6.09069 10.1862L3.69327 11.6139C3.08927 11.9735 2.34833 11.4352 2.50375 10.7496L3.12066 8.02839C3.18556 7.74211 3.08847 7.44329 2.86769 7.24983L0.769096 5.41091C0.240381 4.94762 0.523395 4.07659 1.22345 4.01255L4.00214 3.75836C4.29446 3.73162 4.54866 3.54693 4.66442 3.27718L5.76484 0.713039Z'
                    fill='#FFC149'
                  />
                </svg>

                <svg
                  width='13'
                  height='12'
                  viewBox='0 0 13 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M5.76484 0.713039C6.04208 0.0670365 6.95792 0.0670371 7.23516 0.71304L8.33558 3.27718C8.45134 3.54693 8.70554 3.73162 8.99786 3.75836L11.7766 4.01255C12.4766 4.07659 12.7596 4.94762 12.2309 5.41091L10.1323 7.24983C9.91153 7.44329 9.81444 7.74211 9.87934 8.02839L10.4962 10.7496C10.6517 11.4352 9.91073 11.9735 9.30673 11.6139L6.90931 10.1862C6.6571 10.0361 6.3429 10.0361 6.09069 10.1862L3.69327 11.6139C3.08927 11.9735 2.34833 11.4352 2.50375 10.7496L3.12066 8.02839C3.18556 7.74211 3.08847 7.44329 2.86769 7.24983L0.769096 5.41091C0.240381 4.94762 0.523395 4.07659 1.22345 4.01255L4.00214 3.75836C4.29446 3.73162 4.54866 3.54693 4.66442 3.27718L5.76484 0.713039Z'
                    fill='#FFC149'
                  />
                </svg>

                <svg
                  width='13'
                  height='12'
                  viewBox='0 0 13 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M5.76484 0.713039C6.04208 0.0670365 6.95792 0.0670371 7.23516 0.71304L8.33558 3.27718C8.45134 3.54693 8.70554 3.73162 8.99786 3.75836L11.7766 4.01255C12.4766 4.07659 12.7596 4.94762 12.2309 5.41091L10.1323 7.24983C9.91153 7.44329 9.81444 7.74211 9.87934 8.02839L10.4962 10.7496C10.6517 11.4352 9.91073 11.9735 9.30673 11.6139L6.90931 10.1862C6.6571 10.0361 6.3429 10.0361 6.09069 10.1862L3.69327 11.6139C3.08927 11.9735 2.34833 11.4352 2.50375 10.7496L3.12066 8.02839C3.18556 7.74211 3.08847 7.44329 2.86769 7.24983L0.769096 5.41091C0.240381 4.94762 0.523395 4.07659 1.22345 4.01255L4.00214 3.75836C4.29446 3.73162 4.54866 3.54693 4.66442 3.27718L5.76484 0.713039Z'
                    fill='#FFC149'
                  />
                </svg>
              </div>
              <p className='font-secondary text-xs font-bold tracking-tighter'>
                4.9
              </p>
            </div>
            <p className='overflow-hidden text-ellipsis text-nowrap text-sm font-medium'>
              Our Customers love to work with us, 37 Reviews
            </p>
          </a>
          <div className='relative w-[260px]'>
            <Image
              className='rounded-[20px]'
              src='/video-hero.jpg'
              width={260}
              height={153}
              alt='video'
            />
            <div className='absolute -right-10 top-10 z-10 bg-[url("/play-btn.png")] bg-center bg-no-repeat'>
              <Image
                className='animate-btnRotate'
                src='/click-to-play.png'
                width={83}
                height={83}
                alt='click'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
