import React from "react";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    company: "Goldman Sachs",
    role: "Senior Software Engineer",
    period: "2021 - Present",
    description: [
      "Led development of high-frequency trading platform using Java and React",
      "Implemented real-time data processing pipeline handling millions of transactions",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["Java", "React", "Spring Boot", "Kafka"],
  },
  {
    company: "AVL",
    role: "Software Engineer",
    period: "2019 - 2021",
    description: [
      "Developed automotive testing software solutions",
      "Optimized data collection and analysis workflows",
      "Reduced testing time by 40% through automation",
    ],
    technologies: ["Python", "C++", "Qt", "PostgreSQL"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12 bg-[#FBFBFD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#1D1D1F] mb-3">
            Professional Experience
          </h2>
          <div className="w-12 h-0.5 bg-[#0071E3] mx-auto"></div>
        </div>
        <div className="relative mt-8 max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
