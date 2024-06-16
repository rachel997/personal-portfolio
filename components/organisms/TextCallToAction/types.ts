type Link = {
  text: string;
  href: string;
  icon?: React.ElementType;
  iconTitle?: string;
};

export type StayInTouchProps = {
  heading: string;
  content: string;
  links: Link[];
};

export type LinksProps = {
  links: Link[];
};
