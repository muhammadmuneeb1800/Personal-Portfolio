import Image from "next/image";
import React from "react";
import img from "../../../public/images/logo-removebg-preview.png";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 md:px-20 bg-blue-300">
        <div className="">
          <Image src={img} alt="Logo" width={70} height={10} />
        </div>
        <div className="flex justify-center -mt-1 items-center gap-10">
          <Link
            href={"#"}
            className="font-semibold text-amber-950 transition-all duration-700"
          >
            Home
          </Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Services</Link>
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Contact Me</Link>
        </div>
      </div>
    </>
  );
}
