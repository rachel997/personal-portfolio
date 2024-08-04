import { slugify } from '@/helpers/slugify';
import { SingleIconProps } from './types';

const SingleIcon = ({ label, icon: Icon }: SingleIconProps) => {
  const id = `icons-list-${slugify(label)}`;
  return (
    <li
      className="w-16 h-16 flex items-center justify-center bg-interface-300 rounded-md text-2xl"
      title={label}
    >
      <Icon aria-labelledby={id} />
      <span id={id} className="sr-only">
        {label}
      </span>
    </li>
  );
};

export default SingleIcon;
