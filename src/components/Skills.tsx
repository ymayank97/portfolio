import React from 'react';

const skills = {
  'Programming Languages': ['JavaScript/TypeScript', 'Python', 'Java', 'SQL'],
  'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'Redux'],
  'Backend': ['Node.js', 'Express', 'Django', 'Spring Boot'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  'Machine Learning': ['TensorFlow', 'PyTorch', 'scikit-learn', 'NLP'],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill} className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-300">{skill}</span>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                      <div
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                        className="animate-pulse bg-gradient-to-r from-blue-400 to-teal-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}