import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LogoProps {
  linkStyles?: string;
  imageSrc: string;
  textStyles?: string;
}

const Logo = ({ linkStyles, imageSrc, textStyles }: LogoProps) => {
  return (
    <Link
      className={cn('relative flex items-center gap-2', linkStyles)}
      href='/'>
      <Image src={imageSrc} width={25} height={25} alt='logo' />
      <span
        className={cn('text-[18px] font-semibold leading-tight', textStyles)}>
        Awsmd
      </span>
    </Link>
  );
};
export default Logo;
