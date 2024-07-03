import { JobInfoProps } from '@/components/organisms/JobInfo/types';

type Element = JobInfoProps & {
  id: number;
};

export type TimelineProps = {
  sectionID?: string;
  heading: string;
  elements: Element[];
};
