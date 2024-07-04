import { JobInfoProps } from '@organisms/JobInfo/types';

type Job = JobInfoProps & {
  id: number;
};
type Link = {
  href: string;
  text: string;
};

export type JobsSummaryProps = {
  jobs: Job[];
  link: Link;
};
