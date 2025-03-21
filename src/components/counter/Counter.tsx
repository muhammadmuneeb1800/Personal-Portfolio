"use client";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 8, suffix: "+", label: "Technologies Mastered" },
    { value: 20, suffix: "+", label: "Projects Completed" },
    { value: 250, suffix: "+", label: "Code Commits" },
  ];

  return (
    <div className="flex justify-around text-center text-white">
      {stats.map((stat, index) => (
        <div key={index}>
          <h2 className="text-4xl font-bold">
            <CountUp
              start={0}
              end={stat.value}
              duration={5}
              suffix={stat.suffix}
            />
          </h2>
          <p className="text-teal-200 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
