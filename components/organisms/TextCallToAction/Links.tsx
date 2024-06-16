import { Fragment } from 'react';
import Link from 'next/link';
import { LinksProps } from './types';

const Links = ({ links }: LinksProps) => {
  return (
    <div className="mt-6 flex flex-col justify-center items-center gap-y-1">
      {links.map(({ text, href, icon: Icon, iconTitle }, i) => {
        return (
          <Fragment key={text}>
            {i !== 0 && <span className="font-light text-lg">or</span>}
            <span className="flex flex-row gap-x-3 justify-center items-center">
              {Icon && (
                <Icon
                  className="text-primary text-xl sm:text-2xl"
                  title={iconTitle}
                />
              )}
              <Link
                href={href}
                className="font-medium text-lg sm:text-xl animated-line"
              >
                {text}
              </Link>
            </span>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Links;
