import Image from 'next/image';

import RunningLine from '@/components/running-line';

import ScreensList from './screens-list';

const Development = () => {
  return (
    <section className='bg-[#0D0F11]'>
      <div className='container relative pt-8 text-white'>
        <div className='mb-5 flex justify-between gap-4 uppercase leading-tight'>
          <h3 className='text-[32px]'>&#123;smart&#125; development</h3>
          <span className='font-secondary text-[44px] text-white/40'>**</span>
        </div>
        <p className='text-[14px] leading-4 tracking-tight text-white/85'>
          Making your business outstanding is&nbsp;a&nbsp;science.
          We&nbsp;take&nbsp;it (a) seriously and (b) creatively.
        </p>
      </div>
      <div className='relative left-1/2 h-[400px] w-[300px] -translate-x-1/2 text-white/5'>
        <Image
          className='absolute bottom-0 left-0 max-h-[274px]'
          src='/phones/black-phone.png'
          width={168}
          height={274}
          alt='dark phone'
        />
        <Image
          className='absolute bottom-0 right-0 max-h-[370px]'
          src='/phones/white-phone.png'
          width={190}
          height={310}
          alt='light phone'
        />
      </div>
      <RunningLine initialX='-100%' xDirection='0' textStyle='text-white/5' />
      <ScreensList />
    </section>
  );
};

export default Development;
