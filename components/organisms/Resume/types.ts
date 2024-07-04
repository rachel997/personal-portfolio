import { ReactNode } from 'react';
import { JobInfoProps } from '@organisms/JobInfo/types';
import { Color, Size } from '@molecules/TagCloud/types';

type Job = JobInfoProps & {
  id: number;
};

type Link = {
  href: string;
  text: string;
};

type Tool = {
  id: number;
  label: string;
  icon: React.ElementType;
};

type Skills = {
  title: string;
  elements: string[];
};

type Summary = {
  name: string;
  position: string;
  yearsOfExperience: number;
  yearsOfExperienceLabel: string;
  bio: string[];
};

type EmploymentHistory = {
  jobs: Job[];
  link: Link;
};

type ExtendedSummary = {
  title: string;
  bio: string[];
};

type Tools = {
  title: string;
  elements: Tool[];
};

type Languages = {
  title: string;
  elements: string[];
};

export type ResumeProps = {
  sectionID?: string;
  heading: string;
  summary: Summary;
  extendedSummary: ExtendedSummary;
  employmentHistory: EmploymentHistory;
  skills: Skills;
  tools: Tools;
  languages: Languages;
};

export type ResumeSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export type TagsSectionProps = Skills & {
  tagSize: Size;
  tagColor: Color;
};

export type SummaryProps = Summary & EmploymentHistory;
