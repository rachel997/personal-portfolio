import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { HeadingProps } from './types';
import { FontWeightCx, SizeCx } from './utils';

const Heading = ({
  children,
  className,
  size,
  tag = 2,
  fontWeight = 600,
}: HeadingProps) => {
  const sizeKey = `h${size ? size : tag}`;
  const fontWeightKey = `f${fontWeight ? fontWeight : tag}`;

  const mergedClasses = twMerge(
    classNames(
      SizeCx[sizeKey as keyof typeof SizeCx],
      FontWeightCx[fontWeightKey as keyof typeof FontWeightCx],
      className,
    ),
  );

  const Tag = `h${tag}` as keyof JSX.IntrinsicElements;

  return <Tag className={mergedClasses}>{children}</Tag>;
};

export default Heading;
