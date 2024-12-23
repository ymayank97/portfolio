import React from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "AWS Web Application Deployment",
    description:
      "Scalable web application with microservices architecture deployed on AWS using containerization and CI/CD pipelines.",
    technologies: ["AWS", "Docker", "Node.js", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://aws-webapp.demo",
    imageUrl:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Heart Failure Prediction App",
    description:
      "Machine learning application that predicts heart failure risk using patient data and advanced ML algorithms.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    githubUrl: "https://github.com",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Semantic Search Engine",
    description:
      "Advanced search engine using NLP and vector embeddings to understand user intent and provide relevant results.",
    technologies: ["Python", "ElasticSearch", "BERT", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://semantic-search.demo",
    imageUrl:
      "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&w=800&q=80",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-[#1D1D1F] mb-3">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-[#0071E3] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
