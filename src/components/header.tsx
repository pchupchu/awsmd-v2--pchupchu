import Logo from './logo';
import Menu from './menu';

const Header = () => {
  return (
    <header className='absolute left-0 right-0 top-0 z-50 flex w-full items-center justify-between px-4 pt-6'>
      <Logo imageSrc='/icons/logo-light.svg' textStyles='text-white' />
      <Menu />
    </header>
  );
};
export default Header;
