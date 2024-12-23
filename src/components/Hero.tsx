import React from "react";
import { ArrowRight, Brain, Code2, Coffee, Globe2 } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-[95vh] relative overflow-hidden bg-gradient-to-r from-[#FBFBFD] to-[#E3F2FD] flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-6xl font-semibold text-[#1D1D1F] mb-6 animate-fade-in">
            <span className="text-[#0071E3]">Hello,</span> I'm Mayank
          </h1>
          <p className="text-2xl text-[#1D1D1F] mb-8 leading-relaxed font-normal animate-fade-in delay-1s">
            A Software Engineer with a passion for{" "}
            <span className="text-[#0071E3]">AI & Machine Learning</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#F5F5F7] p-4 rounded-2xl shadow-lg transform transition-transform hover:scale-105">
              <Brain className="w-6 h-6 text-[#0071E3] mx-auto mb-2" />
              <p className="text-sm text-[#1D1D1F] font-normal">
                AWS ML Nanodegree Graduate
              </p>
            </div>
            <div className="bg-[#F5F5F7] p-4 rounded-2xl shadow-lg transform transition-transform hover:scale-105">
              <Code2 className="w-6 h-6 text-[#0071E3] mx-auto mb-2" />
              <p className="text-sm text-[#1D1D1F] font-normal">
                Harvard Hackathon Winner
              </p>
            </div>
            <div className="bg-[#F5F5F7] p-4 rounded-2xl shadow-lg transform transition-transform hover:scale-105">
              <Globe2 className="w-6 h-6 text-[#0071E3] mx-auto mb-2" />
              <p className="text-sm text-[#1D1D1F] font-normal">
                2 Countries Worked In
              </p>
            </div>
            <div className="bg-[#F5F5F7] p-4 rounded-2xl shadow-lg transform transition-transform hover:scale-105">
              <Coffee className="w-6 h-6 text-[#0071E3] mx-auto mb-2" />
              <p className="text-sm text-[#1D1D1F] font-normal">
                Coffee & Code Enthusiast
              </p>
            </div>
          </div>

          <p className="text-lg text-[#1D1D1F] mb-8 leading-relaxed font-normal max-w-3xl mx-auto animate-fade-in delay-2s">
            From building high-frequency trading systems at Goldman Sachs to
            winning hackathons at Harvard, I blend technical expertise with
            creative problem-solving. Currently exploring the intersection of AI
            and financial technology in Boston.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {[
              "Java",
              "Python",
              "AWS",
              "Machine Learning",
              "Spring",
              "React",
              "Microservices",
              "Cloud Architecture",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-[#F5F5F7] text-[#1D1D1F] rounded-lg text-sm font-normal shadow-md transform transition-transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-[#0071E3] text-white rounded-full hover:bg-[#0077ED] transition-colors text-sm font-medium shadow-lg transform transition-transform hover:scale-105"
            >
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://github.com/ymayank97"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-[#0071E3] text-[#0071E3] rounded-full hover:bg-[#0071E3] hover:text-white transition-colors text-sm font-medium shadow-lg transform transition-transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0071E3]/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
    </div>
  );
}
