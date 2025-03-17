import Link from 'next/link';

import { services } from '@/utils/data';

import Title from './title';

const Services = () => {
  return (
    <div className='container py-[60px]'>
      <div className='mb-10'>
        <Title number='01' title='Our services' />
        <p className='mt-6 text-2xl leading-tight tracking-tighter text-black/40'>
          As&nbsp;a&nbsp;tight-knit team of&nbsp;experts, we&nbsp;create
          memorable and emotional websites, digital experiences, and native
          apps.
        </p>
      </div>
      <ul className='flex flex-col gap-1'>
        {services.map((service, index) => {
          return (
            <li key={index}>
              <Link
                className='relative flex flex-col rounded-lg bg-cover bg-center bg-no-repeat p-6 text-white'
                style={{
                  backgroundColor: `${service.backgroundColor}`,
                  backgroundImage: `url(${service.imgSrc})`,
                }}
                href='#'>
                <h3 className='mb-24 font-secondary text-[33px] font-medium uppercase leading-tight tracking-tighter'>
                  {service.title}
                </h3>
                <p className='mb-5 font-secondary text-[14px] font-medium leading-tight tracking-tight'>
                  {service.description}
                </p>
                <div className='h-[1px] w-full bg-white'></div>
                <ul className='mt-3 flex flex-wrap gap-1'>
                  {service.stack.map((stack, index) => (
                    <li
                      className='rounded-[40px] bg-white/40 px-4 py-[2px] text-sm font-medium tracking-tight'
                      key={index}>
                      {stack}
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
