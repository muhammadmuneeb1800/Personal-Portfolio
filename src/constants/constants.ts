import { FaHome, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

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
  { icon: FaPhone, title: "Phone", text: "+92 3251191492" },
  { icon: IoMdMail, title: "Email", text: "muhammadmuneeb1800@gmail.com" },
  { icon: FaHome, title: "Location", text: "Faisalabad, Pakistan" },
];
