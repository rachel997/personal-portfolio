import Divider from '@atoms/Divider/Divider';
import Heading from '@atoms/Heading/Heading';
import { ResumeSectionProps } from './types';

const ResumeSection = ({ title, children, className }: ResumeSectionProps) => {
  return (
    <div className={className}>
      <Heading tag={3} size={4} fontWeight={400}>
        {title}
      </Heading>
      <Divider gapClass="mt-2 mb-8" />
      {children}
    </div>
  );
};

export default ResumeSection;
