import { useMediaQuery } from 'react-responsive';
import { handleToggleMenu } from '@utils/handleToggleMenu';
import { BurgerIconProps } from './types';

const BurgerIcon = ({
  setMenuVisibility,
  icon: Icon,
  className,
}: BurgerIconProps) => {
  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` });
  return (
    <button
      className={className}
      onClick={() => handleToggleMenu(isDesktop, false, setMenuVisibility)}
    >
      <Icon />
    </button>
  );
};

export default BurgerIcon;
