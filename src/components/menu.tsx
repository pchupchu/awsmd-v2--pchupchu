'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { links } from '@/utils/data';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='fixed right-5 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 before:absolute before:h-full before:w-full before:rounded-full before:bg-black/10'>
        <div className='z-50 flex h-[14px] w-[18px] flex-col items-center justify-between'>
          <span className='h-[2px] w-[10px] self-end rounded-full bg-white'></span>
          <span className='h-[2px] w-full rounded-full bg-white'></span>
          <span className='h-[2px] w-[10px] self-start rounded-full bg-white'></span>
        </div>
      </SheetTrigger>
      <SheetContent
        className='flex h-full flex-col border-none text-white'
        side={'bottom'}>
        <SheetHeader className='mb-9'>
          <Image
            src='/icons/logo-light.svg'
            width={35}
            height={30}
            alt='logo'
          />
          <SheetTitle className='sr-only'>Navigation</SheetTitle>
        </SheetHeader>
        <nav className='mb-[25px] flex flex-col gap-[10px]'>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className='flex font-secondary text-4xl font-medium capitalize leading-[1.2] tracking-tight transition-all'>
              <span>{link.title}</span>
              <sup className='translate-y-1/3 font-secondary text-xs font-semibold text-white/50'>
                {link.id}
              </sup>
            </Link>
          ))}
        </nav>
        <div className='flex items-end justify-between'>
          <div className='flex flex-col gap-[6px] font-secondary text-2xl font-medium leading-[1.2]'>
            <a href='https://wa.me/message/FD7L25CEVG5DL1' target='_blank'>
              WhatsApp
            </a>
            <a href='https://t.me/awsmd_design' target='_blank'>
              Telegram
            </a>
            <div className='mt-1 flex items-center gap-[6px]'>
              <a
                className='text-xs text-white/50 underline'
                href='mailto:info@awsmd.com'
                target='_blank'>
                info@awsmd.com
              </a>
              <button
                className='flex h-4 w-4 items-center justify-center rounded-full bg-white/60'
                type='button'>
                <svg
                  className='h-2 w-2 stroke-white'
                  viewBox='0 0 6 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M4.25 3.35V4.1C4.25 5.1 3.85 5.5 2.85 5.5H1.9C0.9 5.5 0.5 5.1 0.5 4.1V3.15C0.5 2.15 0.9 1.75 1.9 1.75H2.65'
                    data-stroke='true'
                    strokeWidth='0.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M4.24844 3.35H3.44844C2.84844 3.35 2.64844 3.15 2.64844 2.55V1.75L4.24844 3.35Z'
                    data-stroke='true'
                    strokeWidth='0.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M2.89844 0.5H3.89844'
                    data-stroke='true'
                    strokeWidth='0.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M1.75 1.25C1.75 0.835 2.085 0.5 2.5 0.5H3.155'
                    data-stroke='true'
                    strokeWidth='0.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M5.49937 2V3.5475C5.49937 3.935 5.18437 4.25 4.79688 4.25'
                    data-stroke='true'
                    strokeWidth='0.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                  <path
                    d='M5.5 2H4.75C4.1875 2 4 1.8125 4 1.25V0.5L5.5 2Z'
                    data-stroke='true'
                    strokeWidth='0.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <ul className='mb-3 flex gap-3'>
              <li>
                <a
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white/40'
                  href='https://www.designrush.com/agency/profile/awsmd'>
                  <Image
                    src='/icons/designrush.svg'
                    width={12}
                    height={19}
                    alt='designrush logo'
                  />
                </a>
              </li>
              <li>
                <a
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white/40'
                  href='https://dribbble.com/awsmd'>
                  <Image
                    src='/icons/dribbble.svg'
                    width={12}
                    height={12}
                    alt='dribbble logo'
                  />
                </a>
              </li>
              <li>
                <a
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white/40'
                  href='https://clutch.co/profile/awsmd'>
                  <Image
                    src='/icons/clutch.svg'
                    width={12}
                    height={13}
                    alt='designrush logo'
                  />
                </a>
              </li>
            </ul>
            <div className='flex items-end gap-2'>
              <svg
                width={30}
                height={32}
                viewBox='0 0 30 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0_974_242)'>
                  <path
                    d='M23.0075 22.6909C21.4075 24.1455 19.2257 25.0182 16.8984 25.0182C11.6621 25.0182 7.88026 21.2364 7.88026 16C7.88026 10.7636 11.6621 7.12727 16.8984 7.12727C19.2257 7.12727 21.4075 7.85455 23.0075 9.30909L24.1712 10.3273L29.1166 5.38182L27.8075 4.21818C25.0439 1.45455 21.1166 0 16.8984 0C7.58935 0 0.898438 6.69091 0.898438 15.8545C0.898438 25.0182 7.7348 32 16.8984 32C21.1166 32 25.0439 30.5455 27.953 27.7818L29.1166 26.6182L24.1712 21.6727L23.0075 22.6909Z'
                    fill='white'></path>
                  <path
                    d='M16.6045 21.3816C19.5768 21.3816 21.9863 18.972 21.9863 15.9997C21.9863 13.0274 19.5768 10.6179 16.6045 10.6179C13.6322 10.6179 11.2227 13.0274 11.2227 15.9997C11.2227 18.972 13.6322 21.3816 16.6045 21.3816Z'
                    fill='white'
                    fillOpacity='0.5'></path>
                </g>
                <defs>
                  <clipPath id='clip0_974_242'>
                    <rect
                      width='28.3636'
                      height='32'
                      fill='white'
                      transform='translate(0.898438)'></rect>
                  </clipPath>
                </defs>
              </svg>
              <div>
                <div className='mb-1 flex gap-[2px]'>
                  <svg
                    width='13'
                    height='12'
                    viewBox='0 0 13 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M5.76484 0.713039C6.04208 0.0670365 6.95792 0.0670371 7.23516 0.71304L8.33558 3.27718C8.45134 3.54693 8.70554 3.73162 8.99786 3.75836L11.7766 4.01255C12.4766 4.07659 12.7596 4.94762 12.2309 5.41091L10.1323 7.24983C9.91153 7.44329 9.81444 7.74211 9.87934 8.02839L10.4962 10.7496C10.6517 11.4352 9.91073 11.9735 9.30673 11.6139L6.90931 10.1862C6.6571 10.0361 6.3429 10.0361 6.09069 10.1862L3.69327 11.6139C3.08927 11.9735 2.34833 11.4352 2.50375 10.7496L3.12066 8.02839C3.18556 7.74211 3.08847 7.44329 2.86769 7.24983L0.769096 5.41091C0.240381 4.94762 0.523395 4.07659 1.22345 4.01255L4.00214 3.75836C4.29446 3.73162 4.54866 3.54693 4.66442 3.27718L5.76484 0.713039Z'
                      fill='#ffffff'
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
                      fill='#ffffff'
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
                      fill='#ffffff'
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
                      fill='#ffffff'
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
                      fill='#ffffff'
                    />
                  </svg>
                </div>
                <p className='font-secondary text-[11px] font-medium tracking-tight'>
                  Gold verified, 22 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Menu;
