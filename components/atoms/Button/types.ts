import { ReactNode } from 'react';

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
type Size = 'sm' | 'lg';
type IconHoverDirection = 'right' | 'bottom';

export type ButtonProps = {
  children: ReactNode;
  size?: Size;
  color?: 'primary' | 'secondary';
  icon?: React.ElementType;
  iconHoverDirection?: IconHoverDirection;
  disabled?: boolean;
  onClickFunction?: ClickHandler;
  className?: string;
};
