import React from 'react';
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    company: 'Goldman Sachs',
    role: 'Senior Software Engineer',
    period: '2021 - Present',
    description: [
      'Led development of high-frequency trading platform using Java and React',
      'Implemented real-time data processing pipeline handling millions of transactions',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['Java', 'React', 'Spring Boot', 'Kafka'],
  },
  {
    company: 'AVL',
    role: 'Software Engineer',
    period: '2019 - 2021',
    description: [
      'Developed automotive testing software solutions',
      'Optimized data collection and analysis workflows',
      'Reduced testing time by 40% through automation',
    ],
    technologies: ['Python', 'C++', 'Qt', 'PostgreSQL'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}