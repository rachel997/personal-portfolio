import classNames from 'classnames';
import { SkillsProps } from './types';
import { ColorCx, SizeCx } from './utils';

const Skills = ({ skills, color = 'primary', size = 'small' }: SkillsProps) => {
  const SkillsCx = classNames(
    'rounded-md px-3 py-1',
    ColorCx[color as keyof typeof ColorCx],
    SizeCx[size as keyof typeof SizeCx],
  );

  return (
    <ul className="flex flex-row flex-wrap items-start justify-start gap-4 lg:pr-12">
      {skills.map(skill => (
        <li key={skill} className={SkillsCx}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
