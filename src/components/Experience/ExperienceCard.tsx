import React from 'react';

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
    <div className="bg-gray-800 rounded-lg p-6 relative">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white">{company}</h3>
        <p className="text-blue-400 font-medium">{role}</p>
        <p className="text-gray-400 text-sm">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}