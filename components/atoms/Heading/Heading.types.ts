import { ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
  customClass?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 'custom';
  tag?: 1 | 2 | 3 | 4 | 5;
  fontWeight?: 300 | 400 | 500 | 600 | 700;
};

export type SizeClassProps = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  custom: '';
};

export type FontWeightProps = {
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
};
