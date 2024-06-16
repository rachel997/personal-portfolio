import Image from 'next/image';
import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import Links from './Links';
import { StayInTouchProps } from './types';

import decor from '@images/decor-2.svg';

const TextCallToAction = ({ heading, content, links }: StayInTouchProps) => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <Image
        src={decor}
        alt='Background image for "Contact with me" section'
        className="absolute right-0 top-0 w-full h-full object-cover object-right-top z-minus-1"
      />
      <Container className="text-center">
        <div className="relative inline-block">
          <Heading>{heading}</Heading>
          <div className="stroke-decor w-108 h-5 absolute left-0 right-0 mx-auto -bottom-1.5 md:bottom-0 z-minus-1"></div>
        </div>
        <p className="lg:w-3/5 xl:w-2/5 text-md mt-9 mx-auto">{content}</p>
        <Links links={links} />
      </Container>
    </section>
  );
};

export default TextCallToAction;
