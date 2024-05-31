import { ReactNode } from 'react';

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export type ButtonProps = {
  children: ReactNode;
  size?: 'sm' | 'lg';
  color?: 'primary' | 'secondary';
  icon?: React.ElementType;
  iconHoverDirection?: 'right' | 'bottom';
  disabled?: boolean;
  onClickFunction?: ClickHandler;
  className?: string;
};
