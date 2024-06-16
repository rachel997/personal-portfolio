import { ReactNode } from 'react';

type Size = 1 | 2 | 3 | 4 | 5 | 'custom';
type Tag = 1 | 2 | 3 | 4 | 5;
type FontWeight = 300 | 400 | 500 | 600 | 700;

export type HeadingProps = {
  children: ReactNode;
  className?: string;
  size?: Size;
  tag?: Tag;
  fontWeight?: FontWeight;
};
