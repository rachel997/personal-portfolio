import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { LogoProps } from './Logo.types';

import logo from '@images/logo.svg';

const Logo = ({ linkToHomepage = true, customClasses }: LogoProps) => {
  const classes = twMerge(
    classNames(
      'inline-block',
      customClasses,
      linkToHomepage && 'transition-colors hover:opacity-75',
    ),
  );

  const image = (
    <Image
      src={logo}
      width={156}
      height={50}
      alt="Rachela Markwica - Portfolio"
    />
  );

  return linkToHomepage ? (
    <Link href="/" className="transition-opacity hover:opacity-80">
      {image}
    </Link>
  ) : (
    <div className={classes}>{image}</div>
  );
};

export default Logo;
