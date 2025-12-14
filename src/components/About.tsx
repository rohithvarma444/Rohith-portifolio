"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="min-h-screen w-full py-24 px-6 md:px-12 flex items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        {/* Left side - About text */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8 px-4"
        >
          <div className="inline-block">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm uppercase tracking-wider text-gray-400 mb-2"
            >
              MORE ABOUT ME
            </motion.h2>
            <div className="h-1 w-20 bg-white/20 rounded"></div>
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            <p className="text-3xl md:text-4xl font-bold text-white mb-8">
              👋🏻 Hello, I'm <span className="text-indigo-400">Rohith Varma Datla</span>
            </p>
              <p>
                An upcoming <span className="font-bold">SDE intern at Autodesk</span> and <span className="font-bold">final-year Computer Science student</span> at <span className="text-indigo-400">Amrita Vishwa Vidyapeetham, Amritapuri</span>, specializing in <span className="font-bold">backend systems</span>, <span className="font-bold">cloud-native development</span>, and <span className="font-bold">web security</span>. Experience spans building <span className="font-bold">scalable deployment platforms</span>, <span className="font-bold">AI-powered developer tools</span>, and <span className="font-bold">accessibility-focused products</span> using <span className="text-indigo-400">AWS, GCP, Docker, and Kubernetes</span>.
              </p>
              
              <p>
                Focused on combining <span className="text-indigo-400">GenAI tooling</span> with robust engineering to ship <span className="font-bold">production-ready features</span>—from <span className="font-bold">retrieval-augmented systems</span> to <span className="font-bold">microservices platforms</span>—while maintaining reliability through <span className="font-bold">CI/CD and observability</span>. This blend of security mindset and cloud expertise makes an excellent fit for teams building <span className="font-bold">high-impact, developer-centric products</span>.
              </p>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative aspect-[3/4] w-full max-w-lg mx-auto px-4"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent rounded-3xl blur"></div>
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <Image
              src="/mydp.png"
              alt="Profile Picture"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}