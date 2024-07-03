import classNames from 'classnames';

export const uiCx = (i: number, elementsLength: number) => {
  const wrapperCx = classNames(
    'w-full',
    (i + 1) % 2 !== 0 && 'flex flex-row items-start justify-end',
  );
  const blockCx = classNames(
    'relative w-full lg:w-1/2',
    (i + 1) % 2 === 0 ? 'lg:pr-10' : 'lg:pl-10',
  );
  const roundedDecorCx = classNames(
    'w-6 h-6 absolute inset-x-0 lg:inset-x-unset -bottom-12 lg:inset-y-0 absolute mx-auto lg:mx-unset lg:my-auto bg-primary rounded-full',
    (i + 1) % 2 === 0 ? 'lg:-right-3' : 'lg:-left-3',
    i + 1 === elementsLength && 'hidden lg:block',
  );
  const lineDecorCx = classNames(
    'hidden lg:block w-1 h-1/2 bg-interface-100 absolute',
    (i + 1) % 2 === 0 ? '-right-0.5' : '-left-0.5',
    i === 0 && 'top-0',
    i + 1 === elementsLength && 'bottom-0',
  );

  return { wrapperCx, blockCx, roundedDecorCx, lineDecorCx };
};
