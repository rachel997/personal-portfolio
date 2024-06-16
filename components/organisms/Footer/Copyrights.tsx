import Link from 'next/link';
import Container from '@atoms/Container/Container';
import { CopyrightsProps } from './types';

const Copyrights = ({ text }: CopyrightsProps) => {
  return (
    <Container className="text-center py-6">
      <p>{text ? text : 'Copyright © All rights reserved.'}</p>
      <p className="mt-2 text-sm">
        Graphic design by{' '}
        <Link
          href="https://themeforest.net/user/quomodotheme"
          rel="nofollow"
          target="_blank"
          className="animated-line"
        >
          QuomodoTheme
        </Link>
      </p>
    </Container>
  );
};

export default Copyrights;
