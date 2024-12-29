import React from "react";

const skills = {
  "Programming Languages": ["Python", "Java", "SQL", "JavaScript/TypeScript"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD"],
  Databases: ["PostgreSQL", "SQL", "DynamoDB", "Elasticsearch"],
  "Machine Learning": ["TensorFlow", "PyTorch", "scikit-learn", "NLP"],
  "AWS Cloud Services": [
    "CloudWatch",
    "Lambda Function",
    "ECS",
    "Step Function",
  ],
  Backend: ["Flask", "Node.js", "Django", "Spring Boot"],
};

export function Skills() {
  return (
    <section id="skills" className="py-12 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-[#1D1D1F] mb-3">
            Technical Skills
          </h2>
          <div className="w-12 h-0.5 bg-[#0071E3] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-[#FBFBFD] rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-[#1D1D1F] mb-4">
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill} className="relative pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-light text-[#1D1D1F]">
                        {skill}
                      </span>
                    </div>
                    <div className="overflow-hidden h-1.5 text-xs flex rounded-full bg-[#F5F5F7]">
                      <div
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                        className="animate-pulse bg-gradient-to-r from-[#0071E3] to-[#40A9FF]"
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
