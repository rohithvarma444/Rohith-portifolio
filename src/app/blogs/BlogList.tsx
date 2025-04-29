'use client'

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const blogPost = {
  title: "Innovating with Language Models: Inside the Tredence Hackathon in Bangalore",
  description: "Recently we had the chance to attend the Tredence Hackathon in Bangalore—an exciting experience where we explored AI-driven solutions in the customer care space by building a multimodal system.",
  date: "2024-03",
  tags: ["LLM", "Multilingual", "RAG", "python", "Hackathon"],
  url: "https://www.linkedin.com/pulse/innovating-language-models-inside-tredence-hackathon-varma-datla-xwgec",
  readingTime: "5 min read"
};

export default function BlogList() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const isVisible = selectedTags.length === 0 || 
    blogPost.tags.some(tag => selectedTags.includes(tag));

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-3/4">
        {isVisible && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-white/20"
          >
            <a 
              href={blogPost.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center gap-4 mb-4">
                <time className="text-gray-400 text-sm">{blogPost.date}</time>
                <span className="text-gray-400 text-sm">{blogPost.readingTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 hover:text-indigo-400 transition-colors">
                {blogPost.title}
              </h2>
              <p className="text-gray-300 mb-4">{blogPost.description}</p>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.article>
        )}
      </div>

      <div className="lg:w-1/4">
        <div className="sticky top-20">
          <h3 className="text-xl font-semibold text-white mb-4">Filter by Topics</h3>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'bg-indigo-500/20 border-indigo-500/50 text-white shadow-[0_0_10px_rgba(99,102,241,0.2)]'
                    : 'bg-white/5 border-white/10 text-white/80 hover:border-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="mt-4 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}