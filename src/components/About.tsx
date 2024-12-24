import React from "react";
import { Award, Code, Database, Cloud } from "lucide-react";
import headshot from "/static/austin2.jpg";

export function About() {
  return (
    <section id="about" className="pt-4 pb-12 bg-[#FBFBFD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-[#1D1D1F] mb-3">About Me</h2>
          <div className="w-12 h-0.5 bg-[#0071E3] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-md mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0071E3] to-[#00C6FF] opacity-75 blur-lg"></div>
              <img
                src={headshot}
                alt="headshot"
                className="relative rounded-2xl shadow-lg w-full aspect-square object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[#1D1D1F] text-lg font-light leading-relaxed">
              With a Master's in Information Systems and extensive experience in
              software engineering, I specialize in building scalable
              applications and implementing innovative solutions.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-[#F5F5F7] rounded-2xl">
                <Code className="w-6 h-6 text-[#0071E3] mb-2" />
                <h3 className="text-[#1D1D1F] font-medium text-sm">
                  Full-Stack Development
                </h3>
              </div>
              <div className="p-4 bg-[#F5F5F7] rounded-2xl">
                <Cloud className="w-6 h-6 text-[#0071E3] mb-2" />
                <h3 className="text-[#1D1D1F] font-medium text-sm">
                  Cloud Architecture
                </h3>
              </div>
              <div className="p-4 bg-[#F5F5F7] rounded-2xl">
                <Database className="w-6 h-6 text-[#0071E3] mb-2" />
                <h3 className="text-[#1D1D1F] font-medium text-sm">
                  Data Engineering
                </h3>
              </div>
              <div className="p-4 bg-[#F5F5F7] rounded-2xl">
                <Award className="w-6 h-6 text-[#0071E3] mb-2" />
                <h3 className="text-[#1D1D1F] font-medium text-sm">
                  AWS Certified
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
