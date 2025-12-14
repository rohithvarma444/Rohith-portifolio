'use client'

import Image from 'next/image';

const techStack = [
  // Fundamentals - Operating Systems & Basics
  { name: 'Linux', icon: '/icons/linux.svg' },
  { name: 'HTML', icon: '/icons/html.svg' },
  { name: 'CSS', icon: '/icons/css.svg' },
  { name: 'SQL', icon: '/icons/sql.svg' },
  
  // Programming Languages
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'C++', icon: '/icons/cpp.svg' },
  { name: 'Go', icon: '/icons/go.svg' },
  
  // Frontend Development
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  
  // Backend & APIs
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express', icon: '/icons/express.svg' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg' },
  { name: 'tRPC', icon: '/icons/trpc.svg' },
  
  // Databases & Authentication
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'Clerk', icon: '/icons/clerk.svg' },
  
  // AI/ML
  { name: 'Langchain', icon: '/icons/langchain.svg' },
  { name: 'Gemini', icon: '/icons/gemini.svg' },
  
  // DevOps & Containerization
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
  
  // Infrastructure & IaC
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'Terraform', icon: '/icons/terraform.svg' },
  
  // CI/CD & Automation
  { name: 'Jenkins', icon: '/icons/jenkins.svg' },
  
  // Monitoring & Observability
  { name: 'Prometheus', icon: '/icons/prometheus.svg' },
  { name: 'Grafana', icon: '/icons/grafana.svg' },
  
  // Security
  { name: 'Kali Linux', icon: '/icons/kali.svg' },
];

export default function TechStack() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">I CONSTANTLY TRY TO IMPROVE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Tech Stack</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 backdrop-blur-sm border border-white/10 transition-all duration-300"
            >
              <div className="w-5 h-5 relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
              <span className="text-sm text-white/80 group-hover:text-indigo-400 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}