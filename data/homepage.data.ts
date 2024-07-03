import { FiDownload } from 'react-icons/fi';
import { SiVisualstudiocode } from 'react-icons/si';
import {
  FaFigma,
  FaGithub,
  FaJira,
  FaLinkedin,
  FaNpm,
  FaWordpress,
} from 'react-icons/fa';
import { SiEslint } from 'react-icons/si';
import { HiOutlineArrowRight } from 'react-icons/hi';
import background from '@images/cta-bg.webp';
import heroBackground from '@images/hero-background.svg';
import heroImage from '@images/hero-image.webp';

export const homepageCtaData = {
  sectionID: 'download-cv',
  image: {
    src: background,
    alt: 'Background image for "Download my CV" section',
  },
  heading: 'Are you seeking for a new team member? 🕵️',
  content:
    'Seek no more! I truly believe that I will become a good fit for your team and that we can build awesome things together.',
  link: {
    href: '/CV_Rachela_Markwica.pdf',
    text: 'Download CV',
    icon: FiDownload,
    type: 'download',
  },
  disclaimer: {
    author: 'Nicole Wolf',
    authorHref:
      'https://unsplash.com/@joeel56?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    source: 'Unsplash',
    sourceHref:
      'https://unsplash.com/photos/girl-using-desktop-computer-in-room-CZ9AjMGKIFI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  },
};

const timelineElements = [
  {
    title: 'Front-end developer [React]',
    subtitle: 'Travcorp Poland',
    description: [
      'I built and maintained web applications using Scrum teamwork methods. I worked with an international team, and my clear English communication kept things smooth. I especially enjoyed creating a complex sales app with features specific to different travel brands, making it easier for users. I then used my skills to build an app that captured leads through user-friendly forms. My expertise in React and JavaScript allowed me to tackle these projects confidently.',
    ],
    tiles: [
      'React',
      'Redux',
      'TypeScript',
      'JavaScript',
      'Jest',
      'Next.js',
      'HTML',
      'CSS',
      'SASS',
      'GIT',
      'Github',
      'Figma',
      'Scrum',
      'Jira',
    ],
    isHighlighted: false,
    badge: '09/2022 - 10/2023',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Front-end developer / WordPress Developer / WordPress Team Leader',
    subtitle: 'Acclaim',
    description: [
      'I built beautiful and user-friendly websites from scratch using WordPress CMS. My focus on detail ensured pixel-perfect results and a great user experience. I also used ACF Pro and Gutenberg blocks to make development faster and more efficient. I prioritised website speed and consistently achieved perfect 100/100 PageSpeed scores.',
      "I wasn't limited to websites. I also built dynamic web applications using React and Next.js. I integrated them with headless CMS solutions like Strapi or Sanity. My strong foundation in both JavaScript and React ensured I could effectively utilize these technologies and deliver successful projects.",
      'Promoted into a Team Lead role after a few months, I led teams of 2-6 developers. I have learned how to build a strong team and deliver projects on time. I juggled client collaboration, workload organization, and leading meetings to keep everyone aligned and on track.',
    ],
    tiles: [
      'React',
      'JavaScript',
      'Next.js',
      'HTML',
      'CSS',
      'SASS',
      'WordPress',
      'Woocommerce',
      'PHP',
      'GIT',
      'Github',
      'Figma',
      'Scrum',
      'ClickUp',
      'Team leadership',
    ],
    isHighlighted: false,
    badge: '09/2020 - 08/2022',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Co-founder & Frontend Developer',
    subtitle: 'SliceWeb',
    description: [
      'I co-founded and built my own company, gaining valuable experience in all aspects of running a business. I strategized marketing campaigns, managed finances, and tackled projects that required programming and graphic design skills. This journey not only sharpened my technical skills but also made me a stronger strategist and problem-solver, ready to navigate the complexities of any business environment.',
    ],
    tiles: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'WordPress',
      'UX',
      'Graphic design',
      'Management',
      'Team leadership',
      'SASS',
    ],
    isHighlighted: false,
    badge: '02/2015 - 08/2020',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Wordpress Developer / Graphic Designer',
    subtitle: 'Crovan Media',
    description: [
      'Crafted user-friendly WordPress websites from the ground up. Each project was designed with a focus on clean aesthetics and a smooth user experience. My dedication to detail ensures pixel-perfect websites that deliver a seamless user experience.',
    ],
    tiles: [
      'HTML',
      'CSS',
      'JavaScript',
      'WordPress',
      'PHP',
      'Graphic design',
      'UX',
    ],
    isHighlighted: false,
    badge: '08/2018 - 09/2019',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Frontend Magento Developer',
    subtitle: 'Xantum',
    description: [
      'I build user-friendly Magento stores with clean code, ensuring a smooth and enjoyable experience for customers. Crafted user-friendly websites using WordPress. I leveraged my skills in theme customization, plugin integration, and best practices.',
    ],
    tiles: ['HTML', 'CSS', 'JavaScript', 'Magento', 'PHP', 'WordPress'],
    isHighlighted: false,
    badge: '08/2016 - 08/2018',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Junior Front End Developer',
    subtitle: 'eSky.pl',
    description: [
      'During my time at eSky.pl, I learned frontend development and gained valuable experience and knowledge in programming. This opportunity significantly enhanced my skills as a Frontend Developer.',
    ],
    tiles: ['HTML', 'CSS', 'JavaScript'],
    isHighlighted: false,
    badge: '06/2016 - 08/2016',
    hightlightedBadge: 'Current',
  },
].map((element, i) => {
  return { ...element, id: i };
});

