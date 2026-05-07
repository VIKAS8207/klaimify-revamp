import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function LandingPage() {
  const [isToggled, setIsToggled] = useState(false);
  const knobRef = useRef(null);
  const toggleContainerRef = useRef(null);

  const skills = [
    "Frontend", "Mark Essentials", "Backend", "UI Libraries", "Database", 
    "E-Commerce & CMS", "UI/UX Design", "Cloud", "Manual Testing", 
    "API Testing & Documentation", "Performance Testing", 
    "AI/ML/Gen AI Frameworks", "Data Migration & Modernization", 
    "Data & Analytics", "Data Processing & Transformation", "JavaScript"
  ];

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);

    // Dynamically calculate the move distance based on the element sizes
    const trackWidth = toggleContainerRef.current.offsetWidth;
    const knobWidth = knobRef.current.offsetWidth;
    const distanceToMove = trackWidth - knobWidth;

    // Animate the toggle knob
    gsap.to(knobRef.current, {
      x: newState ? distanceToMove : 0, 
      duration: 0.5,
      ease: 'back.out(1.5)',
    });

    // Trigger the GSAP Confetti (Party Pop)
    triggerConfetti();
  };

  const triggerConfetti = () => {
    // Get the exact center of the toggle button to spawn the confetti
    const rect = toggleContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const colors = ['#f97316', '#3b82f6', '#8b5cf6', '#10b981', '#f43f5e', '#fbbf24'];
    const particleCount = 70;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // Randomize shape (circle or square)
      particle.style.position = 'fixed';
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;
      particle.style.width = `${Math.random() * 8 + 6}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '4px';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = 9999;
      
      document.body.appendChild(particle);

      // GSAP Animation for explosion effect
      const angle = Math.random() * Math.PI * 2;
      const velocity = 150 + Math.random() * 300;
      
      gsap.to(particle, {
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity + 150, // simulated gravity
        rotation: Math.random() * 720 - 360,
        opacity: 0,
        duration: 0.8 + Math.random() * 0.8,
        ease: 'power3.out',
        onComplete: () => {
          particle.remove(); // Clean up DOM
        }
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 font-sans overflow-hidden flex flex-col justify-between pt-16">
      
      {/* Custom Keyframes for Marquee */}
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll-marquee 40s linear infinite;
        }
      `}</style>

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 flex-grow">
        
        <p className="text-[11px] md:text-[13px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-8">
          Consulting, Programming & Design
        </p>

        {/* Heading Line 1 */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-gray-900">
            We support
          </h1>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFCC32] rounded-full flex items-center justify-center text-black shadow-lg mt-2 md:mt-4">
            <svg className="w-5 h-5 md:w-8 md:h-8 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </div>

        {/* Heading Line 2 - Massive Text & Large Overlapping Toggle */}
        <div className="flex items-center justify-center -my-4 md:-my-8">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none font-bold tracking-tighter text-gray-900">
            gr
          </h1>
          
          {/* Interactive Toggle Switch (O) */}
          {/* The container acts as the thin track, the knob overlaps it vertically */}
          <div 
            ref={toggleContainerRef}
            onClick={handleToggle}
            className="relative w-[160px] md:w-[240px] lg:w-[320px] flex items-center mx-2 md:mx-6 cursor-pointer mt-[2%]"
          >
            {/* Thin Track */}
            <div className="w-full h-[40px] md:h-[60px] lg:h-[80px] bg-gradient-to-r from-[#dbeafe] to-[#FFCC32] rounded-full shadow-inner border border-white/50"></div>
            
            {/* Oversized Knob that overlaps top and bottom */}
            <div 
              ref={knobRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[120px] lg:w-[160px] h-[80px] md:h-[120px] lg:h-[160px] bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center justify-center z-10 border-[6px] md:border-[8px] lg:border-[12px] border-white"
            >
              {/* Inner knob styling */}
              <div className="w-[60%] h-[60%] rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-100"></div>
            </div>
          </div>

          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none font-bold tracking-tighter text-gray-900">
            wth
          </h1>
        </div>

        {/* Heading Line 3 */}
        <div className="flex items-center justify-center gap-3 mt-4 md:mt-8">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2 1-3.2-7.4-4.4 4.8z" />
          </svg>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-gray-800">
            of your busines
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mt-12 text-[14px] md:text-[16px] text-gray-400 font-medium max-w-lg mx-auto leading-relaxed">
          We turn great ideas into working products.<br/>
          We focus on good communication and understanding your business.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 mb-16 flex flex-col items-center gap-6">
          <button className="group relative w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-black text-white font-bold rounded-full overflow-hidden border border-black shadow-xl shadow-black/10 shrink-0 text-sm sm:text-base">
              {/* The Rising White Bubble - Increased to 400% width and -100% top for foolproof coverage */}
              <span className="cursor-pointer absolute top-[130%] left-1/2 w-[400%] aspect-square bg-white rounded-full -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:top-[-100%] z-0"></span>
              
              {/* The Button Text */}
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black cursor-pointer">
                Book a meeting now
              </span>
            </button>
          
          <a href="#" className="text-[13px] md:text-[15px] font-bold text-gray-900 border-b-[3px] border-gray-900 pb-0.5 hover:text-[#FFCC32] hover:border-[#FFCC32] transition-colors">
            More about us
          </a>
        </div>
      </main>

      {/* Tech Stack Marquee Footer */}
      <div className="relative w-full border-t border-gray-100 py-6 overflow-hidden bg-white/50 backdrop-blur-sm z-10">
        <div className="animate-marquee flex items-center gap-12 text-[14px] md:text-[16px] font-semibold text-gray-500 uppercase tracking-wider">
          {/* Render the list twice to create a seamless infinite scrolling loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              {skill}
              <span className="mx-6 md:mx-12 text-indigo-300/50">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Circular Floating Badge (Bottom Right) */}
      <div className="hidden lg:flex absolute bottom-32 right-16 w-32 h-32 z-20 items-center justify-center">
        {/* Spinning Text */}
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 overflow-visible font-bold text-[12px] uppercase tracking-[0.2em]">
            <path id="circlePath" fill="none" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Transform your business • Transform your business •
              </textPath>
            </text>
          </svg>
        </div>
        {/* Center Arrow */}
        <div className="text-gray-800">
          <svg className="w-5 h-5 transform rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </div>

    </div>
  );
}