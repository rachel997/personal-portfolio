import classNames from 'classnames';
import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import JobInfo from '@organisms/JobInfo/JobInfo';
import { TimelineProps } from './Timeline.types';

const Timeline = ({ sectionID, heading, elements }: TimelineProps) => {
  const elementsLength = elements ? elements.length : 0;

  return (
    <section id={sectionID ?? ''} className="pt-16 sm:pt-28 scroll-mt-16">
      <Container>
        <div className="text-center">
          <div className="relative text-center inline-block">
            <Heading customClass="w-60 sm:w-auto">{heading}</Heading>
            <div className="stroke-decor w-60 sm:w-108 h-5 absolute left-0 right-0 mx-auto bottom-9 sm:bottom-0 z-minus-1"></div>
          </div>
        </div>
        {elements && elementsLength > 0 && (
          <ul className="mt-10 sm:mt-14 xl:px-24 flex flex-col justify-start items-start gap-y-20 lg:gap-y-8 relative">
            <li className="w-1 h-full bg-divider absolute top-0 inset-x-0 mx-auto"></li>
            {elements.map(
              (
                {
                  id,
                  title,
                  subtitle,
                  description,
                  tiles,
                  isHighlighted,
                  badge,
                  hightlightedBadge,
                },
                i,
              ) => {
                const wrapperClass = classNames(
                  'w-full',
                  (i + 1) % 2 !== 0 && 'flex flex-row items-start justify-end',
                );
                const blockClass = classNames(
                  'relative w-full lg:w-1/2',
                  (i + 1) % 2 === 0 ? 'lg:pr-10' : 'lg:pl-10',
                );
                const roundedDecorClass = classNames(
                  'w-6 h-6 absolute inset-x-0 lg:inset-x-unset -bottom-12 lg:inset-y-0 absolute mx-auto lg:mx-unset lg:my-auto bg-primary rounded-full',
                  (i + 1) % 2 === 0 ? 'lg:-right-3' : 'lg:-left-3',
                  i + 1 === elementsLength && 'hidden lg:block',
                );
                const lineDecorClass = classNames(
                  'hidden lg:block w-1 h-1/2 bg-interface-100 absolute',
                  (i + 1) % 2 === 0 ? '-right-0.5' : '-left-0.5',
                  i === 0 && 'top-0',
                  i + 1 === elementsLength && 'bottom-0',
                );
                return (
                  <li key={id} className={wrapperClass}>
                    <div className={blockClass}>
                      {(i === 0 || i + 1 === elementsLength) && (
                        <div className={lineDecorClass}></div>
                      )}
                      <div className={roundedDecorClass}>
                        <div className="w-3 h-3 absolute top-0 left-0 right-0 bottom-0 m-auto bg-interface-100 rounded-full"></div>
                      </div>
                      <div className="border border-divider p-6 rounded-xl bg-interface-200">
                        <JobInfo
                          title={title}
                          subtitle={subtitle}
                          description={description}
                          tiles={tiles}
                          isHighlighted={isHighlighted}
                          badge={badge}
                          hightlightedBadge={hightlightedBadge}
                        />
                      </div>
                    </div>
                  </li>
                );
              },
            )}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default Timeline;
