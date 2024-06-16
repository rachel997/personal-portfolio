import Image from 'next/image';
import Link from 'next/link';
import Button from '@atoms/Button/Button';
import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection = ({
  title,
  subtitle,
  content,
  link,
  backgroundImage,
  image,
}: HeroSectionProps) => {
  const { line1, line2 } = title || {};
  const { href, text, icon } = link;

  return (
    <section className="relative pt-32">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-10 py-12 sm:py-16">
        <div className="flex flex-col items-center lg:items-start justify-start lg:justify-center">
          <Heading tag={1} className="text-center lg:text-start">
            {line1}
            {line2 && (
              <>
                <br />
                Rachela Markwica
              </>
            )}
          </Heading>
          <div className="inline-block relative">
            <Heading
              tag={2}
              size="custom"
              className="text-xl sm:text-3xl xl:text-3.5xl"
            >
              {subtitle}
            </Heading>
            <div className="stroke-decor w-full h-5 absolute left-0 -bottom-1 sm:bottom-0 xl:bottom-2 z-minus-1 hidden sm:block"></div>
          </div>
          <p className="text-lg sm:text-xl mt-8 text-center lg:text-left">
            {content}
          </p>
          <Link href={href}>
            <Button icon={icon} className="mt-8">
              {text}
            </Button>
          </Link>
        </div>

        <div className="flex flex-row items-center justify-center lg:justify-end">
          <Image
            src={image}
            width={660}
            height={660}
            alt="Picture of the author"
            className="-xl:mr-16"
          />
        </div>
      </Container>
      <Image
        src={backgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-minus-1"
        width={1920}
        height={981}
      />
    </section>
  );
};

export default HeroSection;
