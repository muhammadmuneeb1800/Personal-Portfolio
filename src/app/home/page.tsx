import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";
import img from "../../../public/images/m.jpg";
import { FaDownload, FaWhatsapp } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export default function Home() {
  const number = "923251191492";
  const message = "Hello! I found your profile interesting. Can we connect?";
  const encodedMessage = encodeURIComponent(message);
  return (
    <div className="px-5 md:px-10">
      <Navbar />
      <section className="mt-20 w-full flex justify-center gap-10 items-center">
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
        <div className="w-[60%]">
          <p>Full Stack Developer--</p>
          <h1 className="text-3xl mt-2 md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Muhammad Muneeb
          </h1>
          <p className="text-lg mt-10 md:text-xl font-light">
            Full Stack Developer specializing in{" "}
            <strong className="font-bold">React.js</strong>,{"   "}
            <strong className="font-bold">Next.js</strong>,{"  "}
            <strong className="font-bold">React Native</strong>,{"  "}
            <strong className="font-bold">TypeScript</strong>, and modern
            frameworks. Crafting scalable, efficient, and user-friendly
            applications.I offer the best projects resulting in quality work.
          </p>
          <p className="mt-2">Let&rsquo;s build something amazing together!</p>
          <div className="flex items-center mt-20 gap-10">
            <Link
              href={`https://wa.me/${number}?text=${encodedMessage}`}
              target="_Blank"
              className="group flex shadow-2xl hover:scale-105 items-center gap-2 border bg-amber-600 border-amber-700 hover:bg-amber-900 text-xl font-semibold px-6 py-2 rounded-3xl text-white cursor-pointer transition-all duration-700"
            >
              <FaWhatsapp className="text-2xl" />
              <p>Let&rsquo;s Talk</p>
              <HiArrowNarrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <Link
              href="/path-to-resume.pdf" // Replace with the actual path to your resume
              download
              className="group flex items-center shadow-2xl gap-2 border-2 border-amber-700 hover:border-amber-900 text-xl font-semibold px-6 py-2 rounded-3xl text-amber-700 cursor-pointer transition-all duration-500 hover:scale-105"
            >
              <span>Get Resume</span>
              <FaDownload className="text-[20px] group-hover:animate-bounce" />
            </Link>
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