export const employmentHistoryData = {
  sectionID: 'employment-history',
  heading: 'Employment history',
  elements: timelineElements,
};

const latest3Jobs = timelineElements.filter((job, i) => i < 3 && job);

const toolsList = [
  {
    label: 'Visual Studio Code',
    icon: SiVisualstudiocode,
  },
  {
    label: 'Figma',
    icon: FaFigma,
  },
  {
    label: 'NPM',
    icon: FaNpm,
  },
  {
    label: 'Github',
    icon: FaGithub,
  },
  {
    label: 'Eslint',
    icon: SiEslint,
  },
  {
    label: 'Jira',
    icon: FaJira,
  },
  {
    label: 'WordPress',
    icon: FaWordpress,
  },
].map((element, i) => {
  return { ...element, id: i };
});

export const resumeData = {
  sectionID: 'resume',
  heading: 'Resume',
  summary: {
    name: 'Rachela Markwica',
    position: 'Front-end developer',
    yearsOfExperience: 4,
    yearsOfExperienceLabel: 'Years Experience',
    bio: [
      "Creative Front-End Developer with a passion for building beautiful and functional UIs. I thrive in collaborative environments and have experience leading small teams. I'm a quick learner who's always eager to grow and bring a positive, communicative approach to every project. My current learning plan, besides front-end related technologies, is to learn more about backend technologies (especially Node.js).",
    ],
  },
  extendedSummary: {
    title: 'More about me',
    bio: [
      "Putting work aside, I try to be as active as possible. First of all, I'm in love with Japan and Japanese culture. Therefore, I'm learning the Japanese language and training martial arts, specifically Oyama Karate. I have a blue belt with a yellow stripe (7th kyu) and have plans to achieve even more.",
      "Besides karate, I'm also a frequent gym guest, working towards achieving a healthy lifestyle.",
      "Not only do I love to work out, but I'm also a keen book reader and literature lover. My interests aren't limited to reading – I'm trying to write my own novel, and sometimes I even create short stories.",
      "My third love is gaming. I especially love RPG games and platformers (Mario forever!). I value a good gaming experience, creative level design, and great stories. I'm also obsessed with logical riddles – if a game has them, count me in!",
      'I also have two small, black voids, also known as my beloved cats.',
    ],
  },
  employmentHistory: {
    jobs: latest3Jobs,
    link: {
      href: '#employment-history',
      text: 'See all',
    },
  },
  skills: {
    title: 'Skills',
    elements: [
      'React',
      'JavaScript',
      'TypeScript',
      'Redux',
      'SOLID',
      'OOP',
      'Tailwind',
      'SASS',
      'CSS',
      'CSS 3',
      'HTML',
      'HTML 5',
      'Jest',
      'GIT',
      'Github / Bitbucket / Gitlab',
      'REST API',
      'SQL',
      'MySQL',
      'Postgresql',
      'Eslint',
      'Next.js',
      'GraphQL',
      'PHP',
      'Scrum',
      'JIRA',
      'ClickUp',
      'Agile',
      'Bootstrap',
      'Figma',
      'Adobe XD',
      'Team Leadership',
      'WordPress',
      'Woocommerce',
      'UX',
      'Graphic Design',
    ],
  },
  tools: {
    title: 'Tools I use',
    elements: toolsList,
  },
  languages: {
    title: 'Languages',
    elements: ['English - C1', 'Polish - Native', 'Japanese - Begginer'],
  },
};

export const socialMediaData = {
  elements: [
    {
      href: 'https://github.com/rachel997',
      label: 'Github',
      icon: FaGithub,
    },
    {
      href: 'https://www.linkedin.com/in/rachela-markwica-7a213ab4/',
      label: 'LinkedIn',
      icon: FaLinkedin,
    },
  ],
};

export const heroSectionData = {
  title: {
    headline: '👋 Hey, I am',
    subheadline: 'Rachela Markwica',
  },
  subtitle: 'Front-end Developer',
  content: 'Always keen to learn and explore new opportunities.',
  link: {
    href: '#download-cv',
    text: 'Hire me',
    icon: HiOutlineArrowRight,
  },
  backgroundImage: heroBackground,
  image: heroImage,
};
