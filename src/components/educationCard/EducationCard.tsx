import Image, { StaticImageData } from "next/image";
import React from "react";

interface imageProps {
  img: string | StaticImageData;
  title: string;
  subTitle: string;
  duration: string;
  item1?: string;
  item2?: string;
}

export default function EducationCard({
  img,
  title,
  subTitle,
  duration,
  item1,
  item2,
}: imageProps) {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-3xl backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <Image
          src={img}
          alt="an softo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="text-[19px] font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:text-[20px] lg:text-[22px]">
            {title}
          </h1>
          <p className="text-white mt-1">{subTitle}</p>
        </div>
      </div>
      <div className="ml-16 text-gray-400">
        <p className="mt-2">{duration}</p>
        <li className="mt-2">{item1}</li>
        <li className="mt-2 text-gray-400">{item2}</li>
      </div>
    </div>
  );
}
