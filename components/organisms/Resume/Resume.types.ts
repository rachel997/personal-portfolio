import { JobInfoProps } from '@/components/organisms/JobInfo/types';

type Job = JobInfoProps & {
  id: number;
};

type Tool = {
  label: string;
  icon: React.ElementType;
};

export type ResumeProps = {
  sectionID?: string;
  heading: string;
  summary: {
    name: string;
    position: string;
    yearsOfExperience: number;
    yearsOfExperienceLabel: string;
    bio: Array<string>;
  };
  extendedSummary: {
    title: string;
    bio: Array<string>;
  };
  employmentHistory: {
    jobs: Job[];
    link: {
      href: string;
      text: string;
    };
  };
  skills: {
    title: string;
    elements: Array<string>;
  };
  tools: {
    title: string;
    elements: Tool[];
  };
  languages: {
    title: string;
    elements: Array<string>;
  };
};
