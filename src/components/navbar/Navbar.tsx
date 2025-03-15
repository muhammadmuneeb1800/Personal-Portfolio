import Image from "next/image";
import React from "react";
import img from "../../../public/images/logo-removebg-preview.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center py-4">
        <div>
          <Image src={img} alt="Logo" width={80} height={80} />
        </div>
        <div className="flex justify-center items-center gap-8">
          <Link
            href="#"
            className="font-medium text-lg transition-all duration-500 ease-in-out group"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-yellow-400 transition duration-300"
          >
            About Me
          </Link>
          <Link
            href="#"
            className="hover:text-yellow-400 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="#"
            className="hover:text-yellow-400 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
