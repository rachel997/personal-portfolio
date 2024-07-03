import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { handleToggleMenu } from '@utils/handleToggleMenu';
import { NavLinkProps } from './types';

const NavLink = ({ label, href, setMenuVisibility }: NavLinkProps) => {
  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` });
  return (
    <li>
      <Link
        href={href}
        className="animated-line"
        onClick={() => handleToggleMenu(isDesktop, true, setMenuVisibility)}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
