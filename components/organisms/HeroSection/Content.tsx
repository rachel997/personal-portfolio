import Link from 'next/link';
import Button from '@atoms/Button/Button';
import Heading from '@atoms/Heading/Heading';
import { ContentProps } from './types';

const Content = ({ title, subtitle, content, link }: ContentProps) => {
  const { headline, subheadline } = title || {};
  const { href, text, icon } = link;

  return (
    <>
      <Heading tag={1} className="text-center lg:text-start">
        {headline}
        {subheadline && (
          <>
            <br />
            {subheadline}
          </>
        )}
      </Heading>
      <div className="inline-block relative">
        <Heading
          tag={2}
          size="custom"
          className="text-xl sm:text-3xl xl:text-3.5xl"
        >
          {subtitle}
        </Heading>
        <div className="stroke-decor w-full h-5 absolute left-0 -bottom-1 sm:bottom-0 xl:bottom-2 z-minus-1 hidden sm:block"></div>
      </div>
      <p className="text-lg sm:text-xl mt-8 text-center lg:text-left">
        {content}
      </p>
      <Link
        href={href}
        className="mt-8 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-pink"
      >
        <Button icon={icon} tabindex={-1}>
          {text}
        </Button>
      </Link>
    </>
  );
};

export default Content;
