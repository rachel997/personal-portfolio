import { StaticImageData } from 'next/image';

type Title = {
  headline: string;
  subheadline?: string;
};

type Link = {
  href: string;
  text: string;
  icon: React.ElementType;
};

export type HeroSectionProps = {
  title: Title;
  subtitle: string;
  content: string;
  link: Link;
  backgroundImage: StaticImageData;
  image: StaticImageData;
};

export type ContentProps = {
  title: Title;
  subtitle: string;
  content: string;
  link: Link;
};
