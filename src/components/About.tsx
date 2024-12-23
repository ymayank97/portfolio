import React from "react";
import { Award, Code, Database, Cloud } from "lucide-react";

export function About() {
  return (
    <section id="about" className="pt-4 pb-12 bg-[#FBFBFD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-[#1D1D1F] mb-3">About Me</h2>
          <div className="w-12 h-0.5 bg-[#0071E3] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80"
              alt="Professional headshot"
              className="rounded-2xl shadow-lg w-full aspect-square object-cover"
            />
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
