'use client';

import Image from 'next/image';
import { Fragment } from 'react';

import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Uber',
    imgSrc: '/partners/uber.svg',
    width: 61,
    height: 22,
  },
  {
    name: 'Oracle',
    imgSrc: '/partners/oracle.svg',
    width: 126,
    height: 17,
  },
  {
    name: 'Gofundme',
    imgSrc: '/partners/gofundme.svg',
    width: 115,
    height: 35,
  },
  {
    name: 'Nutanix',
    imgSrc: '/partners/nutanix.svg',
    width: 120,
    height: 16,
  },
  {
    name: 'Upside',
    imgSrc: '/partners/upside.svg',
    width: 85,
    height: 31,
  },
  {
    name: 'Intel',
    imgSrc: '/partners/intel.svg',
    width: 61,
    height: 25,
  },
  {
    name: 'New balance',
    imgSrc: '/partners/new-balance.svg',
    width: 73,
    height: 41,
  },
  {
    name: 'Statefarm',
    imgSrc: '/partners/statefarm.svg',
    width: 116,
    height: 17,
  },
  {
    name: 'Crosslead',
    imgSrc: '/partners/crosslead.png',
    width: 113,
    height: 37,
  },
  {
    name: 'Voldis',
    imgSrc: '/partners/voldis.png',
    width: 100,
    height: 34,
  },
];

const Partners = () => {
  return (
    <div className='flex overflow-x-hidden'>
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          <motion.ul
            className='flex'
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
            {partners.map((partner) => (
              <li
                className='relative flex h-28 w-40 items-center justify-center border border-[#E9E9E9]'
                key={partner.name}>
                <Image
                  src={partner.imgSrc}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                />
              </li>
            ))}
          </motion.ul>
        </Fragment>
      ))}
    </div>
  );
};

export default Partners;
