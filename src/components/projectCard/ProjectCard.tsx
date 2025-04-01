import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

interface projectCardProps {
  img?: string | StaticImageData | undefined;
  title?: string;
  Icon1?: IconType;
  Icon2?: IconType;
  Icon3?: IconType;
  Icon4?: IconType;
  para?: string;
  git?: string;
  link?: string;
}

export default function ProjectCard(props: projectCardProps) {
  return (
    <div className="border border-white rounded-xl py-7 px-12 min-h-96">
      <div className="flex items-center gap-7">
        <div className="border-white border-4 flex justify-center items-center w-28 h-28 rounded-full p-2">
          <Image
            src={props?.img as string}
            alt="related-logo"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-2xl font-bold bg-gradient-to-tr from-cyan-600 to-cyan-100 bg-clip-text text-transparent">
            {props?.title}
          </p>
          <p className="mt-3">Tech Stack</p>
          <div className="flex items-center gap-4 text-xl mt-3">
            {props?.Icon1 && <props.Icon1 />}
            {props?.Icon2 && <props.Icon2 />}
            {props?.Icon3 && <props.Icon3 />}
            {props?.Icon4 && <props.Icon4 />}
          </div>
        </div>
      </div>
      <div className="px-5">
        <p className="mt-5 text-gray-400">{props?.para}</p>
        <div className="flex items-center gap-2 text-white mt-4">
          <Link href={props?.git || "#"}>
            <FaGithub className="text-3xl" />
          </Link>
          <Link href={props?.link || "#"}>
            <IoIosLink className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
