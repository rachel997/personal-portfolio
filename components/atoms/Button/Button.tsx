import classNames from 'classnames';
import { ButtonProps } from './types';

const Button = ({
  children,
  size = 'lg',
  color = 'primary',
  icon,
  iconHoverDirection = 'right',
  disabled = false,
  onClickFunction,
  className,
}: ButtonProps) => {
  const Icon = icon;
  const buttonCx = classNames(
    'text-interface-100 rounded-lg font-medium flex flex-row justify-between items-center gap-x-2 group relative overflow-hidden before:transition-size before:absolute before:h-full before:w-0 before:top-0 before:left-0 before:z-0 hover:before:w-full',
    size === 'lg' && 'px-9 py-4 text-md',
    size === 'sm' && 'px-7 py-2.5',
    color === 'primary' && 'bg-primary before:bg-secondary',
    color === 'secondary' && 'bg-secondary before:bg-primary',
    className,
    iconHoverDirection === 'bottom' && '',
  );

  const iconCx = classNames(
    'relative transition-transform',
    iconHoverDirection === 'bottom' && 'group-hover:translate-y-1',
    iconHoverDirection === 'right' && 'group-hover:translate-x-1.5',
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
