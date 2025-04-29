'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    title: "GitWhisper",
    description: "A GenAI-powered code analysis platform leveraging RAG architecture and semantic search for large GitHub repositories",
    image: "/featured/gitWhisper.png",
    demoLink: "https://www.linkedin.com/posts/rohith-varma-datla-0736b2281_genai-rag-llm-activity-7320739019514855425-PxRu",
    githubLink: "https://github.com/rohithvarma444/GitWhisper",
    date: "Mar 2025",
    features: [
      "Designed a GenAI-powered code exploration platform to analyze large GitHub repos via RAG + semantic search using pgvector.",
      "Used tRPC for type-safe API communication and Gemini Pro for LLM-powered code analysis and doc generation.",
      "Achieved 95% query relevance and accelerated codebase onboarding by streamlining context retrieval."
    ],
    technologies: [
      "Next.js", "Clerk", "Gemini", "LangChain", "Python", "pgvector", "tRPC"
    ]
  },
  {
    title: "Olabs 2.0",
    description: "Real-time collaborative learning platform with video conferencing, quizzes, and interactive lab simulations",
    image: "/featured/olabs2.0.png",
    githubLink: "https://github.com/Aadarshprajapati777/HackOlabs-dashboard",
    date: "Feb 2025",
    features: [
      "Enabled collaborative science labs via WebSocket infra with <200ms latency for 100+ users and synchronized simulation state.",
      "Built GenAI-driven quiz generator, shared whiteboard with canvas sync, and integrated Stream.io video chat for live instruction.",
      "Addressed the gap in synchronous online lab education with real-time, interactive, and scalable simulation features."
    ],
    technologies: [
       "React", "Gemini", "MongoDB", "Stream"
    ]
  },
  {
    title: "StudyNotion -- EdTech Platform",
    description: "Full-stack platform enabling course creation, purchases, and tracking with secure payments and admin controls",
    image: "/featured/study.png",
    demoLink: "https://studynotion-50bs0r6r3-rohithvarma444s-projects.vercel.app",
    githubLink: "https://github.com/rohithvarma444/StudyNotion--EdTech-Platform",
    date: "Aug 2024 - Sept 2024",
    features: [
      "Developed a full-stack EdTech platform enabling instructors to create/manage courses with secure payments via Razorpay API.",
      "Integrated Chart.js to visualize course performance and employed Redux for efficient state management.",
      "Built responsive UI components using React, ensuring cross-device compatibility."
    ],
    technologies: [
      "MongoDB", "Express", "React", "Node.js", "Redux"
    ]
  }
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [showViewAll, setShowViewAll] = useState(false);

  const nextProject = () => {
    if (currentProject === projects.length - 1) {
      setShowViewAll(true);
    } else {
      setCurrentProject((prev) => (prev + 1) % (projects.length + 1));
    }
  };

  const prevProject = () => {
    if (showViewAll) {
      setShowViewAll(false);
      setCurrentProject(projects.length - 1);
    } else {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent work in web development, AI integration, and full-stack applications.
        </p>
      </motion.div>

      <div className="max-w-6xl w-full rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row relative">
          {!showViewAll && (
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 border border-white/10 text-white/80 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 border border-white/10 text-white/80 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="w-full md:w-1/2 p-8 md:p-10 relative">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (index === 3) {
                          setShowViewAll(true);
                        } else {
                          setShowViewAll(false);
                          setCurrentProject(index);
                        }
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${(showViewAll && index === 3) || (!showViewAll && currentProject === index) ? 'bg-white w-4' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
                <span className="text-white/60 text-sm">{showViewAll ? '4 / 4' : `${currentProject + 1} / 4`}</span>
              </div>
              
              {showViewAll ? (
                <div className="flex flex-col items-center justify-center h-full py-20">
                  <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
                  <p className="text-gray-300 mb-8 text-center">Check out all my projects in the projects page</p>
                  <Link
                    href="/projects"
                    className="px-6 py-3 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-400 hover:text-indigo-300 transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                    View All Projects
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-4">{projects[currentProject].title}</h2>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {projects[currentProject].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {projects[currentProject].features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-indigo-400 mt-1">•</span>
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[currentProject].technologies.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <span className="text-sm text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={projects[currentProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all duration-300 text-sm flex items-center gap-2"
                    >
                      <ChevronRight className="h-4 w-4" />
                      View on GitHub
                    </a>
                    {projects[currentProject].demoLink && (
                      <a 
                        href={projects[currentProject].demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 hover:text-indigo-300 transition-all duration-300 text-sm flex items-center gap-2"
                      >
                        <ChevronRight className="h-4 w-4" />
                        View Demo
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative overflow-hidden border-l border-white/10 h-[500px]">
            {!showViewAll && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <Image
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover object-center"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}