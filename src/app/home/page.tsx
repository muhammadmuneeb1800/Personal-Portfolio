import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineFilePdf } from "react-icons/ai";
import MyAnimation from "@/components/myAnimation/MyAnimation";
import {
  FOOTER_DATA,
  LINKS_ICONS,
  PROGRAMMIMG_FRAMWORS,
  PROGRAMMIMG_LANGUAGES,
  TOOLS,
} from "@/constants/constants";
import img from "../../../public/images/m.jpg";
import anSofto from "../../../public/images/softo.jpeg";
import Stats from "@/components/counter/Counter";
import { FaGithub } from "react-icons/fa6";
import EducationAni from "@/components/educationAni/EducationAni";
import EducationCard from "@/components/educationCard/EducationCard";

export default function Home() {
  const number = "923251191492";
  const message = "Hello! I found your profile interesting. Can we connect?";
  const encodedMessage = encodeURIComponent(message);
  return (
    <div className="px-5 md:px-15 bg-[#00040f]">
      <section className="pt-16 w-full flex justify-between gap-10 items-center">
        <div className="w-[60%]">
          <p className="text-cyan-500">Full Stack Developer--</p>
          <div>
            <h1 className="text-3xl text-white mt-2 md:text-4xl lg:text-7xl leading-24 font-bold">
              Hi there!
            </h1>
            <h1 className="text-3xl text-white md:text-4xl leading-20 -mt-2 lg:text-7xl font-bold">
              I am
            </h1>
            <h1 className="text-3xl bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:text-4xl leading-20 lg:text-7xl font-bold">
              Muhammad Muneeb
            </h1>
          </div>
          <p className="text-lg mt-5 leading-8 text-gray-400 md:text-xl font-light">
            Turning ideas into reality—A Pakistani Software Engineer on a
            mission to build, innovate, and inspire. Crafting scalable,
            efficient, and user-friendly applications.I offer the best projects
            resulting in quality work.
          </p>
          <div className="flex items-center gap-6 mt-6">
            {LINKS_ICONS.map(({ key, href, Icon }) => (
              <Link
                key={key}
                href={href}
                target="_Blank"
                className="text-white text-2xl hover:scale-125 hover:text-teal-300 duration-700 transition-all"
              >
                {<Icon />}
              </Link>
            ))}
          </div>
          <div className="flex items-center mt-8 gap-3">
            <Link
              href={`https://wa.me/${number}?text=${encodedMessage}`}
              target="_Blank"
              className="group flex items-center shadow-2xl hover:scale-125 bg-gradient-to-br gap-1 border to-cyan-600 from-cyan-200 font-semibold px-4 py-3 rounded text-black cursor-pointer transition-all duration-700"
            >
              <AiOutlineFilePdf className="text-sm" />
              <p className="text-[12px] mt-1 font-bold">CV</p>
            </Link>
            <Link
              href={`https://wa.me/${number}?text=${encodedMessage}`}
              target="_Blank"
              className="group flex shadow-2xl hover:scale-125 items-center gap-1 border bg-gradient-to-br from-cyan-200 to-cyan-600 font-semibold px-4 py-[14px] rounded text-black cursor-pointer transition-all duration-700"
            >
              <FaGithub className="text-sm" />
              <p className="text-[12px] font-bold">Star</p>
            </Link>
          </div>
        </div>
        <div className="w-[40%] flex justify-end">
          <div className="w-full">
            <MyAnimation />
          </div>
        </div>
      </section>
      {/* About me section */}
      <section className="mt-36 -ml-5 w-full flex justify-between items-center">
        <div className="w-[60%]">
          <h2 className="text-3xl w-[30%] relative group transition-all duration-500 text-white mt-2 md:text-4xl lg:text-5xl mb-10 font-bold">
            About Me
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-teal-400 transition-all duration-1000 group-hover:w-[15%]"></span>
          </h2>
          <p className="text-gray-400 text-[19px] font-light mt-4 leading-[29px]">
            My name is{" "}
            <span className="text-teal-500 font-bold">Muhammad Muneeb</span>. I
            am a software engineer with a passion for problem-solving, creating
            efficient solutions, and exploring new technologies. With experience
            in{" "}
            <span className="text-teal-500 font-bold">
              JavaScript, React and backend development
            </span>
            , I enjoy building scalable, user-focused applications.
          </p>
          <p className="text-gray-400 text-[19px] font-light mt-5 leading-[29px]">
            I&rsquo;m , a dedicated and passionate full-stack{" "}
            <span className="text-teal-500 font-bold">web apps (MERN) </span>{" "}
            and{" "}
            <span className="text-teal-500 font-bold">
              mobile apps (React Native)
            </span>{" "}
            software engineer from Faisalabad, PK. I have a strong foundation in
            modern technologies like{" "}
            <span className="text-teal-500 font-bold">
              next.js, react native, typescript, prisma{" "}
            </span>
            and <span className="text-teal-500 font-bold">graphQL</span>. My
            experience also extends to database management with{" "}
            <span className="text-teal-500 font-bold">firebase, mongoDB</span>{" "}
            and <span className="text-teal-500 font-bold">postgreSQL</span>
            ensuring data is handled securely and efficiently.
          </p>
          <p className="text-gray-400 text-[19px] font-light mt-5 leading-[29px]">
            I am currently pursuing a BS in Computer Science from{" "}
            <span className="text-teal-500 font-bold">
              Virtual University, Pakistan
            </span>
            , and I am also associated with{" "}
            <span className="text-teal-500 font-bold">TechloSet Solutions</span>
            , where I continue to refine my skills and gain industry-relevant
            experience.
          </p>
        </div>
        <div className="w-[30%] mt-20 -mr-14 flex justify-end items-center">
          <div className="border-4 border-teal-400">
            <Image src={img} alt="My-self" width={210} height={210} />
          </div>
        </div>
      </section>
      {/* Counter section */}
      <section className="mt-36">
        <Stats />
      </section>
      {/* Skill and Experience */}
      <section className="mt-40">
        <h1 className="text-3xl mb-36 w-[35%] relative group text-white mt-5 md:text-4xl lg:text-5xl font-bold">
          Skills & Experience
          <span className="absolute -bottom-2 left-0 w-0 h-1 transition-all duration-1000 group-hover:w-[20%] bg-teal-400"></span>
        </h1>
        <div className="flex justify-between mx-5">
          <div className="w-[50%]">
            <div className="border-l-1 pl-7 py-2 border-teal-200">
              <div className="flex mb-7 items-center gap-6">
                <div className="bg-white -ml-[35px] w-3 h-3 rounded-full"></div>
                <h1 className="text-[18px] font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:text-[19px] lg:text-[21px]">
                  Programming Languages
                </h1>
              </div>
              <div className="flex flex-wrap justify-around items-center gap-12 w-[50%]">
                {PROGRAMMIMG_LANGUAGES.map(({ key, Icon, title }) => (
                  <div
                    key={key}
                    className="text-gray-200 hover:text-teal-400 transition-all duration-500"
                  >
                    <Icon className="text-[30px]" />
                    <p className="text-gray-400 mt-1 text-[13px]">{title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-l-1 pl-7 mt-12 py-2 border-teal-200">
              <div className="flex mb-7 items-center gap-6">
                <div className="bg-white -ml-[35px] w-3 h-3 rounded-full"></div>
                <h1 className="text-[18px] font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:text-[19px] lg:text-[21px]">
                  Frameworks/Libraries
                </h1>
              </div>
              <div className="flex flex-wrap justify-around items-center gap-12 w-[50%]">
                {PROGRAMMIMG_FRAMWORS.map(({ key, Icon, title }) => (
                  <div
                    key={key}
                    className="text-gray-200 hover:text-teal-400 transition-all duration-500"
                  >
                    <Icon className="text-[31px]" />
                    <p className="text-gray-400 text-[13px]">{title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-l-1 pl-7 mt-12 py-2 border-teal-200">
              <div className="flex mb-7 items-center gap-6">
                <div className="bg-white -ml-[35px] w-3 h-3 rounded-full"></div>
                <h1 className="text-[18px] font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:text-[19px] lg:text-[21px]">
                  Tools
                </h1>
              </div>
              <div className="flex flex-wrap justify-around items-center gap-14 w-[50%]">
                {TOOLS.map(({ key, Icon, title }) => (
                  <div
                    key={key}
                    className="text-gray-200 hover:text-teal-400 transition-all duration-500"
                  >
                    <Icon className="text-[31px]" />
                    <p className="text-gray-400 text-[13px]">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <div className="-mt-14 -ml-6 flex items-center gap-3">
                <Image
                  src={anSofto}
                  alt="an softo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h1 className="text-[19px] font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:text-[20px] lg:text-[22px]">
                  An SoftoDev, Pakistan
                </h1>
              </div>
              <div className="border-l-1 pl-6 py-2 mt-5 border-teal-200">
                <div className="flex items-center gap-6">
                  <div className="bg-white -ml-[30px] w-3 h-3 rounded-full"></div>
                  <h1 className="text-[14px] font-semibold text-white md:text-[16px] lg:text-[18px]">
                    Software Developer
                  </h1>
                </div>
                <p className="text-teal-400 pl-2 mt-1 mb-5 text-[13px]">
                  Apr 2024 - Jan 2025
                </p>
                <div>
                  <p className="text-gray-400">
                    ➾ Developed modern web applications using HTML,CSS
                    JavaScript, contributing to diverse projects like eCommerce
                    and real estate.
                  </p>
                  <p className="text-gray-400 mt-4">
                    ➾ Implemented responsive UI/UX designs, optimized
                    performance, and integrated APIs to enhance functionality
                    and user experience.
                  </p>
                  <p className="text-gray-400 mt-5">
                    ➾ Implemented modern UI/UX principles, animations, and CSS
                    frameworks like Tailwind CSS and Bootstrap to enhance design
                    consistency and aesthetics.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-4 -ml-6 flex items-center gap-3">
                <Image
                  src={anSofto}
                  alt="an softo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h1 className="text-[19px] font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:text-[20px] lg:text-[22px]">
                  An SoftoDev, Pakistan
                </h1>
              </div>
              <div className="border-l-1 pl-6 py-2 mt-5 border-teal-200">
                <div className="flex items-center gap-6">
                  <div className="bg-white -ml-[30px] w-3 h-3 rounded-full"></div>
                  <h1 className="text-[14px] font-semibold text-white md:text-[16px] lg:text-[18px]">
                    Software Developer
                  </h1>
                </div>
                <p className="text-teal-400 pl-2 mt-1 mb-5 text-[13px]">
                  Apr 2024 - Jan 2025
                </p>
                <div>
                  <p className="text-gray-400">
                    ➾ Developed modern web applications using HTML,CSS
                    JavaScript, contributing to diverse projects like eCommerce
                    and real estate.
                  </p>
                  <p className="text-gray-400 mt-4">
                    ➾ Implemented responsive UI/UX designs, optimized
                    performance, and integrated APIs to enhance functionality
                    and user experience.
                  </p>
                  <p className="text-gray-400 mt-5">
                    ➾ Implemented modern UI/UX principles, animations, and CSS
                    frameworks like Tailwind CSS and Bootstrap to enhance design
                    consistency and aesthetics.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-5 -ml-6 flex items-center gap-3">
                <Image
                  src={anSofto}
                  alt="an softo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h1 className="text-[19px] font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:text-[20px] lg:text-[22px]">
                  An SoftoDev, Pakistan
                </h1>
              </div>
              <div className="border-l-1 pl-6 py-2 mt-5 border-teal-200">
                <div className="flex items-center gap-6">
                  <div className="bg-white -ml-[30px] w-3 h-3 rounded-full"></div>
                  <h1 className="text-[14px] font-semibold text-white md:text-[16px] lg:text-[18px]">
                    Software Developer
                  </h1>
                </div>
                <p className="text-teal-400 pl-2 mt-1 mb-5 text-[13px]">
                  Apr 2024 - Jan 2025
                </p>
                <div>
                  <p className="text-gray-400">
                    ➾ Developed modern web applications using HTML,CSS
                    JavaScript, contributing to diverse projects like eCommerce
                    and real estate.
                  </p>
                  <p className="text-gray-400 mt-4">
                    ➾ Implemented responsive UI/UX designs, optimized
                    performance, and integrated APIs to enhance functionality
                    and user experience.
                  </p>
                  <p className="text-gray-400 mt-5">
                    ➾ Implemented modern UI/UX principles, animations, and CSS
                    frameworks like Tailwind CSS and Bootstrap to enhance design
                    consistency and aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education section */}
      <section className="mt-40 text-gray-400 pb-16 px-10">
        <h1 className="text-3xl w-[35%] relative group text-white md:text-4xl font-semibold lg:text-5xl">
          EDUCATION
          <span className="absolute -bottom-2 left-0 w-0 h-1 transition-all duration-1000 group-hover:w-[20%] bg-teal-400"></span>
        </h1>
        <div className="mt-28 flex justify-between items-center">
          <div className="w-[42%]">
            <div className="w-full">
              <EducationAni />
            </div>
          </div>
          <div className="w-[50.5%]">
            <div>
              <EducationCard
                img={anSofto}
                title="Virtual University of Pakistan"
                subTitle="Bachelor of Computer Science"
                duration="March 2025 - Present"
                item1="Major: Software Engineering"
                item2="Grade: 3.78/4 CGPA (A+)"
              />
            </div>
            <div className="mt-10">
              <EducationCard
                img={anSofto}
                title="Virtual University of Pakistan"
                subTitle="Bachelor of Computer Science"
                duration="March 2025 - Present"
                item1="Major: Software Engineering"
                item2="Grade: 3.78/4 CGPA (A+)"
              />
            </div>
            <div className="mt-10">
              <EducationCard
                img={anSofto}
                title="Virtual University of Pakistan"
                subTitle="Bachelor of Computer Science"
                duration="March 2025 - Present"
                item1="Major: Software Engineering"
                item2="Grade: 3.78/4 CGPA (A+)"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        start new section
      </section>
      {/* Achivment Section */}
      <section className="mt-40 text-gray-400 pb-16 px-10">
        <h1 className="text-3xl w-[35%] relative group text-white md:text-4xl font-semibold lg:text-5xl">
          Achievements
          <span className="absolute -bottom-2 left-0 w-0 h-1 transition-all duration-1000 group-hover:w-[20%] bg-teal-400"></span>
        </h1>
      </section>
      {/* Contact section */}
      <section className="mt-40 text-gray-400 pb-16 px-10">
        <h1 className="text-3xl w-[35%] relative group text-white md:text-4xl font-semibold lg:text-5xl">
          LET&#39;S CONNECT!
          <span className="absolute -bottom-2 left-0 w-0 h-1 transition-all duration-1000 group-hover:w-[20%] bg-teal-400"></span>
        </h1>
        <div className="mt-12 flex justify-between items-center gap-14">
          <div className="w-[50%] p-7 rounded-lg bg-[#111827]">
            <p className="mt-2 text-xl">
              If you have any questions or concerns, please don&#39;t hesitate
              to contact me. I am open to any work opportunities that align with
              my skills and interests.
            </p>
            <div className="mt-4">
              {FOOTER_DATA.map(({ key, Icon, text, title }) => {
                return (
                  <div key={key} className="flex gap-5 mt-8">
                    <Icon className="text-teal-200 text-2xl mt-1" />
                    <div>
                      <p className="font-semibold text-lg">{title}</p>
                      <p>{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 mb-5 flex items-center gap-6">
              {LINKS_ICONS.map(({ key, href, Icon }) => (
                <Link
                  key={key}
                  href={href}
                  target="_Blank"
                  className="text-white text-2xl hover:scale-125 hover:text-cyan-300 duration-700 transition-all"
                >
                  {<Icon />}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[50%] text-gray-400 p-6 rounded-lg bg-[#111827]">
            <form>
              <div className="mt-5">
                <label htmlFor="name">Full Name</label>
                <input
                  required
                  id="name"
                  type="text"
                  className="w-full focus:ring-2 focus:outline-none text-white focus:ring-teal-400 mt-2 px-4 py-2 bg-[#374151] rounded-md"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email">Emails</label>
                <input
                  required
                  id="email"
                  type="email"
                  className="w-full focus:ring-2 focus:outline-none text-white focus:ring-teal-400 mt-2 px-4 py-2 bg-[#374151] rounded-md"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="text">Messages</label>
                <textarea
                  required
                  id="text"
                  rows={4}
                  cols={2}
                  className="w-full px-4 py-3 focus:ring-2 focus:outline-none text-white focus:ring-teal-400 mt-2 bg-[#374151] rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full mb-5 text-white font-semibold bg-teal-400 py-2 rounded-md mt-4"
              >
                Send Messages
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
