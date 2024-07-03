import classNames from 'classnames';
import { TextContentProps } from './types';

const TextContent = ({ paragraphs, className }: TextContentProps) => {
  const textContentCx = classNames(
    'flex flex-col justify-start items-start gap-y-3',
    className,
  );
  return (
    <div className={textContentCx}>
      {paragraphs.map(paragraph => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
};

export default TextContent;
