import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@atoms/Button/Button';
import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import PhotoDisclaimer from '@molecules/PhotoDisclaimer/PhotoDisclaimer';
import { CallToActionProps } from './CallToAction.types';

const CallToAction = ({
  image,
  sectionID,
  heading,
  content,
  link,
  disclaimer,
}: CallToActionProps) => {
  const { src, alt } = image;
  const { href, text, icon, type } = link || {};

  const ButtonEl: ReactNode = (
    <Button icon={icon} iconHoverDirection="bottom">
      {text}
    </Button>
  );

  return (
    <section
      id={sectionID ?? ''}
      className="mt-16 sm:mt-28 relative py-16 sm:py-28 scroll-mt-16"
    >
      <Image
        src={src}
        className="absolute top-0 left-0 w-full h-full object-cover z-minus-1"
        alt={alt}
      />
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-interface-400/60 to-interface-400 lg:from-interface-400/30 lg:to-interface-400"></div>
      <Container customClass="relative z-1 grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8 sm:px-16 text-center lg:text-left">
        <Heading customClass="flex flex-col items-start justify-start">
          {heading}
        </Heading>
        <div className="flex flex-col items-center lg:items-start justify-center">
          <p className="text-lg">{content}</p>
          {type === 'download' ? (
            <Link href={href} download className="mt-6" target="_blank">
              {ButtonEl}
            </Link>
          ) : (
            <Link href={href} className="mt-6">
              {ButtonEl}
            </Link>
          )}
        </div>
      </Container>
      <PhotoDisclaimer {...disclaimer} />
    </section>
  );
};

export default CallToAction;
