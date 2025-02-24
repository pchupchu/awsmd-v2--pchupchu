import Link from 'next/link';

import Title from './title';

const services = [
  {
    title: 'Mobile app development',
    description:
      'Many years of expertise in mobile development allow us to design architecture and create bespoke native applications for Apple iOS and Google Android.',
    imgSrc: '/services/mobile.png',
    backgroundColor: '#E4E3DF',
    stack: ['Swift', 'React Native', 'FlutterJS', 'Kotlin'],
  },
  {
    title: 'Solid design solution',
    description:
      'We are driven by user-centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.',
    imgSrc: '/services/solutions.png',
    backgroundColor: '#F1AE86',
    stack: [
      'Figma',
      'Adobe AfterEffects',
      'Adobe Illustrator',
      'Blender',
      'Cinema 4D',
    ],
  },
  {
    title: 'Web development',
    description:
      'Our adaptive design components are built using perfectly structured and readable code. We make sure that the development solutions are well-optimized and work flawlessly across devices and browsers.',
    imgSrc: '/services/development.png',
    backgroundColor: '#90A6D0',
    stack: ['ReactJS', 'VueJS', 'NodeJS', 'Webflow'],
  },
];

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
                <h3 className='font-secondary mb-24 text-[33px] font-medium uppercase leading-tight tracking-tighter'>
                  {service.title}
                </h3>
                <p className='font-secondary mb-5 text-[14px] font-medium leading-tight tracking-tight'>
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
