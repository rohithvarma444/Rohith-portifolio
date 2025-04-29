"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  value: number;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const interval = setInterval(() => {
      if (step < steps) {
        current += increment;
        setCount(Math.round(current));
        step++;
      } else {
        setCount(value);
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-4xl md:text-5xl font-bold text-white flex items-baseline">
        {count}
        <span className="text-blue-400 ml-1">+</span>
      </div>
      <div className="text-sm md:text-base text-gray-400">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-4 py-8"
    >
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <StatItem value={25} label="Github Repos" />
          <StatItem value={350} label="Github Contributions" />
          <StatItem value={100} label="Leetcode problems" />
        </div>
      </div>
    </motion.div>
  );
}