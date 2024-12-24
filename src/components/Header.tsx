import React from "react";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#FBFBFD]/80 backdrop-blur-md z-50 border-b border-[#86868B]/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div>
            <span className="text-lg font-semibold text-[#1D1D1F]">
              Mayank Yadav
            </span>
            <span className="ml-2 text-sm text-[#1D1D1F]">
              Software Engineer
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ymayank97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/mayank-yadav97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="/static/MayankYadav.pdf"
              download="MayankYadav.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
