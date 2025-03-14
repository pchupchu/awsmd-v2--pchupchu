import Link from 'next/link';

import { HiArrowRight } from 'react-icons/hi';

import Logo from './logo';

const Footer = () => {
  return (
    <footer className='relative bg-[#c9d0d5] pb-[18px] pt-[68px] text-black'>
      <div className='absolute left-0 top-0 z-10 h-7 w-full rounded-b-[20px] bg-white'></div>
      <div className='container'>
        <Logo
          imageSrc='/icons/logo-dark.svg'
          linkStyles='mb-10'
          textStyles='text-black'
        />
        <p className='mb-[22px] text-[7.7vw] font-semibold leading-none'>
          We would love to hear from you.
        </p>
        <button
          className='mb-11 flex w-full items-center justify-center gap-3 rounded-[40px] bg-white px-[30px] py-3 text-base font-medium leading-tight tracking-tight text-black'
          type='button'>
          <p>Become a Client</p>
          <span className='h-4 w-4'>
            <HiArrowRight />
          </span>
        </button>
        <nav className='mb-[38px] flex gap-4 -tracking-[-0.01em]'>
          <div>
            <h3 className='mb-5 text-lg font-semibold leading-tight'>
              Contact us
            </h3>
            <ul className='flex flex-col gap-[14px] text-sm text-[#64686a]'>
              <li>
                <p>Our Email</p>
                <a className='underline' href='mailto:info@awsmd.com'>
                  info@awsmd.com
                </a>
              </li>
              <li>
                <p>Our Phone</p>
                <a href='tel:+1 (628) 800-7709'>+1 (628) 800-77-09</a>
              </li>
              <li>
                <p>San Francisco, CA 2 Embarcadero Center, 8 floor, 94111</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-5 text-lg font-semibold leading-tight'>
              Services
            </h3>
            <ul className='flex flex-col gap-[14px] text-sm text-[#64686a]'>
              <li>
                <Link href='#about'>About</Link>
              </li>
              <li>
                <Link href='#development'>Development</Link>
              </li>
              <li>
                <Link href='#blog'>Blog</Link>
              </li>
              <li>
                <Link href='#reviews'>Reviews</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='flex items-center gap-1 border-t border-t-[#a5a9ac] pt-4 tracking-tight'>
          <p className='text-xs text-[#64686a]'>
            &copy; 2025. All rights reserved.
          </p>
          <span className='h-1 w-1 rounded-full bg-black'></span>
          <Link
            className='border-b border-b-black pb-[3px] text-sm font-medium capitalize text-black'
            href='/'>
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
