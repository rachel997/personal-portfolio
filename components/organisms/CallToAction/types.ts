import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

type Image = {
  src: StaticImageData;
  alt: string;
};

type Link = {
  href: string;
  text: string;
  icon?: React.ElementType;
  type?: string;
};

type Disclaimer = {
  author?: string;
  authorHref?: string;
  source?: string;
  sourceHref?: string;
};

export type CallToActionProps = {
  sectionID?: string;
  image: Image;
  heading: string;
  content: string;
  link: Link;
  disclaimer?: Disclaimer;
};

export type CustomLinkProps = {
  children: ReactNode;
  type?: string;
  href: string;
};
