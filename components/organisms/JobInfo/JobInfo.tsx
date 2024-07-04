import Divider from '@atoms/Divider/Divider';
import JobInfoHeader from './JobInfoHeader';
import TextContent from '@molecules/TextContent/TextContent';
import TagCloud from '@molecules/TagCloud/TagCloud';
import { JobInfoProps } from './types';

const JobInfo = ({
  title,
  subtitle,
  description,
  tiles,
  isHighlighted,
  badge,
  hightlightedBadge,
}: JobInfoProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-y-5">
      <JobInfoHeader
        title={title}
        subtitle={subtitle}
        isHighlighted={isHighlighted}
        hightlightedBadge={hightlightedBadge}
        badge={badge}
      />

      {description && description.length > 0 && (
        <>
          <Divider gapClass="m-0 w-full" />
          <TextContent paragraphs={description} />
        </>
      )}
      <Divider gapClass="m-0 w-full" />
      {tiles && tiles.length > 0 && <TagCloud tags={tiles} />}
    </div>
  );
};

export default JobInfo;
