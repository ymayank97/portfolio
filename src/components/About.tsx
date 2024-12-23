import React from 'react';
import { Award, Code, Database, Cloud } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
              alt="Professional headshot"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              With a Master's in Information Systems and extensive experience in software engineering,
              I specialize in building scalable applications and implementing innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <Code className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold">Full-Stack Development</h3>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <Cloud className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold">Cloud Architecture</h3>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <Database className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold">Data Engineering</h3>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <Award className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold">AWS Certified</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}