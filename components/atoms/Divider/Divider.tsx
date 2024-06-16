import classNames from 'classnames';
import { DividerProps } from './types';

const Divider = ({ gapClass }: DividerProps) => {
  const dividerCx = classNames(gapClass ? gapClass : 'my-10', 'border-divider');

  return <hr className={dividerCx} />;
};

export default Divider;
