import Link from 'next/link';
import { PhotoDisclaimerProps } from './PhotoDisclaimer.types';

const PhotoDisclaimer = ({
  author,
  authorHref,
  source,
  sourceHref,
}: PhotoDisclaimerProps) => {
  return (
    <div className="absolute right-2 bottom-2 text-xxs">
      Photo by{' '}
      {author && (
        <>
          {authorHref ? (
            <Link
              href={authorHref}
              target="_blank"
              rel="nofollow"
              className="hover:underline"
            >
              {author}
            </Link>
          ) : (
            author
          )}{' '}
        </>
      )}
      on{' '}
      {source && (
        <>
          {sourceHref ? (
            <Link
              href={sourceHref}
              target="_blank"
              rel="nofollow"
              className="hover:underline"
            >
              {source}
            </Link>
          ) : (
            source
          )}
        </>
      )}
    </div>
  );
};

export default PhotoDisclaimer;
