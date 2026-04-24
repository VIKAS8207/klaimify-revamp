import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import EcosystemShowcase from '../components/Operations';
import DynamicMarquee from '../components/Marquee';
import StackedProductCards from '../components/StackCards';

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
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 h-full ">
          
          <div className="animate-item group inline-flex items-center gap-4 px-6 py-2.5 mb-8 rounded-full bg-white/30 backdrop-blur-lg border border-black/5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-default">
  
  {/* Logo Container - Gives the logo a dedicated "dock" */}
  
  {/* Logo Container - Scaled down to w-5 */}
  <div className="flex items-center justify-center w-5 h-5 bg-[#FFCC32] rounded-full p-1 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[15deg]">
    <img 
      src="/image/klamifystamplogo.png" 
      alt="Logo" 
      className="w-full h-full object-contain" 
    />
  </div>

  {/* Text - Scaled down to 9px for a "precise" feel */}
  <span className="font-onest text-[9px] font-bold text-black uppercase tracking-[0.2em] leading-none">
    The Next Gen
  </span>

  {/* Decorative dot - Reduced size to match the slim profile */}
  <div className="w-1 h-1 rounded-full bg-yellow-500 opacity-40 group-hover:opacity-100 transition-opacity" /></div>
  

          {/* Hero Title */}
          <h1 className="animate-item font-onest text-6xl md:text-7xl font-bold text-black tracking-tighter leading-none mb-6">
            Your On-Demand <span className="text-yellow-500">Custom</span> <br />
            <span className="text-yellow-500">Software Development</span> Partner
          </h1>

          {/* Description */}
          <p className="animate-item text-gray-700 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            Building industrial-grade digital infrastructure and robust software solutions 
            designed for the modern enterprise scale.
          </p>

          {/* Action Area: Button & Avatars */}
          <div className="animate-item flex flex-col sm:flex-row justify-center items-center gap-6">
            
            <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/10 shrink-0">
              Book a meeting now
            </button>

            <div className="flex items-center gap-3 border border-gray-200 bg-white/60 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
              <div className="flex -space-x-3 shrink-0">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=11" alt="Expert Face" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=33" alt="Expert Face" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=68" alt="Expert Face" />
              </div>

              <div className="text-left flex flex-col justify-center">
                <span className="text-sm font-semibold text-gray-800 leading-none mb-1">Meet our team</span>
                <span className="text-xs text-gray-500 leading-none">They are the professionals</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Squiggly Scroll Indicator Layer */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center animate-item">
          <div className="relative flex items-center justify-center w-18 h-18">
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
              className="w-6 h-6 text-white relative z-10" 
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
      <StackedProductCards />

    </main>
  );
}