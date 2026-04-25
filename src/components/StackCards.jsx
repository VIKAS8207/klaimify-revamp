import React from 'react';

const projects = [
  {
    id: 1,
    title: "CIDC\nDigital\nPortal.",
    subtitle: "STATE INFRASTRUCTURE SYSTEM",
    aboutHeading: "About the App",
    about: "A comprehensive digital registry and dashboard system built to manage large-scale tasks. It streamlines workflows, handles document tracking, and provides real-time updates to internal teams.",
    year: "2026",
    technologies: ["React", "Tailwind CSS", "Vite", "GSAP"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    themeColors: ["bg-blue-600", "bg-slate-800", "bg-sky-400"]
  },
  {
    id: 2,
    title: "Apparel\nE-Commerce\nPlatform.",
    subtitle: "FULL-STACK RETAIL APP",
    aboutHeading: "About the App",
    about: "An end-to-end platform designed for a premium clothing brand. Features a seamless checkout flow, dynamic inventory displays, and high-fidelity UI assets built from scratch.",
    year: "2025",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    themeColors: ["bg-orange-500", "bg-zinc-800", "bg-stone-300"]
  },
  {
    id: 3,
    title: "Interactive\n3D\nPortfolio.",
    subtitle: "IMMERSIVE WEB EXPERIENCE",
    aboutHeading: "About the App",
    about: "An experimental web experience utilizing WebGL to render interactive 3D elements, including dotted rotating globes and parallax effects to push modern web performance.",
    year: "2025",
    technologies: ["Three.js", "React Three Fiber", "Spline"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    themeColors: ["bg-emerald-500", "bg-black", "bg-zinc-600"]
  }
];

export default function PortfolioStack() {
  return (
    /* UPDATED CONTAINER: 
       - bg-gradient-to-b handles the transition from Yellow to White
       - rounded-t-[100px] creates the large radius curve at the top
    */
   <div className="bg-black">
    <div className="bg-gradient-to-b from-[#FFCC32] to-white rounded-t-[60px] md:rounded-t-[40px] min-h-screen font-onest text-white pb-32">
      
      {/* Header spacer to allow scrolling into the first card */}
      <div className="h-[20vh] flex items-end justify-center pb-10">
        <p className="text-gray-500 tracking-widest text-sm animate-bounce font-semibold uppercase">Scroll to view projects ↓</p>
      </div>

      {/* Increased max-width here to 1450px for wider cards */}
      <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="sticky flex justify-center w-full"
            style={{ top: `calc(10vh + ${index * 20}px)` }} 
          >
            {/* Main Card Container */}
            <div className="w-full h-[600px] bg-[#111111] rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/5">
              
              {/* Left Column: Software Name & Subtitle */}
              <div className="w-full lg:w-[25%] p-12 flex flex-col justify-between">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] text-white whitespace-pre-line">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-gray-500 mt-8 lg:mt-0 uppercase">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 shrink-0">
                    <polygon points="12,2 22,20 2,20" />
                  </svg>
                  {project.subtitle}
                </div>
              </div>

              {/* Middle Column: Image */}
              <div className="w-full lg:w-[45%] bg-[#cfcfcf] relative overflow-hidden flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title.replace(/\n/g, ' ')}
                  className="object-cover h-full w-full mix-blend-multiply opacity-90 object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Right Column: About, Year, Tech, Theme */}
              <div className="w-full lg:w-[30%] p-12 pt-28 flex flex-col bg-[#181818]">
                <h3 className="text-2xl font-medium tracking-tight mb-3">{project.aboutHeading}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                  {project.about}
                </p>

                {/* Year & Tech Stack */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs tracking-widest text-gray-500 uppercase font-bold">Built In</span>
                    <span className="text-lg tracking-wide font-semibold text-white">{project.year}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-[#2a2a2a] text-gray-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-8 mt-auto lg:mt-0">
                  <button className="flex-1 bg-white text-black py-4 rounded font-bold text-xs tracking-widest hover:bg-gray-200 transition-colors">
                    VIEW LIVE
                  </button>
                  <button className="flex-1 bg-[#2a2a2a] text-white py-4 rounded font-bold text-xs tracking-widest hover:bg-[#333] transition-colors">
                    CASE STUDY
                  </button>
                </div>

                {/* Theme Colors */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {project.themeColors.map((colorClass, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full ${colorClass} cursor-default ring-1 ring-offset-2 ring-offset-[#181818] ring-transparent`}
                      ></div>
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                    Project Theme
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      
      {/* Footer spacer to allow scrolling past the last card */}
      <div className="h-[50vh]"></div>
    </div>
    </div>
  );
}