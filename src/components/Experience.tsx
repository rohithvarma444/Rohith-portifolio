'use client'

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
    {
      title: "CTF Challenge Author",
      company: "Traboda CyberLabs",
      location: "Amritapuri, India",
      period: "March 2024  – May 2024",
      achievements: [
        "Designed and deployed advanced network and web security challenges for national-level CTFs, impacting over 1000 participants.",
        "Built realistic boot2root machines simulating critical vulnerabilities, aiding in the training of penetration testers.",
        "Created a high-complexity challenge for NCIIPC Pentethon 2024, solved by only 3 of 100+ participating elite teams.",
        "Simulated real-world cyberattack scenarios to evaluate AI-driven security systems, enhancing their threat detection capabilities."
      ]
    },
    {
      title: "Team Lead / CTF Player (r0h17h)",
      company: "Team bi0s",
      location: "Amritapuri, India",
      period: "April 2023 – March 2025",
      achievements: [
        "Led a 20-member cybersecurity team in international CTFs and Hack The Box, with a focus on web and network security challenges.",
        "Designed and authored original CTF problems, contributing to global events and improving team preparation strategy.",
        "Mentored juniors in offensive security, with several mentees advancing to solve international-level challenges.",
        "Conducted vulnerability analysis and exploitation of real-world web applications and network protocols, enhancing defensive capabilities."
      ]
    }
  ];

export default function Experience() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-[20%] h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent origin-top"
          />

          {/* Experience items */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Year marker */}
                <div className="w-[20%] flex justify-end">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 transition-colors hover:border-white/20"
                  >
                    <span className="text-white/80 text-sm">{exp.period}</span>
                    {/* Timeline dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute top-1/2 -translate-y-1/2 right-[-21px] w-3 h-3 bg-white/50 rounded-full border-4 border-black"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10 transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:to-white/15"
                >
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <div className="text-indigo-400 mb-4">
                    {exp.company} – {exp.location}
                  </div>
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start group"
                      >
                        <span className="text-indigo-400 mr-2 group-hover:scale-125 transition-transform">•</span>
                        <span className="text-white/80 group-hover:text-white transition-colors">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}