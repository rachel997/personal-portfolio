import Link from 'next/link';
import { CustomLinkProps } from './types';

const CustomLink = ({ text, href }: CustomLinkProps) => {
  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="nofollow"
      className="hover:underline focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
    >
      {text}
    </Link>
  ) : (
    text
  );
};

export default CustomLink;
