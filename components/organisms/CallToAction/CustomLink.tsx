import Link from 'next/link';
import { CustomLinkProps } from './types';

const CustomLink = ({ children, type, href }: CustomLinkProps) => {
  if (!href) return null;
  return type === 'download' ? (
    <Link href={href} download className="mt-6" target="_blank">
      {children}
    </Link>
  ) : (
    <Link href={href}>{children}</Link>
  );
};

export default CustomLink;
