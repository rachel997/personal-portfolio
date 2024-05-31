import { MdOutlineEmail, MdPhoneInTalk } from 'react-icons/md';
import decor from '@images/decor-2.svg';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export const footerData = {
  image: {
    src: decor,
    alt: 'Background image for "Contact with me" section',
  },
  heading: "Let's stay in touch",
  description:
    'I am always happy to discuss new opportunities. Please feel free to reach out to me, and we can go over the details together.',
  links: [
    {
      text: 'rachelamarkwica@gmail.com',
      href: 'mailto:rachelamarkwica@gmail.com',
      icon: MdOutlineEmail,
      iconTitle: 'E-mail address',
    },
    {
      text: '+48 690 013 595',
      href: 'tel:+48690013595',
      icon: MdPhoneInTalk,
      iconTitle: 'Phone number',
    },
  ],
  copyright: `Copyright © ${currentYear} – All rights reserved.`,
};
