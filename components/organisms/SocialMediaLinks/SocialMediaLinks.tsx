import Link from 'next/link';
import Container from '@atoms/Container/Container';
import { SocialMediaLinksProps } from './SocialMediaLinks.types';

const SocialMediaLinks = ({ sectionID, elements }: SocialMediaLinksProps) => {
  return (
    <section id={sectionID ?? ''} className="pt-16 sm:pt-28">
      <Container customClass="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
        {elements &&
          elements.length > 0 &&
          elements.map(({ href, label, icon: Icon }) => {
            return (
              <Link
                href={href}
                target="_blank"
                className="transition-all border border-dashed border-white/20 bg-white/[.02] rounded-xl font-semibold text-lg sm:text-xl lg:text-2xl text-white py-8 px-6 flex flex-row items-center justify-center gap-x-2 hover:bg-primary hover:text-interface-100 hover:border-solid hover:border-primary"
                key={label}
              >
                <Icon />
                {label}
              </Link>
            );
          })}
      </Container>
    </section>
  );
};

export default SocialMediaLinks;
