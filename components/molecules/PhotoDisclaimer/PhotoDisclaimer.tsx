import { PhotoDisclaimerProps } from './types';
import CustomLink from './CustomLink';

const PhotoDisclaimer = ({
  author,
  authorHref,
  source,
  sourceHref,
}: PhotoDisclaimerProps) => {
  return (
    <div className="absolute right-2 bottom-2 text-xxs">
      Photo by {author && <CustomLink text={author} href={authorHref} />}
      {author && source && ' '}
      {source && <CustomLink text={source} href={sourceHref} />}
    </div>
  );
};

export default PhotoDisclaimer;
