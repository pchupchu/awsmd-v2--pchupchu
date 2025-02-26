import Image from 'next/image';

import ScreensRow from './screens-row';

const screens = [
  {
    id: '1',
    src: '/phones/phone1.png',
  },
  {
    id: '2',
    src: '/phones/phone2.png',
  },
  {
    id: '3',
    src: '/phones/phone3.png',
  },
  {
    id: '4',
    src: '/phones/phone4.png',
  },
  {
    id: '5',
    src: '/phones/phone5.png',
  },
  {
    id: '6',
    src: '/phones/phone6.png',
  },
  {
    id: '7',
    src: '/phones/phone7.png',
  },
  {
    id: '8',
    src: '/phones/phone8.png',
  },
  {
    id: '9',
    src: '/phones/phone9.png',
  },
  {
    id: '10',
    src: '/phones/phone10.png',
  },
  {
    id: '11',
    src: '/phones/phone11.png',
  },
  {
    id: '12',
    src: '/phones/phone12.png',
  },
];

const firstRow = screens.slice(0, 4);
const secondRow = screens.slice(4, 8);
const thirdRow = screens.slice(8, 12);

const ScreensList = () => {
  return (
    <div className='relative mt-36 flex flex-col items-center overflow-hidden'>
      <div className='absolute bottom-0 left-0 z-10 flex w-full'>
        <div className='sticky bottom-0 mx-auto mt-auto flex h-[380px] w-screen justify-center overflow-hidden'>
          <Image
            className='ml-[92px] min-h-[500px] min-w-[770px] object-contain'
            src='/phones/hand.png'
            alt='hand'
            width={770}
            height={500}
          />
          <div className='absolute top-6 h-[305px] w-[145px]'>
            <video
              className='h-full w-full rounded-[18px] object-cover'
              src='/phones/phone.mp4'
              autoPlay
              playsInline
              muted
              loop></video>
          </div>
        </div>
      </div>
      <div className='pb-10'>
        <ScreensRow list={firstRow} />
        <ScreensRow list={secondRow} />
        <ScreensRow list={thirdRow} />
      </div>
    </div>
  );
};
export default ScreensList;
