import classNames from 'classnames';
import { TagCloudProps } from './types';
import { ColorCx, SizeCx } from './utils';

const TagCloud = ({
  tags,
  color = 'primary',
  size = 'small',
}: TagCloudProps) => {
  const TagCloudCx = classNames(
    'rounded-md px-3 py-1',
    ColorCx[color as keyof typeof ColorCx],
    SizeCx[size as keyof typeof SizeCx],
  );

  return (
    <ul className="flex flex-row flex-wrap items-start justify-start gap-4 lg:pr-12">
      {tags.map(tag => (
        <li key={tag} className={TagCloudCx}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagCloud;
