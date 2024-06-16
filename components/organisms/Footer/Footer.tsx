import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import Divider from '@atoms/Divider/Divider';

import { footerData } from '@/data/footer.data';

const { image, heading, description, links, copyright } = footerData;
const { src, alt } = image;

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-16">
      <div className="relative py-16 sm:py-24 overflow-hidden">
        {src && alt && (
          <Image
            src={src}
            alt={alt}
            className="absolute right-0 top-0 w-full h-full object-cover object-right-top z-minus-1"
          />
        )}
        <Container className="text-center">
          {heading && (
            <div className="relative inline-block">
              <Heading>{heading}</Heading>
              <div className="stroke-decor w-108 h-5 absolute left-0 right-0 mx-auto -bottom-1.5 md:bottom-0 z-minus-1"></div>
            </div>
          )}
          {description && (
            <p className="lg:w-3/5 xl:w-2/5 text-md mt-9 mx-auto">
              {description}
            </p>
          )}
          {links && links.length > 0 && (
            <div className="mt-6 flex flex-col justify-center items-center gap-y-1">
              {links.map(({ text, href, icon, iconTitle }, i) => {
                const Icon = icon;
                return (
                  <Fragment key={text}>
                    {i !== 0 && <span className="font-light text-lg">or</span>}
                    <span className="flex flex-row gap-x-3 justify-center items-center">
                      <Icon
                        className="text-primary text-xl sm:text-2xl"
                        title={iconTitle}
                      />
                      <Link
                        href={href}
                        className="font-medium text-lg sm:text-xl animated-line"
                      >
                        {text}
                      </Link>
                    </span>
                  </Fragment>
                );
              })}
            </div>
          )}
        </Container>
      </div>
      <Divider gapClass="m-0" />
      <Container className="text-center py-6">
        <p>{copyright ? copyright : 'Copyright © All rights reserved.'}</p>
        <p className="mt-2 text-sm">
          Graphic design by{' '}
          <Link
            href="https://themeforest.net/user/quomodotheme"
            rel="nofollow"
            target="_blank"
            className="animated-line"
          >
            QuomodoTheme
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
