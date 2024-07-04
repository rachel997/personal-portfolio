import Image from 'next/image';
import Link from 'next/link';
import Button from '@atoms/Button/Button';
import Container from '@atoms/Container/Container';
import Heading from '@atoms/Heading/Heading';
import IconsList from '@organisms/IconsList/IconsList';
import JobInfo from '@organisms/JobInfo/JobInfo';
import ResumeSection from './ResumeSection';
import TagCloud from '@molecules/TagCloud/TagCloud';
import TextContent from '@molecules/TextContent/TextContent';
import { ResumeProps } from './types';
import decor from '@images/decor.svg';

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
  const { name, position, yearsOfExperience, yearsOfExperienceLabel, bio } =
    summary;
  const { title: extendedSummaryTitle, bio: extendedBio } = extendedSummary;
  const { jobs, link } = employmentHistory;
  const { title: skillsTitle, elements: skillsList } = skills;
  const { title: toolsTitle, elements: toolsList } = tools;
  const { title: languagesTitle, elements: languagesList } = languages;

  return (
    <section id={sectionID ?? ''} className="pt-16 sm:pt-28 scroll-mt-16">
      <Container>
        <div className="border border-divider p-8 sm:p-12 rounded-xl bg-interface-200">
          <Heading>{heading}</Heading>
          <div className="flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:items-bottom mt-12 gap-y-16">
            <div className="w-full xl:w-1/3">
              <div className="flex flex-col sm:flex-row items-start justify-start sm:justify-between gap-y-4 gap-x-4">
                <div>
                  <Heading tag={3} size={4}>
                    {name}
                  </Heading>
                  <span>{position}</span>
                </div>
                <div className="flex flex-row items-center justify-start gap-x-3">
                  <span className="text-primary text-4xl font-bold leading-none">
                    {yearsOfExperience}
                  </span>
                  <span className="leading-tight max-w-24">
                    {yearsOfExperienceLabel}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start items-center gap-y-3 border-t border-divider pt-5 mt-5">
                <div className="flex flex-col justify-start items-start gap-y-3 ">
                  <TextContent paragraphs={bio} className="w-full" />
                </div>
              </div>
            </div>
            <Image
              src={decor}
              alt='Decor image for "Resume" section'
              className="hidden xl:block"
            />
            <div className="w-full xl:w-1/3">
              <ul className="flex flex-col gap-y-5">
                {jobs.map(job => {
                  if (!job) return null;
                  const {
                    id,
                    title,
                    subtitle,
                    isHighlighted,
                    badge,
                    hightlightedBadge,
                  } = job;
                  return (
                    <li key={id}>
                      <JobInfo
                        key={id}
                        title={title}
                        subtitle={subtitle}
                        isHighlighted={isHighlighted}
                        badge={badge}
                        hightlightedBadge={hightlightedBadge}
                      />
                    </li>
                  );
                })}
              </ul>
              {link.href && link.text && (
                <Link href={link.href} className="mt-4 inline-block">
                  <Button size="sm" color="secondary">
                    {link.text}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 mt-16 gap-y-12">
            <ResumeSection title={skillsTitle}>
              <TagCloud tags={skillsList} size="big" color="interface-300" />
            </ResumeSection>
            <div className="flex flex-col justify-start items-start gap-y-10">
              <ResumeSection title={languagesTitle} className="w-full">
                <TagCloud tags={languagesList} size="big" color="primary" />
              </ResumeSection>
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
