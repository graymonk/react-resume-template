import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * 页面元数据
 */
export const homePageMeta: HomepageMeta = {
  title: 'React 简历模板',
  description: '使用 Tim Baker 的 React 简历模板构建的示例网站',
};

/**
 * 区块定义
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * 首页区块
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `我是 Tim Baker`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        我是一名来自维多利亚的<strong className="text-stone-100">全栈软件工程师</strong>，目前在
        <strong className="text-stone-100">Instant Domains</strong>工作，致力于构建现代化、移动优先的域名注册和网站构建平台。
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        在空闲时间，你可以看到我在练习<strong className="text-stone-100">泰拳</strong>、弹奏
        <strong className="text-stone-100">班卓琴</strong>，或探索美丽的
        <strong className="text-stone-100">温哥华岛</strong>。
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: '简历',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: '联系我',
      primary: false,
    },
  ],
};

/**
 * 关于我区块
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `在这个简介部分，你可以描述自己、说明你的工作内容、你喜欢使用的技术或最熟悉的技能、描述你的个性，或者任何你想分享的内容。`,
  aboutItems: [
    {label: '地点', text: '维多利亚，不列颠哥伦比亚', Icon: MapIcon},
    {label: '年龄', text: '29', Icon: CalendarIcon},
    {label: '国籍', text: '加拿大 / 爱尔兰', Icon: FlagIcon},
    {label: '兴趣', text: '摩托车、泰拳、班卓琴', Icon: SparklesIcon},
    {label: '学历', text: '维多利亚大学', Icon: AcademicCapIcon},
    {label: '就职', text: 'Instant Domains 公司', Icon: BuildingOffice2Icon},
  ],
};

/**
 * 技能区块
 */
export const skills: SkillGroup[] = [
  {
    name: '语言能力',
    skills: [
      {
        name: '英语',
        level: 10,
      },
      {
        name: '法语',
        level: 4,
      },
      {
        name: '西班牙语',
        level: 3,
      },
    ],
  },
  {
    name: '前端开发',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: '后端开发',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: '移动开发',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * 作品集区块
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: '项目标题 1',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: '项目标题 2',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: '项目标题 3',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: '项目标题 4',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: '项目标题 5',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: '项目标题 6',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: '项目标题 7',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: '项目标题 8',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: '项目标题 9',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: '项目标题 10',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: '项目标题 11',
    description: '在这里简要描述你的项目。',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * 简历区块
 */
export const education: TimelineItem[] = [
  {
    date: '2007年4月',
    location: '小丑学院',
    title: '啤酒品鉴硕士',
    content: <p>描述你在学校的经历、所学内容、获得的有用技能等。</p>,
  },
  {
    date: '2003年3月',
    location: '商学院',
    title: '你学习的专业 101',
    content: <p>描述你在学校的经历、所学内容、获得的有用技能等。</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2010年3月 - 至今',
    location: '优秀开发公司',
    title: '高级用户体验工程师',
    content: <p>描述工作内容、特殊项目、突出成就、使用的技术，以及任何对雇主有用的其他信息。</p>,
  },
  {
    date: '2007年3月 - 2010年2月',
    location: '车库创业工作室',
    title: '初级问题修复工程师',
    content: <p>描述工作内容、特殊项目、突出成就、使用的技术，以及任何对雇主有用的其他信息。</p>,
  },
];

/**
 * 推荐区块
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: '利用这个机会展示与你合作的感受。高价值的推荐包括来自现任或前任同事、经理或满意客户的评价。',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: '在这里你应该写一些别人对你说的好话。鼓励他们具体并包括重要细节（关于你们一起参与的项目的注释、产出的优秀质量等）。',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: '其他人',
      text: '添加几条这样的推荐，并保持它们尽可能新鲜，但要确保专注于高质量的推荐，突出你的技能/工作态度。',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * 联系区块
 */

export const contact: ContactSection = {
  headerText: '联系我',
  description: '这是一个很好的位置，向你的读者传达如何最好地与你联系。',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: '加拿大不列颠哥伦比亚省维多利亚',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * 社交媒体
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];

