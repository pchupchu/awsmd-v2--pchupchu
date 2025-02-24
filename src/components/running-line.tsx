'use client';

import { Fragment } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface RunningLineProps {
  xDirection: string;
  textStyle: string;
}

const RunningLine = ({ xDirection, textStyle }: RunningLineProps) => {
  return (
    <div className='overflow-x-hidden'>
      <motion.div
        className='flex'
        initial={{ x: 0 }}
        animate={{ x: xDirection }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}>
        {Array.from({ length: 2 }).map((_, i) => (
          <Fragment key={i}>
            <p
              className={cn(
                'text-nowrap px-4 text-[93px] font-medium',
                textStyle
              )}>
              Data driven user focused value based
            </p>
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default RunningLine;
