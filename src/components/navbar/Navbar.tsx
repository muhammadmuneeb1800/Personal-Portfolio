import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center gap-1 select-none">
          <p className="text-cyan-300 text-4xl">{"{"}</p>
          <p className="text-white mt-2 font-bold">{"M MUNEEB"}</p>
          <p className="text-cyan-300 text-4xl">{"}"}</p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <Link
            href="#"
            className="font-medium text-white hover:text-cyan-500 text-lg transition-all duration-500 ease-in-out group"
          >
            Home
          </Link>
          <Link
            href="#"
            className=" text-white hover:text-cyan-500 transition duration-300"
          >
            About Me
          </Link>
          <Link
            href="#"
            className=" text-white hover:text-cyan-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="#"
            className=" text-white hover:text-cyan-500 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="#"
            className=" text-white hover:text-cyan-500 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
