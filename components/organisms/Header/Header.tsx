'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import Link from 'next/link';
import Button from '@atoms/Button/Button';
import Container from '@atoms/Container/Container';
import Logo from '@molecules/Logo/Logo';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { MdClose, MdMenu } from 'react-icons/md';
import { headerNavLinks } from '@data/header.data';

const HomePage = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` });
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);

  const handleToggleMenu = (isLink: boolean = false) => {
    if (isLink && isDesktop) return;

    setMenuVisibility(prevState => !prevState);
  };

  const navigationClass = classNames(
    'fixed lg:relative left-0 top-0 h-screen lg:h-auto w-full lg:w-auto transition-transform bg-interface-100/90 lg:bg-transparent',
    !menuVisibility && '-translate-x-full lg:translate-x-0',
  );

  return (
    <>
      <header className="fixed w-full top-0 left-0 z-50">
        <Container customClass="relative pt-6">
          <div className="bg-white p-5 rounded-xl flex flex-row items-center justify-between gap-4 relative z-1">
            <Logo />
            <button
              className="text-interface-100 text-2xl lg:hidden"
              onClick={() => handleToggleMenu()}
            >
              <MdMenu />
            </button>
            <div className={navigationClass}>
              <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-4 lg:gap-12 w-96 lg:w-auto max-w-full bg-white lg:bg-transparent overflow-auto h-full lg:h-auto relative px-6 pt-20 pb-8 lg:p-0">
                <button
                  className="text-interface-100 text-2xl absolute top-8 right-6 lg:hidden"
                  onClick={() => handleToggleMenu()}
                >
                  <MdClose />
                  <span className="sr-only">Close menu</span>
                </button>
                <nav className="text-interface-100 text-md font-medium">
                  {headerNavLinks && headerNavLinks.length > 0 && (
                    <ul className="flex flex-col gap-y-4 lg:flex-row flex-wrap gap-x-10">
                      {headerNavLinks.map(({ label, href }) => (
                        <li key={`${label}${href}`}>
                          <Link
                            href={href}
                            className="animated-line"
                            onClick={() => handleToggleMenu(true)}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </nav>
                <Link href="#contact">
                  <Button
                    icon={HiOutlineArrowRight}
                    size="sm"
                    onClickFunction={() => handleToggleMenu(true)}
                  >
                    Let&apos;s talk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default HomePage;
