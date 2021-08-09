import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docdro.id/ZXqOjAs', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [

  {
    id: nanoid(),
    img: 'Going-Once-Cover.png',
    title: 'Sustainability App',
    info: 'Going Once is an app that puts recycling, stooping and community into its users fingertips.',
    info2: '',
    url: '/goingonce',
    repo: 'https://www.figma.com/proto/C138pCE67HwXMe59iTKmMU/Going-Once?node-id=83%3A2744&scaling=scale-down&page-id=51%3A148&starting-point-node-id=83%3A1944&show-proto-sidebar=1', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'MoorecoOutletThumbnail.jpeg',
    title: 'Furniture E-Commerce App',
    info: 'MooreCo Outlet is an E-Commerce App for furniture specializing in the WFH market.',
    info2: '',
    url: '/ecommerce',
    repo: 'https://www.figma.com/proto/jA6OZoisU9XkuvY8cxSJT4/MooreCo-Outlet-E-Commerce-Store?page-id=56%3A1569&node-id=56%3A1634&viewport=469%2C407%2C0.07514500617980957&scaling=scale-down&starting-point-node-id=56%3A1634', // if no repo, the button will not show up
  },
  
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
