import ResumeSection from './ResumeSection';
import TagCloud from '@molecules/TagCloud/TagCloud';
import { TagsSectionProps } from './types';

const TagsSection = ({
  title,
  elements,
  tagSize,
  tagColor,
}: TagsSectionProps) => {
  return (
    <ResumeSection title={title}>
      <TagCloud tags={elements} size={tagSize} color={tagColor} />
    </ResumeSection>
  );
};

export default TagsSection;
