import { useMediaQuery } from 'react-responsive';
import { handleToggleMenu } from '@utils/handleToggleMenu';
import { BurgerIconProps } from './types';

const BurgerIcon = ({
  setMenuVisibility,
  icon: Icon,
  className,
  menuVisibility,
  label,
}: BurgerIconProps) => {
  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` });

  return (
    <button
      className={`${className} focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-interface-300`}
      onClick={() => handleToggleMenu(isDesktop, false, setMenuVisibility)}
      aria-expanded={menuVisibility}
      aria-label={label}
    >
      <Icon />
    </button>
  );
};

export default BurgerIcon;
