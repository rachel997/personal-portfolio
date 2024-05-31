import classNames from 'classnames';
import { DividerProps } from './Divider.types';

const Divider = ({ gapClass }: DividerProps) => {
  const finalClasses = classNames(
    gapClass ? gapClass : 'my-10',
    'border-divider',
  );

  return <hr className={finalClasses} />;
};

export default Divider;
