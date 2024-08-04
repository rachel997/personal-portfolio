import Background from './Background';
import Button from '@atoms/Button/Button';
import Container from '@atoms/Container/Container';
import CustomLink from './CustomLink';
import Heading from '@atoms/Heading/Heading';
import PhotoDisclaimer from '@molecules/PhotoDisclaimer/PhotoDisclaimer';
import { CallToActionProps } from './types';

const CallToAction = ({
  image,
  sectionID,
  heading,
  content,
  link,
  disclaimer,
}: CallToActionProps) => {
  const { href, text, icon, type } = link || {};

  return (
    <section
      id={sectionID ?? ''}
      className="mt-16 sm:mt-28 relative py-16 sm:py-28 scroll-mt-16"
    >
      <Background image={image} />
      <Container className="relative z-1 grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8 sm:px-16 text-center lg:text-left">
        <Heading className="flex flex-col items-start justify-start">
          {heading}
        </Heading>
        <div className="flex flex-col items-center lg:items-start justify-center">
          <p className="text-lg">{content}</p>
          <CustomLink type={type} href={href}>
            <Button icon={icon} iconHoverDirection="bottom" tabindex={-1}>
              {text}
            </Button>
          </CustomLink>
        </div>
      </Container>
      {disclaimer && <PhotoDisclaimer {...disclaimer} />}
    </section>
  );
};

export default CallToAction;
