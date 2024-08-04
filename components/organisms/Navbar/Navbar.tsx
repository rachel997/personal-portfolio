import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Button from '@atoms/Button/Button';
import NavLink from './NavLink';
import { handleToggleMenu } from '@utils/handleToggleMenu';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { NavbarProps } from './types';
import { headerNavLinks } from '@data/header.data';

const Navbar = ({ setMenuVisibility }: NavbarProps) => {
  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` });
  return (
    <>
      <nav className="text-interface-100 text-md font-medium">
        {headerNavLinks && headerNavLinks.length > 0 && (
          <ul className="flex flex-col gap-y-4 lg:flex-row flex-wrap gap-x-10 align-items-start justify-content-start">
            {headerNavLinks.map(({ id, label, href }) => (
              <NavLink
                key={id}
                label={label}
                href={href}
                setMenuVisibility={setMenuVisibility}
              />
            ))}
          </ul>
        )}
      </nav>
      <Link
        href="#contact"
        className="focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-interface-300"
      >
        <Button
          icon={HiOutlineArrowRight}
          size="sm"
          onClickFunction={() =>
            handleToggleMenu(isDesktop, false, setMenuVisibility)
          }
          tabindex={-1}
        >
          Let&apos;s talk
        </Button>
      </Link>
      <button
        className="text-interface-300 border-interface-300 border px-3 py-2 text-lg font-semibold focus:outline-2 focus:outline-offset-4 focus:outline-black lg:hidden absolute -top-12 -left-12 focus:static"
        onClick={() => handleToggleMenu(isDesktop, false, setMenuVisibility)}
      >
        Close mobile navigation
      </button>
    </>
  );
};

export default Navbar;
