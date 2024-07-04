import Image from 'next/image';
import Heading from '@atoms/Heading/Heading';
import JobsSummary from '@organisms/JobsSummary/JobsSummary';
import TextContent from '@molecules/TextContent/TextContent';
import { SummaryProps } from './types';
import decor from '@images/decor.svg';

const Summary = ({
  name,
  position,
  yearsOfExperience,
  yearsOfExperienceLabel,
  bio,
  jobs,
  link,
}: SummaryProps) => {
  return (
    <div className="flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:items-bottom mt-12 gap-y-16">
      <div className="w-full xl:w-1/3">
        <div className="flex flex-col sm:flex-row items-start justify-start sm:justify-between gap-y-4 gap-x-4">
          <div>
            <Heading tag={3} size={4}>
              {name}
            </Heading>
            <span>{position}</span>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-3">
            <span className="text-primary text-4xl font-bold leading-none">
              {yearsOfExperience}
            </span>
            <span className="leading-tight max-w-24">
              {yearsOfExperienceLabel}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start items-center gap-y-3 border-t border-divider pt-5 mt-5">
          <div className="flex flex-col justify-start items-start gap-y-3 ">
            <TextContent paragraphs={bio} className="w-full" />
          </div>
        </div>
      </div>
      <Image
        src={decor}
        alt='Decor image for "Resume" section'
        className="hidden xl:block"
      />
      <JobsSummary jobs={jobs} link={link} />
    </div>
  );
};

export default Summary;
