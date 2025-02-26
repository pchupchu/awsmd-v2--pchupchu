import Image from 'next/image';

interface ScreensRowProps {
  list: {
    id: string;
    src: string;
  }[];
}

const ScreensRow = ({ list }: ScreensRowProps) => {
  const leftSide = list.slice(0, 2);
  const rightSide = list.slice(2, 4);
  return (
    <ul className='flex list-none'>
      {leftSide.map((screen) => {
        return (
          <li key={screen.id} className='m-2'>
            <div className='relative h-[310px] w-[150px]'>
              <Image src={screen.src} alt='phone' fill />
            </div>
          </li>
        );
      })}
      <li className='m-2'>
        <div className='h-[310px] w-[150px]'></div>
      </li>
      {rightSide.map((screen) => {
        return (
          <li key={screen.id} className='m-2'>
            <div className='relative h-[310px] w-[150px]'>
              <Image src={screen.src} alt='phone' fill />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ScreensRow;
