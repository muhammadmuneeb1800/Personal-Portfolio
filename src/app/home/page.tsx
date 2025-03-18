import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";
import img from "../../../public/images/m.jpg";
import { FaDownload, FaWhatsapp } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import { LINKS_ICONS } from "@/constants/constants";

export default function Home() {
  const number = "923251191492";
  const message = "Hello! I found your profile interesting. Can we connect?";
  const encodedMessage = encodeURIComponent(message);
  return (
    <div className="px-5 md:px-15 bg-[#00040f]">
      <Navbar />
      <section className="mt-20 w-full flex justify-center gap-10 items-center">
        <div className="w-[60%]">
          <p className="text-cyan-500">Full Stack Developer--</p>
          <div>
            <h1 className="text-3xl text-white mt-2 md:text-4xl lg:text-7xl leading-24 font-bold">
              Hi there!
            </h1>
            <h1 className="text-3xl text-white md:text-4xl leading-20 -mt-2 lg:text-7xl font-bold">
              i am
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
          <div className="flex items-center mt-8 gap-10">
            <Link
              href={`https://wa.me/${number}?text=${encodedMessage}`}
              target="_Blank"
              className="group flex shadow-2xl hover:scale-105 items-center gap-2 border bg-cyan-600 border-cyan-700 text-xl font-semibold px-6 py-2 rounded-3xl text-white cursor-pointer transition-all duration-700"
            >
              <p>CV</p>
            </Link>
            <Link
              href="/path-to-resume.pdf"
              download
              className="group flex items-center shadow-2xl gap-2 border-2 border-amber-700 hover:border-amber-900 text-xl font-semibold px-6 py-2 rounded-3xl text-amber-700 cursor-pointer transition-all duration-500 hover:scale-105"
            >
              <span>Get Resume</span>
              <FaDownload className="text-[20px] group-hover:animate-bounce" />
            </Link>
          </div>
        </div>
        <div className="w-[40%] flex justify-end">
          <div className="p-1 shadow-2xl border-8 border-black rounded-full">
            <Image
              src={img}
              alt="hero image"
              width={400}
              height={400}
              className="rounded-full border-8 border-amber-900"
            />
          </div>
        </div>
      </section>

      {/* About me section */}

      <section className="mt-20 w-full flex justify-between items-center">
        <div className="w-[60%] justify-end">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl font-light mt-5">
            About Me I&rsquo;m Muhammad Muneeb, a dedicated and passionate Web
            and Mobile App Developer with a strong foundation in modern
            technologies like Next.js, React Native, TypeScript, Prisma, and
            GraphQL. My journey in development started with a deep curiosity
            about how digital products are built, which soon transformed into a
            passion for creating user-friendly, efficient, and scalable
            applications. Over time, I&rsquo;ve honed my skills by working on
            diverse projects, ranging from simple web designs to complex
            applications. I&rsquo;ve gained hands-on experience in both frontend
            and backend development, specializing in frameworks like React,
            Next.js, and building robust APIs using TypeGraphQL and Prisma. My
            experience also extends to database management with MongoDB and
            PostgreSQL, ensuring data is handled securely and efficiently. One
            of my proudest achievements includes participating in the TechloSet
            Bootcamp, where I worked on real-world projects, collaborated with
            peers, and learned best practices for writing clean and maintainable
            code. I&rsquo;ve also developed a task management app using React
            Native, and I&rsquo;m currently working on building dynamic data
            visualization with charts in Next.js. I believe in writing clean,
            scalable, and maintainable code, focusing on performance and user
            experience. Whether it&rsquo;s building authentication systems with
            JWT, OAuth, integrating databases, or developing dynamic UIs, I
            approach every challenge with dedication and a problem-solving
            mindset. Looking ahead, I aim to deepen my expertise in backend
            development, explore more about GraphQL APIs, and take on projects
            that challenge my skills and push my creative boundaries. When
            I&rsquo;m not coding, I enjoy learning about the latest trends in
            technology, enhancing my skills, and contributing to the development
            community. I&rsquo;m always open to exciting projects and
            collaborations, so let&rsquo;s connect and build something amazing
            together! 🚀
          </p>
        </div>
        <div>gglgl</div>
      </section>
    </div>
  );
}
