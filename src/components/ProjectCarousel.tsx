'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ExternalLink, Github, Play } from "lucide-react";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Project data
const projects = [
  {
    title: "RapidServe",
    description: "A Vercel-like deployment platform for instant GitHub repository deployment with real-time monitoring and AWS integration",
    image: "/featured/System-Design.png",
    githubLink: "https://github.com/rohithvarma444/RapidServe",
    date: "Jan 2025",
    features: [
      "Built a microservices architecture with 4 core services: Frontend, Upload Service, Deploy Service, and Request Handler.",
      "Implemented real-time deployment status monitoring with AWS S3, SQS, and DynamoDB integration.",
      "Developed instant GitHub repository deployment with automatic build processes and static file serving.",
      "Created a modern React + TypeScript frontend with real-time polling and responsive design."
    ],
    technologies: [
      "React", "TypeScript", "Node.js", "AWS S3", "AWS SQS", "DynamoDB", "Express.js"
    ]
  },
  {
    title: "AutoAccess",
    description: "AI-powered Chrome browser extension for web accessibility with page summarization and intelligent image description services",
    image: "/featured/gcp.jpg",
    githubLink: "https://github.com/rohithvarma444/Auto_Access",
    date: "Dec 2024",
    features: [
      "Built a Chrome extension with AI-powered page summarization using Google's Gemini AI and Text-to-Speech services.",
      "Implemented automatic alt text generation for images using Google Cloud Vision API with multi-language support.",
      "Developed specialized STEM alt text analysis for technical diagrams, charts, and scientific images.",
      "Created a comprehensive accessibility solution supporting English, Hindi, and Telugu languages."
    ],
    technologies: [
      "Chrome Extension", "JavaScript", "Google Cloud Vision", "Gemini AI", "Text-to-Speech", "Cloud Functions"
    ]
  },
  {
    title: "GitWhisper",
    description: "A GenAI-powered code analysis platform leveraging RAG architecture and semantic search for large GitHub repositories",
    image: "/featured/gitWhisper.png",
    demoLink: "https://git-whisper.vercel.app/",
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
      "Live whiteboard, screen sharing, calling, AI chatbot for role-based training.",
      "Custom quizzes using Gemini API 🤖.",
      "Web Development & Machine Learning with live code editors and ML algorithm visualizer.",
      "Built with Flutter for seamless cross-platform support (Android & iOS).",
      "Aligned with the latest CBSE syllabus 📚."
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
  const [isHovered, setIsHovered] = useState(false);

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

  // Auto-advance carousel - Disabled
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isHovered) {
  //       nextProject();
  //     }
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [currentProject, isHovered]);

  return (
    <section id="projects" className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-16">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
          {/* Navigation buttons */}
          <AnimatePresence>
            {!showViewAll && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 border border-white/10 text-white/80 hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
          
          <motion.button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 border border-white/10 text-white/80 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>

          <div className="flex flex-col md:flex-row relative">
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-10 relative">
              <div className="relative z-10">
                {/* Progress indicators */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (index === 5) {
                            setShowViewAll(true);
                          } else {
                            setShowViewAll(false);
                            setCurrentProject(index);
                          }
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          (showViewAll && index === 5) || (!showViewAll && currentProject === index) 
                            ? 'bg-white w-4' 
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">{showViewAll ? '6 / 6' : `${currentProject + 1} / 6`}</span>
                </div>
                
                <AnimatePresence mode="wait">
                  {showViewAll ? (
                    <motion.div
                      key="view-all"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center justify-center h-full py-20"
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
                      <p className="text-gray-300 mb-8 text-center">Check out all my projects in the projects page</p>
                      <Link
                        href="/projects"
                        className="px-6 py-3 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-400 hover:text-indigo-300 transition-all duration-300 text-sm flex items-center gap-2"
                      >
                        <ChevronRight className="h-4 w-4" />
                        View All Projects
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={currentProject}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-4">
                        {projects[currentProject]?.title || 'Project'}
                      </h2>
                      
                      <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                        {projects[currentProject]?.description || 'Project description not available.'}
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        {projects[currentProject]?.features?.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-indigo-400 mt-1">•</span>
                            <p className="text-gray-300 text-sm">{feature}</p>
                          </div>
                        )) || <p className="text-gray-400 text-sm">Features not available.</p>}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {projects[currentProject]?.technologies?.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <span className="text-sm text-gray-300">{tech}</span>
                          </div>
                        )) || <p className="text-gray-400 text-sm">Technologies not available.</p>}
                      </div>
                      
                      <div className="flex gap-4">
                        <a 
                          href={projects[currentProject]?.githubLink || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all duration-300 text-sm flex items-center gap-2"
                        >
                          <ChevronRight className="h-4 w-4" />
                          View on GitHub
                        </a>
                        {projects[currentProject]?.demoLink && (
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative overflow-hidden h-[500px] hidden md:block">
              <AnimatePresence mode="wait">
                {!showViewAll && (
                  <motion.div
                    key={currentProject}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-full w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    <Image
                      src={projects[currentProject]?.image || '/project/projects.jpg'}
                      alt={projects[currentProject]?.title || 'Project'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover object-center"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}