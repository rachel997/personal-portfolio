'use client';

import { useState } from 'react';
import classNames from 'classnames';
import BurgerIcon from './BurgerIcon';
import Container from '@atoms/Container/Container';
import Logo from '@molecules/Logo/Logo';
import Navbar from '@organisms/Navbar/Navbar';

import { MdClose, MdMenu } from 'react-icons/md';

const HomePage = () => {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);

  const navigationCx = classNames(
    'fixed lg:relative left-0 top-0 h-screen lg:h-auto w-full lg:w-auto transition-transform bg-interface-100/90 lg:bg-transparent',
    !menuVisibility && '-translate-x-full lg:translate-x-0',
  );

  return (
    <header className="fixed w-full top-0 left-0 z-40">
      <a
        href="#main"
        className="text-interface-300 border-interface-300 border px-3 py-2 text-lg font-semibold focus:outline-2 focus:outline-offset-4 focus:outline-pink z-2 bg-white absolute -top-12 -left-12 focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Container className="relative pt-6 z-index-1">
        <div className="bg-white pl-5 pr-4 py-4 rounded-xl flex flex-row items-center justify-between gap-4 relative z-1">
          <Logo />
          <BurgerIcon
            setMenuVisibility={setMenuVisibility}
            icon={MdMenu}
            className="text-interface-100 text-2xl lg:hidden"
            menuVisibility={menuVisibility}
            label="Open mobile menu"
          />
          <div className={navigationCx}>
            <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-4 lg:gap-12 w-96 lg:w-auto max-w-full bg-white lg:bg-transparent overflow-auto h-full lg:h-auto relative px-6 pt-20 pb-8 lg:p-2">
              <BurgerIcon
                setMenuVisibility={setMenuVisibility}
                icon={MdClose}
                className="text-interface-100 text-2xl absolute top-8 right-6 lg:hidden"
                menuVisibility={menuVisibility}
                label="Close mobile menu"
              />
              <Navbar setMenuVisibility={setMenuVisibility} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HomePage;
