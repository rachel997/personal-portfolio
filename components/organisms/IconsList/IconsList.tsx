import SingleIcon from './SingleIcon';
import { IconsListProps } from './types';

const IconsList = ({ icons }: IconsListProps) => {
  return (
    <ul className="flex flex-row flex-wrap items-start justify-start gap-4">
      {icons.map(({ id, label, icon }) => {
        return <SingleIcon key={id} label={label} icon={icon} />;
      })}
    </ul>
  );
};

export default IconsList;
