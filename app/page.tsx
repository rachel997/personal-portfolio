import CallToAction from '@organisms/CallToAction/CallToAction';
import HeroSection from '@organisms/HeroSection/HeroSection';
import Resume from '@organisms/Resume/Resume';
import Timeline from '@organisms/Timeline/Timeline';
import SocialMediaLinks from '@organisms/SocialMediaLinks/SocialMediaLinks';

import {
  employmentHistoryData,
  homepageCtaData,
  resumeData,
  socialMediaData,
  heroSectionData,
} from '@/data/homepage.data';

const HomePage = () => {
  return (
    <>
      <HeroSection {...heroSectionData} />
      <SocialMediaLinks {...socialMediaData} />
      <Resume {...resumeData} />
      <Timeline {...employmentHistoryData} />
      <CallToAction {...homepageCtaData} />
    </>
  );
};

export default HomePage;
