import Link from 'next/link';
import { CustomLinkProps } from './types';

const CustomLink = ({ text, href }: CustomLinkProps) => {
  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="nofollow"
      className="hover:underline"
    >
      {text}
    </Link>
  ) : (
    text
  );
};

export default CustomLink;
