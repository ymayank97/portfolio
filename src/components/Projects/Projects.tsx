import React from "react";
import { ProjectCard } from "./ProjectCard";
import project1 from "/static/js.png";
import project2 from "/static/doctor.png";
import project3 from "/static/search.png";

const projects = [
  {
    title: "AWS Web Application Deployment",
    description:
      "Scalable web application with microservices architecture deployed on AWS using containerization and CI/CD pipelines.",
    technologies: ["AWS", "Python", "Pulumi", "Flask"],
    githubUrl: "https://github.com/ymayank97/EduGenix",
    imageUrl: project1,
  },
  {
    title: "Heart Failure Prediction App",
    description:
      "Machine learning application that predicts heart failure risk using patient data and advanced ML algorithms.",
    technologies: ["Python", "TensorFlow", "Flask", "Keras"],
    githubUrl: "https://github.com/ymayank97/Flask-Dashboard-for-heart-Disease",
    imageUrl: project2,
  },
  {
    title: "Semantic Search Engine",
    description:
      "Advanced search engine using NLP and vector embeddings to understand user intent and provide relevant results.",
    technologies: ["Python", "ElasticSearch", "BERT"],
    githubUrl:
      "https://github.com/ymayank97/CORD-19-Search-Engine-Using-Transformers",
    imageUrl: project3,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-[#F5F5F7]"
      style={{ marginTop: "0rem" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1D1D1F] mb-3">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-[#0071E3] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
