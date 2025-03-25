"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("lottie-react").then((mod) => mod.default),
  { ssr: false }
);

const EducationAni = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/icons/education.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAnimationData(data))
      .catch((error) => {
        console.error("Error loading animation:", error);
      });
  }, []);

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full bg-black"
    />
  );
};

export default EducationAni;
