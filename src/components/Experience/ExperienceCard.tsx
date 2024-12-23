import React from "react";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#0071E3]/20"></div>

      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#0071E3]"></div>

      {/* Year marker */}
      <div className="absolute left-4 top-1 text-sm font-medium text-[#0071E3]">
        {period.split(" - ")[0]}
      </div>

      <div className="bg-[#F5F5F7] rounded-2xl p-6 shadow-sm ml-8">
        <div className="mb-4">
          <h3 className="text-xl font-medium text-[#1D1D1F]">{company}</h3>
          <p className="text-[#0071E3] font-medium text-sm">{role}</p>
          <p className="text-[#86868B] text-sm">{period}</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-[#1D1D1F] text-sm font-light mb-4">
          {description.map((item, index) => (
            <li key={index} className="pl-2">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#FBFBFD] text-sm text-[#1D1D1F] rounded-lg font-light"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
