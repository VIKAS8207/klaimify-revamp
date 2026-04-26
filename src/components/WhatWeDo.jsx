import React, { useRef, useState, useEffect } from 'react';

export default function WhatWeDo() {
  const targetRef = useRef(null);
  const pathRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Handle window resize to toggle between desktop and mobile modes
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Measure the SVG path length on mount for the drawing animation
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Track scroll position to map it to horizontal movement and SVG drawing
  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !isDesktop) return;
      
      const { top, height } = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const maxScroll = height - windowHeight;
      const currentScroll = -top;
      
      const progress = Math.max(0, Math.min(1, currentScroll / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDesktop]);

  // Mobile horizontal scroll controls
  const scrollPrev = () => {
    if (mobileTrackRef.current) {
      mobileTrackRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (mobileTrackRef.current) {
      mobileTrackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  // Data for the 6 cards with background images
  const services = [
    { 
      title: "Web Designing & Development", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "AI / ML / Gen AI", 
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Cloud Engineering", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Android & iOS Development", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Data Engineering & Analytics", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Blockchain Development", 
      image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec672?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  return (
    /* OUTER WRAPPER: Conditionally tall for desktop scroll, normal height for mobile */
    <div 
      ref={targetRef} 
      className={`relative bg-[#050505] text-white font-sans selection:bg-gray-800 selection:text-white ${isDesktop ? 'h-[500vh]' : 'pb-32 pt-24'}`}
    >
      
      {/* STICKY CONTAINER (Desktop) vs STATIC CONTAINER (Mobile) */}
      <div className={`${isDesktop ? 'sticky top-0 h-screen overflow-hidden' : 'relative w-full overflow-hidden'} flex flex-col justify-center`}>
        
        {/* BACKGROUND SQUIGGLY LINE (The Loop - Only animated/visible properly on desktop) */}
        {isDesktop && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1440 900" 
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                ref={pathRef}
                d="M -100 100 C 400 100, 600 800, 900 600 C 1200 400, 600 200, 800 900 C 900 1200, 1300 800, 1600 900"
                fill="none"
                stroke="#eab308" /* Yellow */
                strokeWidth="15"
                strokeLinecap="round"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: pathLength - (scrollProgress * pathLength * 2),
                  opacity: scrollProgress > 0.9 ? (1 - scrollProgress) * 10 : 0.6,
                  filter: 'drop-shadow(0px 0px 10px rgba(234, 179, 8, 0.5))'
                }}
              />
            </svg>
          </div>
        )}

        {/* STATIC LAYOUT ELEMENTS */}
        <div className="absolute top-[12%] md:top-[15%] left-6 md:left-[15vw] z-20">
          <div className="text-[10px] text-gray-500 font-bold tracking-[0.15em] leading-tight flex gap-2 md:flex-col md:gap-1 mb-4 md:absolute md:-top-6 md:-left-[10vw]">
            <span>TYPES OF</span>
            <span>ACTIVITIES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-2">
            What we do
          </h1>
        </div>

        {/* Desktop bottom right text */}
        <div className="absolute bottom-10 right-6 md:bottom-16 md:right-[10vw] max-w-[280px] text-right z-20 hidden md:block">
          <p className="text-gray-400 text-sm leading-snug">
            We pride ourselves on our ability to craft digital products that not only meet but exceed the expectations of our clients.
          </p>
        </div>

        {/* Mobile Left & Right Arrows (Hidden on Desktop) */}
        {!isDesktop && (
          <div className="absolute top-[12%] right-6 flex gap-3 z-20">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-white/5 active:scale-95">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-white/5 active:scale-95">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}

        {/* ==========================================
            CARDS CONTAINER
            ========================================== */}
        <div className={`${isDesktop ? 'absolute top-[28%] left-0 w-full h-full overflow-visible pointer-events-none' : 'mt-24 w-full'}`}>
          <div 
            ref={mobileTrackRef}
            className={`flex flex-row gap-6 z-10 ${
              isDesktop 
                ? 'w-max pl-[15vw] pr-[10vw] pointer-events-auto will-change-transform' 
                : 'w-full overflow-x-hidden pointer-events-auto px-6' /* overflow-x-hidden hides scrollbar but JS can scroll */
            }`}
            style={{ 
              /* Math Fix: 100% is the full track width. 100vw is the screen width.
                This stops the scroll exactly when the right edge of the track touches the right edge of the screen! 
              */
              transform: isDesktop ? `translateX(calc(-${scrollProgress} * (100% - 100vw)))` : 'none',
              transition: isDesktop ? 'transform 0.1s ease-out' : 'none'
            }}
          >
            
            {services.map((service, index) => (
              <div 
                key={index}
                className="w-[300px] md:w-[380px] h-[400px] md:h-[480px] rounded-xl relative overflow-hidden flex-shrink-0 group shadow-2xl bg-[#111] cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700 ease-in-out group-hover:scale-105"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80"></div>
                </div>

                {/* Hover Text Animation (Moves Up) */}
                <div className="absolute top-10 left-0 w-full z-20 overflow-hidden h-10 px-4">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-10">
                    
                    {/* Primary Text (Visible by default) */}
                    <h3 className="h-10 text-2xl font-semibold tracking-tight text-white flex items-center justify-center text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                      {service.title}
                    </h3>
                    
                    {/* Secondary Text (Slides in from bottom on hover) */}
                    <h3 className="h-10 text-2xl font-semibold tracking-tight text-white flex items-center justify-center text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                      {service.title}
                    </h3>
                    
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}