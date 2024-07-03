export type JobInfoHeaderProps = {
  title: string;
  subtitle: string;
  isHighlighted: boolean;
  hightlightedBadge?: string;
  badge: string;
};

export type JobInfoProps = JobInfoHeaderProps & {
  description?: string[];
  tiles?: string[];
};
