export type Icon = {
  id: number;
  label: string;
  icon: React.ElementType;
};

export type IconsListProps = {
  icons: Icon[];
};

export type SingleIconProps = Omit<Icon, 'id'>;
