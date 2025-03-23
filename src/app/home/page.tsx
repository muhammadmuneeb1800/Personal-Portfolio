import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineFilePdf } from "react-icons/ai";
import MyAnimation from "@/components/myAnimation/MyAnimation";
import { FOOTER_DATA, LINKS_ICONS } from "@/constants/constants";
import img from "../../../public/images/m.jpg";
import Stats from "@/components/counter/Counter";
import { FaGithub } from "react-icons/fa6";

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
            Turning ideas into reality—A Pakistani Software Developer on a
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
                className="text-white text-2xl hover:scale-125 hover:text-cyan-300 duration-700 transition-all"
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
      <section className="mt-20 -ml-5 w-full flex justify-between items-center">
        <div className="w-[60%]">
          <h2 className="text-3xl text-white mt-2 md:text-4xl lg:text-5xl leading-24 font-bold">
            About Me
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
      <section className="mt-28">
        <Stats />
      </section>
      {/* Contact section */}
      <section className="mt-40 text-gray-400 pb-16 px-10">
        <h1 className="text-3xl text-white md:text-4xl font-semibold lg:text-5xl">
          LET&#39;S CONNECT!
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
                <label htmlFor="email">Email</label>
                <input
                  required
                  id="email"
                  type="email"
                  className="w-full focus:ring-2 focus:outline-none text-white focus:ring-teal-400 mt-2 px-4 py-2 bg-[#374151] rounded-md"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="text">Message</label>
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
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
