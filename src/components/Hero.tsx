import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-6xl font-semibold text-gray-900 mb-6">
              Hello
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              I craft elegant solutions to complex problems through code.
              Currently building high-performance trading systems at Goldman Sachs.
            </p>
            
            {/* Tech Stack */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Profile Image */}
          <div className="hidden lg:block">
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl opacity-50 blur-3xl" />
              <img
                src="../../../images/austin2.jpg"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}