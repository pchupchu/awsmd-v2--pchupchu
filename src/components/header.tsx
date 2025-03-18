import Logo from './logo';

const Header = () => {
  return (
    <header className='absolute left-0 right-0 top-0 z-50 flex w-full items-center justify-between px-4 pt-6'>
      <Logo imageSrc='/icons/logo-light.svg' textStyles='text-white' />
      <button
        className='fixed right-5 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/40'
        type='button'>
        <div className='flex h-[14px] w-[18px] flex-col items-center justify-between'>
          <span className='h-[2px] w-[10px] self-end rounded-full bg-white'></span>
          <span className='h-[2px] w-full rounded-full bg-white'></span>
          <span className='h-[2px] w-[10px] self-start rounded-full bg-white'></span>
        </div>
      </button>
    </header>
  );
};
export default Header;
