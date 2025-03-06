'use client';

import { Fragment } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface RunningLineProps {
  xDirection: string;
  textStyle: string;
  initialX: string;
}

const RunningLine = ({ xDirection, textStyle, initialX }: RunningLineProps) => {
  return (
    <div className='flex overflow-x-hidden'>
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          <motion.div
            className='flex'
            initial={{ x: initialX }}
            animate={{ x: xDirection }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
            <p
              className={cn(
                'text-nowrap px-4 text-[93px] font-medium',
                textStyle
              )}>
              Data driven user focused value based
            </p>
          </motion.div>
        </Fragment>
      ))}
    </div>
  );
};

export default RunningLine;
