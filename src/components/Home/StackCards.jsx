import React, { useEffect, useRef, useState } from 'react';

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
    title: "AgriXchange\nYour trading partner",
    subtitle: "FULL-STACK RETAIL APP",
    aboutHeading: "About the App",
    about: "An end-to-end platform designed for a premium clothing brand. Features a seamless checkout flow, dynamic inventory displays, and high-fidelity UI assets built from scratch.",
    year: "2025",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    image: "/image/4.png",
    themeColors: ["bg-[#2F5444]", "bg-[#B0943D]", "bg-stone-300"]
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
  const cardRefs = useRef([]);
  const [cardProgress, setCardProgress] = useState(projects.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const newProgress = projects.map((_, i) => {
        if (i === projects.length - 1) return 0; // The last card never gets squished/blurred

        const currentCard = cardRefs.current[i];
        const nextCard = cardRefs.current[i + 1];

        if (!currentCard || !nextCard) return 0;

        const currentRect = currentCard.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        const deltaY = nextRect.top - currentRect.top;
        // 250 is exactly half of the 500px card height
        const threshold = 250; 
        // 20 is the pixel offset between stacked cards (index * 20px)
        const minGap = 20; 

        if (deltaY < threshold) {
          // Calculate a progress value from 0 to 1 as the next card moves over the current one
          let progress = 1 - (deltaY - minGap) / (threshold - minGap);
          return Math.max(0, Math.min(1, progress));
        }
        return 0;
      });

      setCardProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black">
      {/* Container: Gradient and Rounded Corners (Smaller for Mobile) */}
      <div className="bg-gradient-to-b from-[#FFCC32] to-white rounded-t-[20px] lg:rounded-t-[60px] md:rounded-t-[40px] min-h-screen font-onest text-white pb-16">
        
        {/* Header Section with responsive padding/height */}
        <div className="pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1450px] mx-auto text-center flex flex-col items-center justify-center min-h-[30vh]">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-6">
            Our Projects
          </h1>
          <p className="text-gray-700 tracking-widest text-sm animate-bounce font-bold uppercase">
            Scroll to view works ↓
          </p>
        </div>

        {/* Cards Container with breathing room */}
        <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-32 md:gap-[15vh]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="sticky flex justify-center w-full"
              style={{ top: `calc(10vh + ${index * 20}px)` }} 
            >
              {/* ==============================================
                  SIMPLIFIED MOBILE CARD LAYOUT (Shown < lg)
                  ============================================== */}
              <div 
                className="lg:hidden w-full h-auto bg-[#111111] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-white/5 relative will-change-transform p-6"
                style={{
                  transform: `scale(${1 - cardProgress[index] * 0.05})`, // Scales down by up to 5%
                  filter: `blur(${cardProgress[index] * 5}px)`, // Blurs up to 5px
                  transition: 'transform 0.1s ease-out, filter 0.1s ease-out'
                }}
              >
                {/* Dull / Darken Overlay for mobile */}
                <div 
                  className="absolute inset-0 bg-black z-50 pointer-events-none"
                  style={{ 
                    opacity: cardProgress[index] * 0.5, // Fades to 50% black
                    transition: 'opacity 0.1s ease-out'
                  }}
                />
                
                {/* Mobile Title (Smaller, Left Aligned) */}
                <h2 className="text-2xl font-bold tracking-tight text-white mb-4 relative z-10 whitespace-pre-line">
                  {project.title.replace(/\n/g, ' ')}
                </h2>
                
                {/* Mobile Image (Simplified) */}
                <div className="w-full h-[200px] bg-[#cfcfcf] relative overflow-hidden flex items-center justify-center rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title.replace(/\n/g, ' ')}
                    className="object-cover h-full w-full object-center rounded-xl"
                  />
                </div>
                
                {/* Mobile Info (Year and Tech) Aligned below image */}
                <div className="mt-6 relative z-10">
                  <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-bold mb-3">
                    <span>Built In</span>
                    <span className="text-base text-white">{project.year}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-[#2a2a2a] text-gray-300 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>


              {/* ==============================================
                  COMPLEX DESKTOP CARD LAYOUT (Shown lg+)
                  ============================================== */}
              <div 
                className="hidden lg:flex lg:flex-row w-full h-[500px] bg-[#111111] rounded-2xl overflow-hidden flex-col shadow-2xl border border-white/5 relative will-change-transform"
                style={{
                  transform: `scale(${1 - cardProgress[index] * 0.05})`, // Scales down by up to 5%
                  filter: `blur(${cardProgress[index] * 5}px)`, // Blurs up to 5px
                  transition: 'transform 0.1s ease-out, filter 0.1s ease-out'
                }}
              >
                {/* Dull / Darken Overlay for desktop */}
                <div 
                  className="absolute inset-0 bg-black z-50 pointer-events-none"
                  style={{ 
                    opacity: cardProgress[index] * 0.5, // Fades to 50% black
                    transition: 'opacity 0.1s ease-out'
                  }}
                />
                
                {/* Left Column: Software Name & Subtitle */}
                <div className="w-full lg:w-[25%] p-10 flex flex-col justify-between relative z-10">
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
                <div className="w-full lg:w-[30%] p-10 pt-16 flex flex-col bg-[#181818] relative z-10">
                  <h3 className="text-2xl font-medium tracking-tight mb-3">{project.aboutHeading}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4 line-clamp-3">
                    {project.about}
                  </p>

                  {/* Year & Tech Stack */}
                  <div className="mb-6">
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
                  <div className="flex gap-4 mb-6 mt-auto lg:mt-0">
                    <button className="flex-1 bg-white text-black py-3 rounded font-bold text-xs tracking-widest hover:bg-gray-200 transition-colors">
                      VIEW LIVE
                    </button>
                    <button className="flex-1 bg-[#2a2a2a] text-white py-3 rounded font-bold text-xs tracking-widest hover:bg-[#333] transition-colors">
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
        
      </div>
    </div>
  );
}