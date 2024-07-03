import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

type Link = {
  href: string;
  text: string;
  icon?: React.ElementType;
  type?: string;
};

type Image = {
  src: StaticImageData;
  alt: string;
};

type Disclaimer = {
  author?: string;
  authorHref?: string;
  source?: string;
  sourceHref?: string;
};

export type CallToActionProps = {
  sectionID?: string;
  heading: string;
  content: string;
  link: Link;
  disclaimer?: Disclaimer;
  image: Image;
};

export type CustomLinkProps = {
  children: ReactNode;
  type?: string;
  href: string;
};

export type BackgroundProps = {
  image: Image;
};
