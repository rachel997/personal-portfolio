import classNames from 'classnames';
import Heading from '@atoms/Heading/Heading';
import { JobInfoHeaderProps } from './types';

const JobInfoHeader = ({
  title,
  subtitle,
  isHighlighted,
  hightlightedBadge,
  badge,
}: JobInfoHeaderProps) => {
  const badgeClass = classNames(
    'inline-block border text-xs rounded-md px-2 py-1',
    isHighlighted
      ? 'border-primary bg-primary text-interface-100'
      : 'text-primary',
  );
  return (
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
  );
};

export default JobInfoHeader;
