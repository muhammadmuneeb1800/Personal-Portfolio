import { FaHtml5, FaLinkedin, FaJs, FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlinePhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { RxHome } from "react-icons/rx";
import { SiCplusplus, SiCss3, SiTypescript } from "react-icons/si";

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
