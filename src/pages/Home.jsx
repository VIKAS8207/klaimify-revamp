import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import EcosystemShowcase from '../components/Operations';
import DynamicMarquee from '../components/Marquee';
import StackedProductCards from '../components/StackCards';
import WhatWeDo from '../components/WhatWeDo';
import ParaHint from '../components/ParaHint';
import IndustriesServe from '../components/Industries';

// Register the GSAP hook
gsap.registerPlugin(useGSAP);

// Path to your video file
const videoSrc = '/path-to-your-industrial-loop.mp4'; 

// Helper function to generate a perfect scalloped/bumpy circle path
const generateWavyPath = () => {
  let path = "";
  const numBumps = 20; // Matches the number of bumps in your image
  const radius = 43;   // The inner radius of the dips
  const bumpHeight = 6; // How far the bumps push outward
  const center = 50;

  for (let i = 0; i < numBumps; i++) {
    const startAngle = (i / numBumps) * Math.PI * 2;
    const endAngle = ((i + 1) / numBumps) * Math.PI * 2;
    // Midpoint for the peak of the curve
    const midAngle = ((i + 0.5) / numBumps) * Math.PI * 2;

    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    
    const cx = center + (radius + bumpHeight) * Math.cos(midAngle);
    const cy = center + (radius + bumpHeight) * Math.sin(midAngle);
    
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);

    if (i === 0) {
      path += `M ${x1} ${y1} `;
    }
    // Draws a smooth, rounded bump
    path += `Q ${cx} ${cy} ${x2} ${y2} `;
  }
  return path + "Z";
};

export default function Home() {
  // 1. Create a reference for the main container to scope our GSAP animations
  const containerRef = useRef(null);
  
  // Ref for the squiggly circle to animate it
  const squigglyCircleRef = useRef(null);

  // 2. Set up the professional entrance animation
  useGSAP(() => {
    // This grabs everything with the class "animate-item" inside containerRef
    gsap.from(".animate-item", {
      y: 40,              // Slide up from 40px down
      opacity: 0,         // Start completely transparent
      duration: 1.2,      // Smooth 1.2s duration for a high-end feel
      ease: "power3.out", // Clean, professional deceleration
      stagger: 0.15,      // Each element appears 0.15s after the previous one
      delay: 0.2          // Wait a fraction of a second on load before starting
    });
  }, { scope: containerRef });

  // 3. Set up the scroll-reactive rotating circle
  useGSAP(() => {
    // Start standard slow, forward rotation
    const rotationTween = gsap.to(squigglyCircleRef.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: "none"
    });

    let scrollTimeout;

    const handleScroll = () => {
      // On scroll: drastically change speed and reverse direction
      gsap.to(rotationTween, { timeScale: -4, duration: 0.3 });

      clearTimeout(scrollTimeout);
      
      // When scrolling stops, ease back to normal speed and forward direction
      scrollTimeout = setTimeout(() => {
        gsap.to(rotationTween, { timeScale: 1, duration: 0.5 });
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, { scope: containerRef });

  return (
    // The main wrapper now holds all the different sections of the page
    <main ref={containerRef} className="w-full">
      
      {/* =========================================
          HERO SECTION (100vh)
          ========================================= */}
      <section className="relative w-full h-screen overflow-hidden bg-white">
        
        {/* 1. Full-Screen Loop Video Layer */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/video/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 2. Gradient Overlay Layer */}
        <div 
          className="absolute inset-0 z-10 w-full h-full"
          style={{
            background: `linear-gradient(to top, 
              white 0%, 
              white 40%, 
              rgba(255, 255, 255, 0) 100%)`
          }}
        />

        {/* 3. Hero Content Layer */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 h-full pt-16 sm:pt-0">
          
          <div className="animate-item group inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-2.5 mb-6 sm:mb-8 rounded-full bg-white/30 backdrop-blur-lg border border-black/5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-default">
  
            {/* Logo Container - Scaled down to w-5 */}
            <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 bg-[#FFCC32] rounded-full p-0.5 sm:p-1 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[15deg]">
              <img 
                src="/image/klamifystamplogo.png" 
                alt="Logo" 
                className="w-full h-full object-contain" 
              />
            </div>

            {/* Text - Scaled down for mobile precision */}
            <span className="font-onest text-[8px] sm:text-[9px] font-bold text-black uppercase tracking-[0.2em] leading-none mt-[1px]">
              The Next Gen
            </span>

            {/* Decorative dot */}
            <div className="w-1 h-1 rounded-full bg-yellow-500 opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
  

          {/* Hero Title */}
          <h1 className="pointer-events-none font-stack font-bold animate-item text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-black tracking-tighter leading-[1.1] sm:leading-none mb-4 sm:mb-6">
            Your On-Demand <span className="text-yellow-500">Custom</span> <br className="hidden sm:block" />
            <span className="text-yellow-500">Software Development</span> Partner
          </h1>

          <p className="pointer-events-none animate-item text-gray-700 text-sm sm:text-base md:text-lg max-w-[95%] sm:max-w-2xl leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
            Building industrial-grade digital infrastructure and 
            <span className="relative inline-block mx-1">
              <span className="relative z-10 px-1">robust software solutions</span>
              <span className="absolute inset-0 bg-yellow-200/70 -skew-x-12 -rotate-1 rounded-sm scale-110 -z-10"></span>
            </span>
            designed for the modern enterprise scale.
          </p>

          {/* Action Area: Button & Avatars */}
          <div className="animate-item flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none">
            
            <button className="group relative w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-black text-white font-bold rounded-full overflow-hidden border border-black shadow-xl shadow-black/10 shrink-0 text-sm sm:text-base">
              {/* The Rising White Bubble - Increased to 400% width and -100% top for foolproof coverage */}
              <span className="cursor-pointer absolute top-[130%] left-1/2 w-[400%] aspect-square bg-white rounded-full -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:top-[-100%] z-0"></span>
              
              {/* The Button Text */}
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black cursor-pointer">
                Book a meeting now
              </span>
            </button>

            <div className="flex items-center justify-center sm:justify-start gap-3 border border-gray-200 bg-white/60 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm w-auto">
              <div className="flex -space-x-3 shrink-0">
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=11" alt="Expert Face" />
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=33" alt="Expert Face" />
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=68" alt="Expert Face" />
              </div>

              <div className="text-left flex flex-col justify-center">
                <span className="text-[13px] sm:text-sm font-semibold text-gray-800 leading-none mb-1 pointer-events-none">Meet our team</span>
                <span className="text-[10px] sm:text-xs text-gray-500 leading-none pointer-events-none">They are the professionals</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Squiggly Scroll Indicator Layer */}
        <div className="absolute bottom-12 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center animate-item scale-90 sm:scale-100">
          <div className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18">
            {/* Dynamically Generated Bumpy Circle */}
            <svg 
              ref={squigglyCircleRef}
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full text-black"
            >
              <path 
                fill="currentColor"
                d={generateWavyPath()} 
              />
            </svg>
            
            {/* Static Down Arrow */}
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>

      </section>

      <EcosystemShowcase />
      <DynamicMarquee />
      <WhatWeDo />
      <StackedProductCards />
      <IndustriesServe />
      <ParaHint />

    </main>
  );
}