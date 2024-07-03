type Tile = {
  href: string;
  label: string;
  icon: React.ElementType;
};

export type SocialMediaLinksProps = {
  sectionID?: string;
  elements: Tile[];
};
