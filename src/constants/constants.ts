import {
  FaHtml5,
  FaLinkedin,
  FaJs,
  FaPython,
  FaReact,
  FaBootstrap,
  FaNode,
  FaSlack,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlinePhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { RxHome } from "react-icons/rx";
import {
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiGit,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
  SiRedux,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

export const LINKS_ICONS = [
  {
    key: 1,
    href: "https://www.linkedin.com/in/muhammadmuneeb1800",
    Icon: FaLinkedin,
  },
  { key: 2, href: "https://github.com/muhammadmuneeb1800", Icon: FaGithub },
  { key: 3, href: "mailto:muhammadmuneeb1800@gmail.com", Icon: IoMdMail },
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/" },
  { name: "Services", href: "/" },
  { name: "Projects", href: "/" },
  { name: "Contact Me", href: "/" },
];

export const FOOTER_DATA = [
  { key: 1, Icon: AiOutlinePhone, title: "Phone", text: "+92 3251191492" },
  {
    key: 2,
    Icon: GoMail,
    title: "Email",
    text: "muhammadmuneeb1800@gmail.com",
  },
  { key: 3, Icon: RxHome, title: "Location", text: "Faisalabad, Pakistan" },
];

export const PROGRAMMIMG_LANGUAGES = [
  { key: 4, Icon: FaJs, title: "JavaScript" },
  { key: 5, Icon: SiTypescript, title: "Typescript" },
  { key: 6, Icon: FaPython, title: "Python" },
  { key: 1, Icon: SiCplusplus, title: "C++" },
  { key: 2, Icon: FaHtml5, title: "HTML" },
  { key: 3, Icon: SiCss3, title: "CSS" },
];

export const PROGRAMMIMG_FRAMWORS = [
  { key: 4, Icon: FaReact, title: "ReactJS" },
  { key: 5, Icon: SiNextdotjs, title: "Next.js" },
  { key: 1, Icon: RiTailwindCssFill, title: "Tailwind CSS" },
  { key: 6, Icon: FaBootstrap, title: "Bootstrap" },
  { key: 2, Icon: GrGraphQl, title: "GraphQL" },
  { key: 13, Icon: SiRedux, title: "Redux/Toolkit" },
  { key: 7, Icon: SiMongodb, title: "MongoDB" },
  { key: 8, Icon: FaNode, title: "Node.js" },
  { key: 9, Icon: SiExpress, title: "Express.js" },
  { key: 10, Icon: IoLogoFirebase, title: "Firebase" },
  { key: 11, Icon: BiLogoPostgresql, title: "Postgres" },
  { key: 12, Icon: SiPrisma, title: "Prisma" },
];

export const TOOLS = [
  { key: 4, Icon: FaGithub, title: "Github" },
  { key: 5, Icon: SiGit, title: "Git" },
  { key: 6, Icon: VscVscode, title: "VS Code" },
  { key: 1, Icon: SiPostman, title: "Postman" },
  { key: 2, Icon: SiMysql, title: "MySQL" },
  { key: 7, Icon: SiNetlify, title: "Netlify" },
  { key: 9, Icon: SiVite, title: "ViteJS" },
  { key: 8, Icon: IoLogoVercel, title: "Vercel" },
  { key: 10, Icon: FaSlack, title: "Slack" },
];
