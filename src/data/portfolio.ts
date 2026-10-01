export const profile = {
  name: 'Mayank Yadav',
  email: 'sde.mayankyadav@gmail.com',
  phone: '+1 (857) 294-4762',
  github: 'https://github.com/ymayank97',
  linkedin: 'https://www.linkedin.com/in/mayank-yadav97/',
  // Replace with a public https:// URL to link an externally hosted resume.
  resume: 'resume.pdf',
};

export const projects = [
  {
    number: '01',
    title: 'AWS web application & CI/CD',
    summary: 'from infrastructure to deployment, automated.',
    description: 'A Flask application deployed on AWS EC2 with infrastructure as code in Pulumi and CI/CD through GitHub Actions. Assignment submissions trigger a serverless Lambda workflow for email notifications and zip uploads to Google Cloud.',
    technologies: ['AWS', 'Flask', 'Pulumi', 'GitHub Actions'],
    details: ['CloudFront', 'ALB', 'Route 53', 'SNS', 'DynamoDB', 'SQS'],
    githubUrl: 'https://github.com/ymayank97/EduGenix',
  },
  {
    number: '02',
    title: 'Heart failure prediction',
    summary: 'patient data into a clearer picture of heart health.',
    description: 'An interactive web application for cardiovascular health prediction, built with Flask, Plotly, and Pandas. Logistic Regression and Random Forest models achieved 89% prediction accuracy.',
    technologies: ['Python', 'Flask', 'scikit-learn', 'Plotly'],
    details: ['Pandas', 'HTML / CSS'],
    githubUrl: 'https://github.com/ymayank97/Flask-Dashboard-for-heart-Disease',
  },
  {
    number: '03',
    title: 'Semantic search engine',
    summary: 'finding meaning across 100k+ research papers.',
    description: 'A semantic search engine for COVID-19 research that retrieves papers by meaning. Transformer embeddings and Meta AI’s Faiss power vector analysis across more than 100,000 papers.',
    technologies: ['Python', 'Transformers', 'Faiss', 'NLP'],
    details: [],
    githubUrl: 'https://github.com/ymayank97/CORD-19-Search-Engine-Using-Transformers',
  },
];

export const experiences = [
  {
    company: 'Goldman Sachs',
    initials: 'GS',
    role: 'Software Engineer',
    period: 'May 2024 — present',
    location: 'Dallas, US',
    description: [
      'Built Spring Boot APIs and Kafka workflows for 40+ features, integrating 230+ APIs across four teams to automate processing.',
      'Engineered Claude skills for CI/CD, dependency, and IaC automation, saving 100+ engineering hours.',
      'Upgraded 20+ Spring Boot microservices, improving security, dependency hygiene, and runtime performance.',
      'Migrated 20+ services from Datadog to AWS CloudWatch, consolidating 1,400+ alarms into one platform.',
    ],
    technologies: ['Java', 'Spring Boot', 'Kafka', 'AWS CloudWatch', 'Claude', 'CI/CD'],
  },
  {
    company: 'Railpod',
    initials: 'RP',
    role: 'Software Engineer',
    period: 'May 2022 — Dec 2022',
    location: 'Boston, US',
    description: [
      'Built a full-stack React/Django application with document and image management for 500+ users.',
      'Translated a Laplace-based image processing algorithm into JavaScript, reducing manual interventions by 30%.',
      'Automated rail track charting with Matplotlib, replacing manual Matlab/CAD workflows and improving efficiency by 80%.',
    ],
    technologies: ['React', 'Django', 'JavaScript', 'Matplotlib'],
  },
  {
    company: 'AVL',
    initials: 'AVL',
    role: 'Software Engineer',
    period: 'Jan 2019 — Sep 2021',
    location: 'Gurugram, India',
    description: [
      'Led a team of three engineers to build a Flask/React labeling tool with OAuth SSO, improving efficiency by 40%.',
      'Improved search efficiency by 45% using BERT embeddings and Annoy vector queries across 1M records.',
      'Fine-tuned BERT to categorize service requests, improving F1 scores by 30%.',
      'Deployed a Flask analytics framework for emissions testing, optimizing 30-minute drive cycles from 5TB of data.',
    ],
    technologies: ['Flask', 'React', 'BERT', 'Annoy', 'Python'],
  },
];

export const skillCategories = [
  { title: 'languages', skills: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript'] },
  { title: 'web & backend', skills: ['React', 'Spring Boot', 'Django', 'Flask'] },
  { title: 'data & platforms', skills: ['PostgreSQL', 'DynamoDB', 'SQL', 'Azure'] },
  { title: 'aws', skills: ['CloudWatch', 'Lambda', 'S3', 'ECS', 'IAM', 'Step Functions'] },
  { title: 'tools & infrastructure', skills: ['Git', 'Kafka', 'Postman', 'Docker', 'Kubernetes', 'Terraform', 'JIRA', 'GitHub Actions', 'Pulumi'] },
  { title: 'ml & scientific computing', skills: ['PyTorch', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'SciPy'] },
];

export const education = [
  {
    university: 'Northeastern University',
    period: '2021 — 2023',
    degree: 'Master of Information Systems',
    coursework: ['Data Structures', 'Python', 'Database Management', 'Algorithms', 'NLP', 'Cloud Computing'],
  },
  {
    university: 'NorthCap University',
    period: '2015 — 2019',
    degree: 'Bachelor’s in Computer Science',
    coursework: [],
  },
];

export const awards = [
  {
    title: 'EasyA × Polkadot Harvard Hackathon',
    description: 'Winner, Moonbeam Staking DAO track.',
    label: 'winner',
  },
  {
    title: 'Machine Learning & AI Nanodegree',
    description: 'Fully sponsored by AWS. Additional learning in AWS Machine Learning and through Coursera.',
    label: 'aws',
  },
];
