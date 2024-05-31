import { JobInfoProps } from '@organisms/JobInfo/JobInfo.types';

interface Element extends JobInfoProps {
  id: number;
}

export type TimelineProps = {
  sectionID?: string;
  heading: string;
  elements: Element[];
};
