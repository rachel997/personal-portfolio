import { StaticImageData } from 'next/image';

export type HeroSectionProps = {
  title: {
    line1: string;
    line2?: string;
  };
  subtitle: string;
  content: string;
  link: {
    href: string;
    text: string;
    icon: React.ElementType;
  };
  backgroundImage: StaticImageData;
  image: StaticImageData;
};
