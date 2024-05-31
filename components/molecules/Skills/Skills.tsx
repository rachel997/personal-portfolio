import classNames from 'classnames';
import { SkillsProps } from './Skills.types';

const Skills = ({ skills, color = 'primary', size = 'small' }: SkillsProps) => {
  const classes = classNames(
    'rounded-md px-3 py-1',
    color === 'primary' && 'bg-primary text-interface-100',
    color === 'interface-300' && 'bg-interface-300',
    size === 'small' && 'text-sm',
    size === 'big' && 'text-lg lg:text-xl',
  );

  return (
    <ul className="flex flex-row flex-wrap items-start justify-start gap-4 lg:pr-12">
      {skills.map(skill => (
        <li key={skill} className={classes}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
