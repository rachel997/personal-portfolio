import Copyrights from './Copyrights';
import Divider from '@atoms/Divider/Divider';
import TextCallToAction from '@organisms/TextCallToAction/TextCallToAction';

import { footerData } from '@/data/footer.data';

const { heading, description, links, copyright } = footerData;

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-16">
      {heading && description && links && (
        <TextCallToAction
          heading={heading}
          content={description}
          links={links}
        />
      )}
      <Divider gapClass="m-0" />
      <Copyrights text={copyright} />
    </footer>
  );
};

export default Footer;
