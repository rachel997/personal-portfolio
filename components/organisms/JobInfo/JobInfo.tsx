import classNames from 'classnames';
import Divider from '@atoms/Divider/Divider';
import Heading from '@atoms/Heading/Heading';
import Skills from '@molecules/Skills/Skills';
import { JobInfoProps } from './JobInfo.types';

const JobInfo = ({
  title,
  subtitle,
  description,
  tiles,
  isHighlighted,
  badge,
  hightlightedBadge,
}: JobInfoProps) => {
  const badgeClass = classNames(
    'inline-block border text-sm rounded-md px-3 py-1',
    isHighlighted
      ? 'border-primary bg-primary text-interface-100'
      : 'text-primary',
  );
  return (
    <div className="flex flex-col justify-start items-start gap-y-5">
      <div className="flex flex-col-reverse sm:flex-row gap-y-3 gap-x-2 justify-between items-start w-full">
        <div className="w-3/5">
          <Heading tag={3} size={5}>
            {title}
          </Heading>
          <span className="mt-2 font-light text-md">{subtitle}</span>
        </div>
        <span className={badgeClass}>
          {isHighlighted ? hightlightedBadge : badge}
        </span>
      </div>

      {description && description.length > 0 && (
        <>
          <Divider gapClass="m-0 w-full" />
          <div className="flex flex-col justify-start items-start gap-y-3">
            {description.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </>
      )}
      <Divider gapClass="m-0 w-full" />
      {tiles && tiles.length > 0 && <Skills skills={tiles} />}
    </div>
  );
};

export default JobInfo;
