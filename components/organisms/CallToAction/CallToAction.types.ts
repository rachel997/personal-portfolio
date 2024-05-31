import { StaticImageData } from 'next/image';

export type CallToActionProps = {
  sectionID?: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  heading: string;
  content: string;
  link: {
    href: string;
    text: string;
    icon?: React.ElementType;
    type?: string;
  };
  disclaimer?: {
    author?: string;
    authorHref?: string;
    source?: string;
    sourceHref?: string;
  };
};
