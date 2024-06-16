import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { ContainerProps } from './types';

const Container = ({ children, className }: ContainerProps) => {
  const containerCx = twMerge(
    classNames('md:container mx-auto px-4', className),
  );

  return <div className={containerCx}>{children}</div>;
};

export default Container;
