import Link from 'next/link';
import { CustomLinkProps } from './types';

const CustomLink = ({ children, type, href }: CustomLinkProps) => {
  if (!href) return null;
  const cx =
    'mt-6 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-pink';
  return type === 'download' ? (
    <Link href={href} download className={cx} target="_blank">
      {children}
    </Link>
  ) : (
    <Link href={href} className={cx}>
      {children}
    </Link>
  );
};

export default CustomLink;
