import React from 'react';
import { motion } from 'framer-motion';

const TechMarquee = () => {
  const techStack = [
    "Frontend", "Mark Essentials", "Backend", "UI Libraries", "Database", 
    "E-Commerce & CMS", "UI/UX Design", "Cloud", "Manual Testing", 
    "API Testing & Documentation", "Performance Testing", 
    "AI/ML/Gen AI Frameworks", "Data Migration & Modernization", 
    "Data & Analytics", "Data Processing & Transformation", "JavaScript"
  ];

  return (
    <div className="relative flex items-center bg-zinc-950 overflow-hidden py-6 border-y border-zinc-800">
      {/* Static Left Label */}
      <div className="z-10 bg-zinc-950 pl-8 pr-4 py-2">
        <h2 className="text-white font-bold whitespace-nowrap tracking-tight uppercase text-sm border-r border-zinc-700 pr-6">
          AI Development Tech Stack
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div 
          className="flex items-center"
          animate={{ x: [0, -1000] }} // Adjust distance based on content length
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Duplicate the list to ensure seamless looping */}
          {[...techStack, ...techStack].map((item, index) => (
            <div key={index} className="flex items-center mx-6">
              <span className="text-zinc-400 text-sm font-medium uppercase tracking-wider">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 ml-12" /> 
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fade Overlays for Depth */}
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default TechMarquee;