import { LINKS_ICONS } from "@/constants/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-white px-5 text-center md:px-15 bg-[#111827]">
      <div className="flex justify-center items-center gap-6 pt-5">
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
      <button className="mt-5 text-[18px] text-black font-semibold bg-teal-400 px-5 py-1 rounded-md">
        Say Hello!
      </button>
      <p className="text-sm text-gray-400 font-semibold mt-4 pb-5">
        Made with 💙 by{" "}
        <span className="text-teal-200 font-bold">Muhammad Muneeb</span> & the
        Open Source Community
      </p>
    </div>
  );
}
