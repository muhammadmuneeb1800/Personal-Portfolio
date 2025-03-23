import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/constants";

export default function Navbar() {
  return (
    <nav className="px-5 md:px-15 bg-[#00040f]">
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center gap-1 select-none">
          <p className="text-cyan-300 text-4xl font-bold">{"{"}</p>
          <p className="text-white mt-2 font-semibold">{"M MUNEEB"}</p>
          <p className="text-cyan-300 text-4xl font-bold">{"}"}</p>
        </div>
        <div className="flex justify-center items-center gap-14">
          {NAV_LINKS?.map(({ href, name }) => (
            <Link
              key={name}
              href={href}
              className="font-medium text-white hover:text-cyan-500 text-lg transition-all duration-500 ease-in-out group"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
