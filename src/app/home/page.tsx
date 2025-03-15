import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";
import img from "../../../public/images/m.jpg";

export default function Home() {
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
        <div className="w-[50%]">
          <p>Full Stack Developer</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Muhammad Muneeb
          </h1>
          <p className="text-lg md:text-xl font-light mt-1">
            -- a passionate Web and Mobile App Developer with expertise in
            Next.js, React Native, TypeScript, and modern frameworks. I&rsquo;m
            dedicated to crafting clean, efficient, and scalable solutions. With
            hands-on experience in databases like MongoDB and PostgreSQL, and a
            solid grasp of authentication systems and API development, I
            transform ideas into functional, user-friendly applications.
          </p>
          <p>Let&rsquo;s build something amazing together!</p>
          <div className="flex items-center mt-5 gap-10">
            <button>Let&rsquo;s Talk</button>
            <button>Daownload Resume</button>
          </div>
        </div>
      </section>

      {/* About me section */}

      <section className="mt-20 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
          About Me
        </h2>
        <p className="text-lg md:text-xl font-light mt-5">
          {/* Muhammad Muneeb is a highly motivated and dedicated software developer
          with a passion for building scalable and efficient applications. He
          has a strong background in web and mobile development, with a deep
          understanding of Next.js, React Native, TypeScript, and modern
          JavaScript frameworks. He has worked on various projects, including
          e-commerce platforms, digital marketing campaigns, and personalized
          recommendations systems. Muneeb is always eager to learn and grow, and
          he is excited to contribute to the community by helping others achieve
          their goals. */}
          About Me I&rsquo;m Muhammad Muneeb, a dedicated and passionate Web and
          Mobile App Developer with a strong foundation in modern technologies
          like Next.js, React Native, TypeScript, Prisma, and GraphQL. My
          journey in development started with a deep curiosity about how digital
          products are built, which soon transformed into a passion for creating
          user-friendly, efficient, and scalable applications. Over time,
          I&rsquo;ve honed my skills by working on diverse projects, ranging
          from simple web designs to complex applications. I&rsquo;ve gained
          hands-on experience in both frontend and backend development,
          specializing in frameworks like React, Next.js, and building robust
          APIs using TypeGraphQL and Prisma. My experience also extends to
          database management with MongoDB and PostgreSQL, ensuring data is
          handled securely and efficiently. One of my proudest achievements
          includes participating in the TechloSet Bootcamp, where I worked on
          real-world projects, collaborated with peers, and learned best
          practices for writing clean and maintainable code. I&rsquo;ve also
          developed a task management app using React Native, and I&rsquo;m
          currently working on building dynamic data visualization with charts
          in Next.js. I believe in writing clean, scalable, and maintainable
          code, focusing on performance and user experience. Whether it&rsquo;s
          building authentication systems with JWT, OAuth, integrating
          databases, or developing dynamic UIs, I approach every challenge with
          dedication and a problem-solving mindset. Looking ahead, I aim to
          deepen my expertise in backend development, explore more about GraphQL
          APIs, and take on projects that challenge my skills and push my
          creative boundaries. When I&rsquo;m not coding, I enjoy learning about
          the latest trends in technology, enhancing my skills, and contributing
          to the development community. I&rsquo;m always open to exciting
          projects and collaborations, so let&rsquo;s connect and build
          something amazing together! 🚀
        </p>
      </section>
    </div>
  );
}
