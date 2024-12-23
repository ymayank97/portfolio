import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-[#FBFBFD] rounded-2xl overflow-hidden shadow-sm transition-transform hover:scale-[1.02]">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-medium text-[#1D1D1F] mb-2">{title}</h3>
        <p className="text-[#86868B] text-sm font-light mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#F5F5F7] text-sm text-[#1D1D1F] rounded-lg font-light"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
