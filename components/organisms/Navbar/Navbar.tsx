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
          <ul className="flex flex-col gap-y-4 lg:flex-row flex-wrap gap-x-10">
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
      <Link href="#contact">
        <Button
          icon={HiOutlineArrowRight}
          size="sm"
          onClickFunction={() =>
            handleToggleMenu(isDesktop, false, setMenuVisibility)
          }
        >
          Let&apos;s talk
        </Button>
      </Link>
    </>
  );
};

export default Navbar;
