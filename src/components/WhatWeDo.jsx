import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

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
      mobileTrackRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (mobileTrackRef.current) {
      mobileTrackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const services = [
    { 
      title: "Web Designing & Development", 
      image: "/image/www.png",
      description: "Crafting visually engaging, responsive, and scalable websites tailored to enhance your digital presence and drive business growth."
    },
    { 
      title: "AI / ML / Gen AI", 
      image: "/image/AI.png",
      description: "Leveraging state-of-the-art artificial intelligence and machine learning to automate processes, analyze complex data, and build intelligent apps."
    },
    { 
      title: "Cloud Engineering", 
      image: "/image/Cloud.png",
      description: "Designing secure, robust, and cost-effective cloud architectures to streamline your operations and ensure high availability."
    },
    { 
      title: "Android & iOS Development", 
      image: "/image/app.png",
      description: "Building intuitive and high-performance native mobile applications for both Android and iOS platforms to connect with users anywhere."
    },
    { 
      title: "Data Engineering & Analytics", 
      image: "/image/data.png",
      description: "Transforming raw data into actionable insights through advanced pipelines, secure warehousing, and comprehensive analytics."
    },
    { 
      title: "Blockchain Development", 
      image: "/image/Block.png",
      description: "Developing decentralized applications and secure smart contracts to revolutionize trust, transparency, and traceability in your business."
    }
  ];

  return (
    <div 
      ref={targetRef} 
      /* Reduced mobile top/bottom padding here (pt-12 pb-16 instead of py-24) */
      className={`relative bg-[#050505] text-white font-sans selection:bg-gray-800 selection:text-white ${isDesktop ? 'h-[500vh]' : 'pt-12 pb-16 overflow-hidden'}`}
    >
      <div className={`${isDesktop ? 'sticky top-0 h-screen overflow-hidden flex flex-col justify-center' : 'w-full flex flex-col'}`}>
        
        {/* BACKGROUND SQUIGGLY LINE (Desktop Only) */}
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
                stroke="#eab308"
                strokeWidth="75"
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

        {/* HEADER */}
        <div className={`${isDesktop ? 'absolute top-[8%] md:top-[15%] left-6 md:left-[15vw] z-20' : 'px-6 mb-6 z-20 w-full'}`}>
        
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-2">
            What we do
          </h1>
        </div>

        {/* DESKTOP BOTTOM PARAGRAPH (Hidden on Mobile) */}
        {isDesktop && (
          <div className="absolute bottom-8 right-6 md:right-[10vw] max-w-[480px] text-right z-20">
            <p className="text-gray-400 text-sm leading-snug">
              We pride ourselves on our ability to craft digital products that not only meet but exceed the expectations of our clients.
            </p>
          </div>
        )}

        {/* CARDS CONTAINER */}
        <div className={`${isDesktop ? 'absolute top-[28%] left-0 w-full h-full overflow-visible pointer-events-none' : 'w-full relative z-10'}`}>
          <div 
            ref={mobileTrackRef}
            className={`flex flex-row gap-6 ${
              isDesktop 
                ? 'w-max pl-[15vw] pr-[10vw] pointer-events-auto will-change-transform' 
                : 'w-full overflow-x-auto px-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden' 
            }`}
            style={{ 
              transform: isDesktop ? `translateX(calc(-${scrollProgress} * (100% - 100vw)))` : 'none',
              transition: isDesktop ? 'transform 0.1s ease-out' : 'none',
              scrollbarWidth: isDesktop ? 'auto' : 'none',
            }}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className={`w-[280px] md:w-[380px] h-[380px] md:h-[480px] relative flex-shrink-0 group shadow-2xl cursor-pointer ${!isDesktop ? 'snap-center' : ''}`}
                style={{ perspective: '1000px' }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget.querySelector('.flip-card-inner'), {
                    rotationY: 180,
                    duration: 0.6,
                    ease: 'power2.inOut'
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget.querySelector('.flip-card-inner'), {
                    rotationY: 0,
                    duration: 0.6,
                    ease: 'power2.inOut'
                  });
                }}
              >
                {/* 3D Rotating Container */}
                <div 
                  className="flip-card-inner relative w-full h-full rounded-xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* FRONT FACE */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-[#111]"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)' 
                    }}
                  >
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                    </div>

                    <div className="absolute top-8 left-0 w-full z-20 overflow-hidden h-[5rem] px-4 pointer-events-none">
                      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[5rem]">
                        <h3 className="h-[5rem] text-xl md:text-2xl font-semibold tracking-tight text-white flex items-center justify-center text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight px-2">
                          {service.title}
                        </h3>
                        <h3 className="h-[5rem] text-xl md:text-2xl font-semibold tracking-tight text-white flex items-center justify-center text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight px-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-[#111]  border border-white/5 rounded-xl flex flex-col items-center justify-center p-8 text-center shadow-inner"
                    style={{ 
                      backfaceVisibility: 'hidden', 
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg) translateZ(1px)' 
                    }}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white drop-shadow-md mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed drop-shadow-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE CONTROLS & BOTTOM PARAGRAPH */}
        {!isDesktop && (
          <div className="flex flex-col px-6 mt-6 gap-6 z-20 w-full">
            {/* Arrows */}
            <div className="flex justify-end gap-4">
              <button onClick={scrollPrev} className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-white/10 active:scale-95 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={scrollNext} className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-white/10 active:scale-95 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            
            {/* Bottom Text (Properly aligned below cards for mobile) */}
            <div className="w-full border-t border-white/10 pt-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                We pride ourselves on our ability to craft digital products that not only meet but exceed the expectations of our clients.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}