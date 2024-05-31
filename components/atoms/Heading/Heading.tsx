import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { FontWeightProps, HeadingProps, SizeClassProps } from './Heading.types';

const Heading = ({
  children,
  customClass,
  size,
  tag = 2,
  fontWeight = 600,
}: HeadingProps) => {
  const Tag = `h${tag}` as keyof JSX.IntrinsicElements;

  const displayedSize = size ? size : tag;
  const sizeClass: SizeClassProps = {
    1: 'text-2.5xl sm:text-3xl lg:text-3.5xl xl:text-4xl',
    2: 'text-2xl md:text-3xl',
    3: 'text-xl md:text-2xl',
    4: 'text-lg md:text-xl',
    5: 'text-md md:text-lg',
    custom: '',
  };

  const fontWeightClass: FontWeightProps = {
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
  };

  const mergedClasses = twMerge(
    classNames(
      sizeClass[displayedSize as keyof typeof sizeClass],
      fontWeightClass[fontWeight as keyof typeof fontWeightClass],
      customClass,
    ),
  );

  return <Tag className={mergedClasses}>{children}</Tag>;
};

export default Heading;
