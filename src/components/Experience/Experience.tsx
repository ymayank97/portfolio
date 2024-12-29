import React from "react";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    company: "Goldman Sachs",
    role: "Software Engineer",
    period: "2024 - Present",
    description: [
      "Developed and deployed robust Java Spring Boot APIs, integrating with Kafka to automate the client Demand Deposit Account closure process based on eligibility criteria.",
      "Upgraded Spring Boot for 10+ Java microservices for annual security and performance enhancement.",
      "Ensured stability of production systems by monitoring alerts and resolving critical incidents using PagerDuty.",
    ],
    technologies: ["Java", "AWS", "Spring Boot", "Kafka"],
  },
  {
    company: "Railpod",
    role: "Software Engineer",
    period: "2022 - 2022",
    description: [
      "Developed a full-stack React/Django application with advanced document and image management features for 500+ users.",
      "Engineered Laplace-based algorithm, translated to JavaScript for image processing, cutting manual interventions by 30%.",
      "Automated rail track charting with Matplotlib, replacing manual Matlab/CAD processes and boosting efficiency by 80%.",
    ],
    technologies: ["Python", "Django", "React", "AWS", "PostgreSQL"],
  },
  {
    company: "AVL",
    role: "Software Engineer",
    period: "2019 - 2021",
    description: [
      "Led a 3-engineer team to create a Flask/React labeling tool, incorporating OAuth SSO, boosting efficiency by 40%.",
      "Augmented search efficiency by 45% using BERT embeddings and Annoy’s vectorized querying on 1M records.",
      "Enhanced F1 scores by 30% utilizing a fine-tuned BERT model for precisely categorizing service requests.",
      "Deployed a Flask-based analytics framework for emissions testing, optimizing 30-minute Drive Cycles from 5TB of data.",
    ],
    technologies: ["Python", "Flask", "NLP", "SQL"],
  },
  {
    company: "Agbe Technologies",
    role: "Software Development Intern",
    period: "2018 – 2018",
    description: [
      "Managed YetConnect, an enterprise communication project, and added User Signup with image upload and online attendance functionality, leading to an increase of 10% in client reach.",
      "Migrated application from PHP5 to PHP7, decreased app load time by about 30%, and supported UI team.",
    ],
    technologies: ["PHP", "JavaScript", "MySQL"],
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
