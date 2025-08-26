'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 'project-lyra',
    title: 'Lyra – AI-Powered Customer Care SaaS Platform',
    description: 'Revolutionary live voice agent dubbing system with multilingual, real-time voice and text interactions.',
    image: '/project/projects.jpg',
    longDescription: 'Lyra is a breakthrough AI-powered customer care platform featuring live voice agent dubbing with real-time AI voice synthesis using Murf AI. It supports 15+ languages with accent recognition, cultural adaptation, and emotion-aware speech modulation. The platform includes WebSocket streaming for ultra-low latency audio conversations and seamless language switching capabilities.',
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Murf AI',
      'WebSocket',
      'Text-to-Speech',
      'Real-time Audio'
    ],
    githubUrl: 'https://github.com/rohithvarma444/Murf-ai',
    liveUrl: ''
  },
  {
    id: 'project-kubernetes-audio',
    title: 'Kubernetes Audio Converter',
    description: 'Microservices-based application for converting video files to MP3 audio format, deployed on Kubernetes.',
    image: '/project/projects.jpg',
    longDescription: 'A distributed system built with microservices architecture deployed on Kubernetes. Features include Gateway Service for API management, Auth Service for JWT authentication, and Converter Service for video-to-MP3 conversion using FFmpeg. The system uses RabbitMQ for message queuing, MongoDB GridFS for file storage, and MySQL for user data management.',
    techStack: [
      'Kubernetes',
      'Docker',
      'RabbitMQ',
      'MongoDB',
      'MySQL',
      'FFmpeg',
      'JWT',
      'Microservices'
    ],
    githubUrl: 'https://github.com/rohithvarma444/k8s-Audio-Converter',
    liveUrl: ''
  },
  {
    id: 'project-django-crm',
    title: 'Django CRM – Customer Relationship Management System',
    description: 'Modern CRM system built with Django for managing customer records and business relationships.',
    image: '/project/projects.jpg',
    longDescription: 'A comprehensive Customer Relationship Management system built with Django featuring secure user authentication, customer records management, and lead tracking. The application includes a responsive Bootstrap-based UI, real-time message system for user feedback, CSRF protection for secure form handling, and efficient business relationship management features.',
    techStack: [
      'Django',
      'Python',
      'Bootstrap',
      'SQLite',
      'CSRF Protection',
      'Authentication',
      'Responsive Design'
    ],
    githubUrl: 'https://github.com/rohithvarma444/Django-CRM',
    liveUrl: ''
  },
  {
    id: 'project-rapidserve',
    title: 'RapidServe – Vercel-like Deployment Platform',
    description: 'Instant GitHub repository deployment platform with real-time monitoring and AWS integration.',
    image: '/project/projects.jpg',
    longDescription: 'RapidServe is a Vercel-like deployment platform that enables instant GitHub repository deployment with real-time monitoring. Built with a microservices architecture featuring 4 core services: Frontend, Upload Service, Deploy Service, and Request Handler. Integrates AWS S3, SQS, and DynamoDB for scalable file storage and deployment orchestration.',
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'AWS S3',
      'AWS SQS',
      'DynamoDB',
      'Express.js',
      'Microservices'
    ],
    githubUrl: 'https://github.com/rohithvarma444/RapidServe',
    liveUrl: ''
  },
  {
    id: 'project-autoaccess',
    title: 'AutoAccess – AI-Powered Web Accessibility Extension',
    description: 'Chrome browser extension for web accessibility with AI-powered page summarization and image description.',
    image: '/project/projects.jpg',
    longDescription: 'AutoAccess is a Chrome browser extension that enhances web accessibility through AI-powered features. It provides page summarization using Google\'s Gemini AI, automatic alt text generation for images using Google Cloud Vision API, and specialized STEM alt text analysis for technical content. Supports multiple languages including English, Hindi, and Telugu with Text-to-Speech integration.',
    techStack: [
      'Chrome Extension',
      'JavaScript',
      'Google Cloud Vision',
      'Gemini AI',
      'Text-to-Speech',
      'Cloud Functions',
      'Accessibility'
    ],
    githubUrl: 'https://github.com/rohithvarma444/Auto_Access',
    liveUrl: ''
  },
  {
    id: 'project-7',
    title: 'GitWhisper – AI-Powered GitHub & Meeting Analyzer',
    description: 'AI-powered tool to analyze GitHub repos and meeting transcripts using RAG architecture.',
    image: '/project/projects.jpg',
    longDescription: 'GitWhisper is an intelligent platform built with RAG architecture that allows users to analyze GitHub repositories and meeting audio files. It features Gemini-powered Q&A, commit insights, meeting transcriptions, and secure Clerk-based authentication, all within a scalable, type-safe stack using Next.js, tRPC, and Prisma.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'tRPC',
      'Prisma',
      'PostgreSQL',
      'Google Gemini',
      'AssemblyAI',
      'Clerk',
      'Cloudinary'
    ],
    githubUrl: 'https://github.com/rohithvarma444/GitWhisper',
    liveUrl: ''
  },
  
  {
      id: 'project-4',
      title: 'StudyNotion – Modern EdTech Platform',
      description: 'An educational platform for online course creation and learning.',
      image: '/project/projects.jpg',
      longDescription: 'StudyNotion is a feature-rich EdTech platform supporting educators in course management and students in interactive learning, progress tracking, and analytics. It uses JWT auth and secure backend APIs.',
      techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'JWT'],
      githubUrl: 'https://github.com/rohithvarma444/StudyNotion--EdTech-Platform',
      liveUrl: ''
    },
    {
      id: 'project-9',
      title: 'SecureShare – File Encryption & Sharing',
      description: 'A secure file-sharing app using AES and RSA cryptographic protocols.',
      image: '/project/projects.jpg',
      longDescription: 'SecureShare enables encrypted file transfers using AES encryption and RSA for key exchange. It features secure user authentication, encrypted file storage, and a clean UI for messaging.',
      techStack: ['Node.js', 'MongoDB', 'Crypto', 'JWT', 'Express'],
      githubUrl: 'https://github.com/rohithvarma444/SecureShare',
      liveUrl: ''
    },
    {
      id: 'project-7',
      title: 'Notes Application',
      description: 'A secure notes app with Google OAuth, CSRF, and CSP protection.',
      image: '/project/projects.jpg',
      longDescription: 'A full-stack application to manage notes securely using MongoDB, Google OAuth, and security measures like CSRF protection and Content Security Policy headers. Deployed with GCP.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Google OAuth', 'GCP'],
      githubUrl: 'https://github.com/rohithvarma444/Notes-Application',
      liveUrl: ''
    },
    {
      id: 'project-5',
      title: 'Olabs Hackathon – Lazy Lizards',
      description: 'Real-time collaborative learning tools with AI chatbot and ML visualizers.',
      image: '/project/projects.jpg',
      longDescription: 'This hackathon project features real-time collaboration tools (whiteboard, video call), AI chatbot with Gemini API, web and ML modules, and mobile support using Flutter. Built for students in low-resource settings.',
      techStack: ['Flutter', 'Dart', 'ReactJS', 'Tailwind CSS', 'ExpressJS', 'Gemini API'],
      githubUrl: 'https://github.com/Aadarshprajapati777/HackOlabs-dashboard',
      liveUrl: ''
    },
    {
      id: 'project-8',
      title: 'Cohere RAG (Multilingual PDF Q&A)',
      description: 'Uses Cohere multilingual embeddings for answering questions from PDFs.',
      image: '/project/projects.jpg',
      longDescription: 'An experimental RAG (Retrieval-Augmented Generation) application using Cohere embeddings for multilingual PDF question answering. Built in Python and integrated with language-aware vector search.',
      techStack: ['Python', 'Cohere API', 'LangChain', 'Embeddings'],
      githubUrl: 'https://github.com/rohithvarma444/Cohere-RAG',
      liveUrl: ''
    },
    {
      id: 'project-2',
      title: 'Movie Recommendation System',
      description: 'A content-based movie recommendation system using cosine similarity.',
      image: '/project/projects.jpg',
      longDescription: 'Built with Python and Flask, this system suggests movies based on similar genres, tags, or descriptions using cosine similarity. It includes a user-friendly web interface for querying recommendations.',
      techStack: ['Python', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/rohithvarma444/Movie-Recommandation-System',
      liveUrl: ''
    },
    {
      id: 'project-3',
      title: 'Real Estate Management System',
      description: 'A DBMS academic project managing property listings and transactions.',
      image: '/project/projects.jpg',
      longDescription: 'Designed using PostgreSQL, this project simulates a relational database management system for real estate operations including listings, clients, and transactions, with normalization and query support.',
      techStack: ['PostgreSQL', 'SQL', 'DBMS Concepts'],
      githubUrl: 'https://github.com/rohithvarma444/Real-Estate-Managment-System',
      liveUrl: ''
    },
    {
      id: 'project-10',
      title: 'Customer Churn Prediction',
      description: 'A data science project analyzing preprocessing impact on churn models.',
      image: '/project/projects.jpg',
      longDescription: 'Explores how various preprocessing techniques affect machine learning model performance in customer churn prediction. Includes synthetic dataset generation and an interactive dashboard for results.',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Dash'],
      githubUrl: 'https://github.com/rohithvarma444/Customer-Churn-Prediction',
      liveUrl: ''
    },
    {
      id: 'project-6',
      title: 'Wine Quality Prediction',
      description: 'Machine learning project to predict wine quality from chemical data.',
      image: '/project/projects.jpg',
      longDescription: 'This ML model predicts the quality of wine based on physicochemical properties. It involves preprocessing, model training, evaluation, and feature importance analysis using Python libraries.',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/rohithvarma444/wine-quality-prediction',
      liveUrl: ''
    }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore my latest projects and experiments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:to-white/15">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="relative h-64 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-lg text-white transition-colors"
                    >
                      <div className="relative flex items-center gap-2">
                        <span className="absolute w-2 h-2 bg-red-500 rounded-full animate-ping" />
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                      </div>
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}