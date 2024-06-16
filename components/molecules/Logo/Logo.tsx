import Link from 'next/link';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { LogoProps } from './types';
import LogoImage from './LogoImage';

const Logo = ({ linkToHomepage = true, className }: LogoProps) => {
  const logoCx = twMerge(
    classNames(
      'inline-block',
      className,
      linkToHomepage && 'transition-colors hover:opacity-75',
    ),
  );

  return linkToHomepage ? (
    <Link href="/" className="transition-opacity hover:opacity-80">
      <LogoImage />
    </Link>
  ) : (
    <div className={logoCx}>
      <LogoImage />
    </div>
  );
};

export default Logo;
