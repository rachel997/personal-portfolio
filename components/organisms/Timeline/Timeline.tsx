import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import JobInfo from '@organisms/JobInfo/JobInfo';
import { TimelineProps } from './types';
import { uiCx } from './utils';

const Timeline = ({ sectionID, heading, elements }: TimelineProps) => {
  const elementsLength = elements ? elements.length : 0;

  return (
    <section id={sectionID ?? ''} className="pt-16 sm:pt-28 scroll-mt-16">
      <Container>
        <div className="text-center">
          <div className="relative text-center inline-block">
            <Heading className="w-60 sm:w-auto">{heading}</Heading>
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
                const { wrapperCx, blockCx, roundedDecorCx, lineDecorCx } =
                  uiCx(i, elementsLength);
                return (
                  <li key={id} className={wrapperCx}>
                    <div className={blockCx}>
                      {(i === 0 || i + 1 === elementsLength) && (
                        <div className={lineDecorCx}></div>
                      )}
                      <div className={roundedDecorCx}>
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
