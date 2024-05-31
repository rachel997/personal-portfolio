import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { ContainerProps } from './Container.types';

const Container = ({ children, customClass }: ContainerProps) => {
  const displayedClasses = twMerge(
    classNames('md:container mx-auto px-4', customClass),
  );

  return <div className={displayedClasses}>{children}</div>;
};

export default Container;
