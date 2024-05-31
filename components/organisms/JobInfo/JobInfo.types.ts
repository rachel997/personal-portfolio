export interface JobInfoProps {
  title: string;
  subtitle: string;
  description?: Array<string>;
  tiles?: Array<string>;
  isHighlighted: boolean;
  badge: string;
  hightlightedBadge?: string;
}
