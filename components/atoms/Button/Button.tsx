import classNames from 'classnames';
import { ButtonProps } from './types';
import { ColorCx, IconHoverDirectionCx, SizeCx } from './utils';

const Button = ({
  children,
  size = 'lg',
  color = 'primary',
  icon: Icon,
  iconHoverDirection = 'right',
  disabled = false,
  onClickFunction,
  className,
}: ButtonProps) => {
  const buttonCx = classNames(
    'text-interface-100 rounded-lg font-medium flex flex-row justify-between items-center gap-x-2 group relative overflow-hidden before:transition-size before:absolute before:h-full before:w-0 before:top-0 before:left-0 before:z-0 hover:before:w-full',
    SizeCx[size as keyof typeof SizeCx],
    ColorCx[color as keyof typeof ColorCx],
    className,
  );

  const iconCx = classNames(
    'relative transition-transform',
    IconHoverDirectionCx[
      iconHoverDirection as keyof typeof IconHoverDirectionCx
    ],
  );

  return (
    <button className={buttonCx} disabled={disabled} onClick={onClickFunction}>
      <span className="relative z-1">{children}</span>
      {Icon && (
        <span className={iconCx}>
          <Icon />
        </span>
      )}
    </button>
  );
};

export default Button;
