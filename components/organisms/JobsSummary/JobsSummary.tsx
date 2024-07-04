import Link from 'next/link';
import Button from '@atoms/Button/Button';
import JobInfo from '@organisms/JobInfo/JobInfo';
import { JobsSummaryProps } from './types';

const JobsSummary = ({ jobs, link }: JobsSummaryProps) => {
  return (
    <div className="w-full xl:w-1/3">
      <ul className="flex flex-col gap-y-5">
        {jobs.map(job => {
          if (!job) return null;
          const {
            id,
            title,
            subtitle,
            isHighlighted,
            badge,
            hightlightedBadge,
          } = job;
          return (
            <li key={id}>
              <JobInfo
                key={id}
                title={title}
                subtitle={subtitle}
                isHighlighted={isHighlighted}
                badge={badge}
                hightlightedBadge={hightlightedBadge}
              />
            </li>
          );
        })}
      </ul>
      {link.href && link.text && (
        <Link href={link.href} className="mt-4 inline-block">
          <Button size="sm" color="secondary">
            {link.text}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default JobsSummary;
