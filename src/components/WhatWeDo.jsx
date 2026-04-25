import React, { useRef, useState, useEffect } from 'react';

export default function WhatWeDo() {
  const targetRef = useRef(null);
  const pathRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(1000);

  // Measure the SVG path length on mount for the drawing animation
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Track scroll position to map it to horizontal movement and SVG drawing
  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;
      
      // Get the container's exact position relative to the viewport
      const { top, height } = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate max scrollable distance inside this wrapper
      const maxScroll = height - windowHeight;
      const currentScroll = -top;
      
      // Create a progress value between 0 and 1
      const progress = Math.max(0, Math.min(1, currentScroll / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Fade out the squiggly line in the last 10% of the scroll
  const lineOpacity = scrollProgress > 0.9 ? (1 - scrollProgress) * 10 : 1;

  return (
    /* OUTER WRAPPER: Makes the container tall so we have plenty of room to scroll vertically */
    <div ref={targetRef} className="relative h-[400vh] bg-[#050505] text-white font-sans selection:bg-gray-800 selection:text-white">
      
      {/* STICKY CONTAINER: Locks to the screen while we scroll the height of the outer wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center pl-6 md:pl-12">
        
        {/* ==========================================
            BACKGROUND SQUIGGLY LINE (Scroll Linked)
            ========================================== */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
          style={{ opacity: lineOpacity }}
        >
          <svg 
            className="w-full h-full min-w-[1200px]" 
            viewBox="0 0 1440 600" 
            preserveAspectRatio="xMidYMid slice"
            style={{ filter: 'drop-shadow(0px 0px 20px rgba(234, 179, 8, 0.4))' }}
          >
            <path
              ref={pathRef}
              d="M -100 400 C 200 100, 400 700, 800 300 S 1200 100, 1600 500"
              fill="none"
              stroke="#eab308" /* Tailwind Yellow-500 */
              strokeWidth="50"
              strokeLinecap="round"
              style={{
                strokeDasharray: pathLength,
                /* This draws the line by offsetting the dash array based on scroll progress */
                strokeDashoffset: pathLength - (scrollProgress * pathLength),
                transition: 'stroke-dashoffset 0.1s ease-out',
              }}
            />
          </svg>
        </div>

        {/* LEFT SIDEBAR - TYPES OF ACTIVITIES (Static) */}
        <div className="absolute top-[25%] left-6 md:left-12 text-[10px] text-gray-500 font-bold tracking-[0.15em] leading-tight flex flex-col gap-1 hidden sm:flex z-20">
          <span>TYPES OF</span>
          <span>ACTIVITIES</span>
        </div>

        {/* HEADER (Static) */}
        <div className="absolute top-[15%] md:top-[20%] left-6 md:left-12 z-20 md:ml-32">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-2">
            What we do
          </h1>
          <p className="text-[#888888] text-sm leading-snug hidden md:block">
            Keep scrolling down to explore our digital products.
          </p>
        </div>

        {/* ==========================================
            HORIZONTAL SLIDING CARDS (Scroll Linked)
            ========================================== */}
        <div className="relative z-10 w-full mt-24 sm:mt-16 md:ml-32">
          <div 
            className="flex gap-6 md:gap-8 w-max will-change-transform pr-12 md:pr-48"
            /* MAGIC FORMULA: Maps vertical progress (0 to 1) to horizontal translation.
              Moves the container fully to the left, but stops exactly when the right edge hits the screen.
            */
            style={{ 
              transform: `translateX(calc(${scrollProgress} * (-100% + 100vw - 48px)))`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            
            {/* CARD 1: GRAPHIC DESIGN */}
            <div className="w-[320px] md:w-[420px] aspect-square bg-gradient-to-br from-[#ff6a00] to-[#e63500] rounded-xl relative overflow-hidden flex-shrink-0 group shadow-2xl shadow-black/50">
              <div className="relative z-20 p-8 text-center bg-gradient-to-b from-black/40 to-transparent">
                <h3 className="text-3xl font-semibold tracking-tight text-white mb-3 shadow-black/50 drop-shadow-md">Graphic Design</h3>
                <p className="text-sm text-white/90 font-light leading-relaxed max-w-[280px] mx-auto">
                  Crafting compelling visual identities and stunning 3D aesthetics that define your brand's unique character.
                </p>
              </div>
              <div className="absolute -bottom-48 -right-16 w-[300px] h-[550px] bg-[#0a0a0a] rounded-[45px] border-[10px] border-[#1f1f1f] shadow-2xl rotate-[25deg] transform group-hover:-translate-y-6 transition-transform duration-700 ease-out overflow-hidden flex flex-col z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-[#1f1f1f] rounded-b-2xl z-10"></div>
                <div className="flex-1 w-full bg-gradient-to-b from-[#111] to-[#050505] p-6 pt-12 relative">
                  <div className="absolute top-[20%] right-8 w-14 h-14 bg-gradient-to-br from-[#ff6a00] to-[#ffaa00] rounded-2xl shadow-[0_10px_30px_rgba(255,106,0,0.4)] flex items-center justify-center transform -rotate-12">
                     <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div className="absolute bottom-40 left-6 transform -rotate-[15deg] space-y-1">
                    <p className="text-gray-500 text-sm">Logo design</p>
                    <p className="text-gray-400 text-lg font-medium">Branding</p>
                    <p className="text-gray-600 text-sm">Identity</p>
                    <p className="text-gray-700 text-sm">3D</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: ART DIRECTION */}
            <div className="w-[320px] md:w-[420px] aspect-square bg-[#899084] rounded-xl relative overflow-hidden flex-shrink-0 group shadow-2xl shadow-black/50">
               <div className="relative z-20 p-8 text-center bg-gradient-to-b from-black/20 to-transparent">
                 <h3 className="text-3xl font-semibold tracking-tight text-white mb-3 shadow-black/50 drop-shadow-md">Art Direction</h3>
                 <p className="text-sm text-white/90 font-light leading-relaxed max-w-[280px] mx-auto">
                   Guiding creative visions with expert consultation and comprehensive project support from ideation to launch.
                 </p>
               </div>
               <svg className="absolute bottom-0 w-full h-[200px] text-white/20 z-0" viewBox="0 0 400 200" fill="none" preserveAspectRatio="none">
                 <path d="M-50 100 C 50 100, 100 150, 200 150 C 300 150, 350 100, 450 100 L 450 200 L -50 200 Z" fill="currentColor" opacity="0.1"/>
                 <path d="M-50 100 C 50 100, 100 150, 200 150 C 300 150, 350 100, 450 100" stroke="currentColor" strokeWidth="2"/>
               </svg>
               <div className="absolute inset-0 flex items-end justify-center pb-12 pointer-events-none z-10">
                 <div className="absolute z-20 w-[140px] h-[160px] bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform -translate-x-14 translate-y-4 group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                   <svg className="w-5 h-5 text-white/70 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                   <p className="text-white font-medium text-xs">Consultation</p>
                   <div className="absolute bottom-3 right-4 text-2xl font-light text-white/50">01</div>
                 </div>
                 <div className="absolute z-10 w-[160px] h-[140px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform translate-x-12 translate-y-12 rotate-12 group-hover:rotate-[15deg] group-hover:translate-x-16 transition-all duration-700 ease-out flex flex-col justify-end">
                   <p className="text-white font-medium text-xs text-right">Project Support</p>
                   <div className="absolute bottom-3 right-4 text-2xl font-light text-white/40">02</div>
                 </div>
                 <div className="absolute bottom-8 left-[45%] w-10 h-10 bg-white/30 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                   <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                 </div>
               </div>
            </div>

            {/* CARD 3: MARKETING */}
            <div className="w-[320px] md:w-[420px] aspect-square bg-gradient-to-br from-[#7a78e8] to-[#1d74d2] rounded-xl relative overflow-hidden flex-shrink-0 group shadow-2xl shadow-black/50">
               <div className="relative z-20 p-8 text-center bg-gradient-to-b from-black/20 to-transparent">
                 <h3 className="text-3xl font-semibold tracking-tight text-white mb-3 shadow-black/50 drop-shadow-md">Marketing</h3>
                 <p className="text-sm text-white/90 font-light leading-relaxed max-w-[280px] mx-auto">
                   Data-driven campaigns and strategic insights tailored to boost your reach, engagement, and overall ROI.
                 </p>
               </div>
               <div className="absolute bottom-8 left-0 w-full flex justify-center items-end gap-6 z-10">
                 <div className="flex flex-col items-center gap-3">
                   <div className="w-12 h-[70px] bg-white/20 backdrop-blur-xl border-t border-l border-white/40 rounded-t-lg shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform group-hover:scale-y-110 origin-bottom transition-transform duration-500"></div>
                   <span className="text-white/60 text-xs font-medium">Jan</span>
                 </div>
                 <div className="flex flex-col items-center gap-3">
                   <div className="w-12 h-[40px] bg-white/20 backdrop-blur-xl border-t border-l border-white/40 rounded-t-lg shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform group-hover:scale-y-110 origin-bottom transition-transform duration-500 delay-75"></div>
                   <span className="text-white/60 text-xs font-medium">Feb</span>
                 </div>
                 <div className="flex flex-col items-center gap-3 relative">
                   <div className="absolute -top-8 text-white font-semibold text-sm drop-shadow-md group-hover:-translate-y-2 transition-transform duration-500">74%</div>
                   <div className="w-12 h-[130px] bg-gradient-to-t from-white/20 via-white/40 to-[#c1a0ff] backdrop-blur-xl border-t border-white/60 rounded-t-lg shadow-[0_10px_40px_rgba(193,160,255,0.4)] transform group-hover:scale-y-110 origin-bottom transition-transform duration-500 delay-150"></div>
                   <span className="text-white font-medium text-xs">Mar</span>
                   <div className="absolute -bottom-4 w-1 h-1 bg-white rounded-full"></div>
                 </div>
               </div>
            </div>

            {/* CARD 4: UI/UX DESIGN */}
            <div className="w-[320px] md:w-[420px] aspect-square bg-gradient-to-br from-[#12b981] to-[#047857] rounded-xl relative overflow-hidden flex-shrink-0 group shadow-2xl shadow-black/50">
               <div className="relative z-20 p-8 text-center bg-gradient-to-b from-black/20 to-transparent">
                 <h3 className="text-3xl font-semibold tracking-tight text-white mb-3 shadow-black/50 drop-shadow-md">UI/UX Design</h3>
                 <p className="text-sm text-white/90 font-light leading-relaxed max-w-[280px] mx-auto">
                   Designing intuitive, user-centric interfaces ensuring seamless digital experiences across all platforms.
                 </p>
               </div>
               <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 gap-5 z-10 pointer-events-none">
                  <div className="w-40 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transform group-hover:w-48 transition-all duration-500 shadow-lg"></div>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"></div>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500"></div>
                  </div>
                  <div className="w-32 h-6 bg-[#047857]/50 backdrop-blur-md rounded-full border border-white/10 transform -translate-x-4"></div>
               </div>
            </div>

            {/* CARD 5: DEVELOPMENT */}
            <div className="w-[320px] md:w-[420px] aspect-square bg-gradient-to-br from-[#e11d48] to-[#881337] rounded-xl relative overflow-hidden flex-shrink-0 group shadow-2xl shadow-black/50">
               <div className="relative z-20 p-8 text-center bg-gradient-to-b from-black/20 to-transparent">
                 <h3 className="text-3xl font-semibold tracking-tight text-white mb-3 shadow-black/50 drop-shadow-md">Development</h3>
                 <p className="text-sm text-white/90 font-light leading-relaxed max-w-[280px] mx-auto">
                   Building robust, scalable architectures and clean code to power your next generation web and mobile apps.
                 </p>
               </div>
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[75%] h-[150px] bg-[#0f172a]/90 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-4 overflow-hidden group-hover:-translate-y-3 transition-transform duration-500">
                  <div className="flex gap-1.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-3/4 h-1.5 bg-pink-500/50 rounded"></div>
                    <div className="w-1/2 h-1.5 bg-blue-400/50 rounded ml-4"></div>
                    <div className="w-5/6 h-1.5 bg-purple-400/50 rounded ml-4"></div>
                    <div className="w-1/3 h-1.5 bg-green-400/50 rounded"></div>
                  </div>
               </div>
            </div>

            {/* CARD 6: STRATEGY */}
            <div className="w-[320px] md:w-[420px] aspect-square bg-[#111111] rounded-xl relative overflow-hidden flex-shrink-0 group border border-white/10 shadow-2xl shadow-black/50">
               <div className="relative z-20 p-8 text-center bg-gradient-to-b from-black/40 to-transparent">
                 <h3 className="text-3xl font-semibold tracking-tight text-white mb-3 shadow-black/50 drop-shadow-md">Strategy</h3>
                 <p className="text-sm text-white/70 font-light leading-relaxed max-w-[280px] mx-auto">
                   Aligning your business goals with actionable, innovative digital roadmaps for long-term sustainable growth.
                 </p>
               </div>
               <div className="absolute inset-0 flex items-end justify-center pb-16 z-10 pointer-events-none">
                  <div className="w-40 h-40 border-[1px] border-white/20 rounded-full flex items-center justify-center relative group-hover:scale-110 transition-transform duration-700">
                     <div className="w-24 h-24 border-[1px] border-white/30 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.6)]"></div>
                     </div>
                     <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-white rounded-full animate-[spin_4s_linear_infinite] origin-[0_80px]"></div>
                  </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}