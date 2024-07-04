import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import IconsList from '@organisms/IconsList/IconsList';
import ResumeSection from './ResumeSection';
import Summary from './Summary';
import TagsSection from './TagsSection';
import TextContent from '@molecules/TextContent/TextContent';
import { ResumeProps } from './types';

const Resume = ({
  sectionID,
  heading,
  summary,
  extendedSummary,
  employmentHistory,
  skills,
  tools,
  languages,
}: ResumeProps) => {
  const { title: extendedSummaryTitle, bio: extendedBio } = extendedSummary;
  const { title: toolsTitle, elements: toolsList } = tools;

  return (
    <section id={sectionID ?? ''} className="pt-16 sm:pt-28 scroll-mt-16">
      <Container>
        <div className="border border-divider p-8 sm:p-12 rounded-xl bg-interface-200">
          <Heading>{heading}</Heading>
          <Summary {...summary} {...employmentHistory} />
          <div className="grid sm:grid-cols-2 mt-16 gap-y-12">
            <TagsSection {...skills} tagSize="big" tagColor="interface-300" />
            <div className="flex flex-col justify-start items-start gap-y-10">
              <TagsSection {...languages} tagSize="big" tagColor="primary" />
              <ResumeSection title={toolsTitle} className="w-full">
                <IconsList icons={toolsList} />
              </ResumeSection>
            </div>
          </div>
          <ResumeSection title={extendedSummaryTitle} className="mt-16">
            <TextContent paragraphs={extendedBio} className="w-full" />
          </ResumeSection>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
