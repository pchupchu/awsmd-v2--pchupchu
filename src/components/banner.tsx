'use client';

import { Fragment } from 'react';

import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className='container pb-[75px] pt-[30px]'>
      <div className='relative flex min-h-[245px] items-center rounded-[30px] bg-[#f8f5f2] p-[10px] text-[#2b2d40]'>
        <div className='z-10 mx-auto flex flex-col items-center text-[8vw] font-medium leading-[1.1] tracking-tight'>
          <p>Numbers don&apos;t lie</p>
          <p className='flex items-center gap-2'>
            <span>so we use Data</span>
            <span className='inline-block h-[27px] w-[72px] rounded-[100px] bg-slate-400 bg-[url(/banner/texture-1.jpg)] bg-cover bg-no-repeat'></span>
          </p>
          <p className='flex items-center gap-2'>
            <span className='inline-block h-[27px] w-[72px] rounded-[100px] bg-slate-400 bg-[url(/banner/texture-2.jpg)] bg-cover bg-no-repeat'></span>
            <span>Science to drive</span>
          </p>
          <p className='text-[#6e8d9a]'>calculated growth</p>
        </div>
        <div className='absolute left-0 top-1/2 flex h-[18vw] w-full -translate-y-1/2 overflow-hidden'>
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0' }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
                <div className='mr-5 flex h-full w-full gap-5'>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Fragment key={i}>
                      <div className='h-full w-[10vw] min-w-10 rounded-lg border-2 border-[#d4d4d4]/[0.6]'></div>
                    </Fragment>
                  ))}
                </div>
              </motion.div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Banner;
