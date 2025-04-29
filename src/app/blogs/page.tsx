'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogList from './BlogList';

export default function BlogsPage() {
  return (
    <main className="min-h-screen w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">MY LEARNING JOURNAL</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Daily Discoveries & Insights</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Documenting my journey through code, challenges, and continuous learning</p>
        </div>

        <BlogList />
      </div>
    </main>
  );
}