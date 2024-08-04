import Image from 'next/image';
import Container from '@atoms/Container/Container';
import Content from './Content';
import { HeroSectionProps } from './types';

const HeroSection = ({
  title,
  subtitle,
  content,
  link,
  backgroundImage,
  image,
}: HeroSectionProps) => {
  return (
    <section className="relative pt-32">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-10 py-12 sm:py-16">
        <div className="flex flex-col items-center lg:items-start justify-start lg:justify-center">
          <Content
            title={title}
            subtitle={subtitle}
            content={content}
            link={link}
          />
        </div>

        <div className="flex flex-row items-center justify-center lg:justify-end">
          <Image
            src={image}
            width={660}
            height={660}
            alt="Picture of the Rachela Markwica"
            className="-xl:mr-16"
          />
        </div>
      </Container>
      <Image
        src={backgroundImage}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-minus-1"
        width={1920}
        height={981}
      />
    </section>
  );
};

export default HeroSection;
