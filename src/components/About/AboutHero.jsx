// File: src/components/About/AboutHero.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the GSAP hook
gsap.registerPlugin(useGSAP);

export default function AboutHero() {
  const containerRef = useRef(null);

  // Professional GSAP entrance animation matching the Home page
  useGSAP(() => {
    gsap.from(".animate-item", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      
      {/* =========================================
          SCATTERED CORNER CARDS
          ========================================= */}
          
      {/* Top Left: Yellow Sticky Note */}
      <div className="animate-item absolute top-16 left-[5%] xl:left-[10%] w-56 p-5 bg-[#FFCC32] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md -rotate-6 hidden lg:block z-10">
        <div className="absolute -top-3 right-4 w-4 h-4 bg-black rounded-full shadow-sm"></div> {/* Pin */}
        <p className="text-black text-sm font-medium leading-relaxed font-sans">
          Take notes to keep track of crucial details, and accomplish more tasks with ease.
        </p>
      </div>

      {/* Bottom Left: Progress Card */}
      <div className="animate-item absolute bottom-16 left-[2%] xl:left-[8%] w-72 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 -rotate-2 hidden lg:block z-10">
        <h3 className="font-semibold text-black mb-4 text-sm font-anybody">Today's tasks</h3>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-gray-500 font-onest">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-black text-white flex items-center justify-center text-[10px]">8</span> 
                New Ideas for campaign
              </span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full">
              <div className="bg-[#FFCC32] h-1.5 rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Right: Minimal Notification Card */}
      <div className="animate-item absolute top-24 right-[5%] xl:right-[10%] w-64 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 rotate-3 hidden lg:block z-10">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
               <span className="text-xl">⏱️</span>
            </div>
            <div>
               <p className="text-sm font-semibold text-black font-anybody">Speech notes</p>
               <p className="text-xs text-gray-500 font-onest mt-1">Built natively for teams.</p>
            </div>
         </div>
      </div>

      {/* Bottom Right: Integrations Card */}
      <div className="animate-item absolute bottom-20 right-[5%] xl:right-[12%] w-64 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 -rotate-3 hidden lg:block z-10">
        <h3 className="font-semibold text-black mb-4 text-sm font-anybody">100+ Integrations</h3>
        <div className="flex gap-[-10px]">
           <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-black font-bold z-30">M</div>
           <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-[#FFCC32] font-bold z-20 -ml-4">31</div>
           <div className="w-12 h-12 bg-black rounded-xl shadow-md border border-gray-800 flex items-center justify-center text-white font-bold z-10 -ml-4">▲</div>
        </div>
      </div>

      {/* =========================================
          CENTRAL CONTENT (Unchanged)
          ========================================= */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-6">
        
        {/* Klaimify Stamp / Icon */}
        <div className="animate-item w-20 h-20 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center mb-10 border border-gray-50">
          <div className="flex items-center justify-center w-10 h-10 bg-[#FFCC32] rounded-full p-2 shadow-md">
             <img 
                src="/image/klamifystamplogo.png" 
                alt="Logo" 
                className="w-full h-full object-contain" 
             />
          </div>
        </div>

        {/* Heading - Changed to About Us */}
        <h1 className="animate-item font-anybody font-bold text-5xl md:text-7xl text-black tracking-tighter leading-[1.1] mb-6">
          About Us
        </h1>
        
        {/* Sub-text with the yellow marker integrated */}
        <p className="animate-item text-gray-700 text-base md:text-lg max-w-lg leading-relaxed mb-10 mt-2">
          Efficiently manage your 
          <span className="relative inline-block mx-2">
            <span className="relative z-10 px-1 text-black font-semibold">digital infrastructure</span>
            {/* The yellow skew highlight */}
            <span className="absolute inset-0 bg-yellow-200/70 -skew-x-12 -rotate-1 rounded-sm scale-110 -z-10"></span>
          </span> 
          and boost productivity at an enterprise scale.
        </p>

        {/* CTA Button */}
        <div className="animate-item">
            <button className="group relative w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-black text-white font-bold rounded-full overflow-hidden border border-black shadow-xl shadow-black/10 shrink-0 text-sm sm:text-base">
              {/* The Rising White Bubble */}
              <span className="cursor-pointer absolute top-[130%] left-1/2 w-[400%] aspect-square bg-white rounded-full -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:top-[-100%] z-0"></span>
              
              {/* The Button Text */}
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black cursor-pointer font-onest">
                Get a free demo
              </span>
            </button>
        </div>
      </div>

    </section>
  );
}