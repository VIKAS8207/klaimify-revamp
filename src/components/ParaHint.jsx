import React from 'react';

export default function ParaHint() {
  return (
    <div className="relative min-h-screen bg-[#f4f3ef] text-[#2c302e] overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-[#2c302e] selection:text-[#f4f3ef]">
      
      {/* Custom Font Import - Playfair Display for the editorial serif look */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-med {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(0.95); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-med { animation: float-med 6s ease-in-out infinite; }
      `}</style>

      {/* ==========================================
          BACKGROUND LAYER (Grid Lines & Glowing Blobs)
          ========================================== */}
      
      {/* Vertical Grid Lines */}
      <div className="absolute inset-0 z-0 flex justify-between px-10 md:px-32 pointer-events-none opacity-40">
        <div className="w-px h-full bg-black/10"></div>
        <div className="w-px h-full bg-black/10"></div>
        <div className="w-px h-full bg-black/10"></div>
        <div className="w-px h-full bg-black/10 hidden md:block"></div>
        <div className="w-px h-full bg-black/10 hidden lg:block"></div>
      </div>

      {/* Abstract Glowing Blobs */}
      <div className="absolute top-[15%] left-[5%] md:left-[15%] w-[300px] h-[300px] bg-gradient-to-tr from-orange-400 to-pink-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-float-slow"></div>
      <div className="absolute bottom-[10%] right-[5%] md:right-[15%] w-[400px] h-[400px] bg-gradient-to-bl from-indigo-300 to-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-float-med" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[40%] right-[30%] w-[250px] h-[250px] bg-gradient-to-t from-emerald-200 to-teal-200 rounded-full mix-blend-multiply filter blur-[70px] opacity-60 animate-float-slow" style={{ animationDelay: '2s' }}></div>

      {/* ==========================================
          TOP NAVIGATION LABELS
          ========================================== */}
      <div className="absolute top-0 w-full flex justify-between items-center p-6 md:p-10 z-20 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-black/40">
         <div>Reason & Instinct</div>
         <div className="hidden md:block">Digital Engineering</div>
         <div>Based Worldwide</div>
      </div>

      {/* ==========================================
          MAIN CONTENT (Typography & Inline Elements)
          ========================================== */}
      <div className="relative z-10 max-w-[1100px] px-6 mx-auto text-center mt-12">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.3] md:leading-[1.15] text-[#2a2c28] tracking-tight">
          Engineered by Reason, 
          
          {/* Inline Image 1 (Abstract/Logic) */}
          <span className="inline-flex items-center justify-center mx-2 md:mx-4 align-middle group">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop" 
              alt="Logic abstraction" 
              className="w-16 h-10 sm:w-20 sm:h-12 md:w-28 md:h-14 object-cover rounded-full shadow-lg border border-white/50 group-hover:scale-105 transition-transform duration-500"
            />
          </span>
          
          Designed by Instinct. We craft software 
          
          {/* Inline Image 2 (Tech/Code mockup) */}
          <span className="inline-flex items-center justify-center mx-2 md:mx-4 align-middle group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop" 
              alt="Software development" 
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-[1rem] shadow-xl border-2 border-white/80 transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500"
            />
          </span>
          
          and websites that feel effortless, purposeful, 
          
          {/* Inline Pill/Badge for emphasis */}
          <span className="inline-flex items-center justify-center mx-2 md:mx-4 align-middle">
            <span className="bg-gradient-to-r from-[#dcfce7] to-[#bbf7d0] text-emerald-900 font-sans text-sm sm:text-base md:text-xl font-medium px-5 py-2 md:py-3 rounded-full transform rotate-3 shadow-[0_4px_20px_rgba(167,243,208,0.5)] border border-emerald-100">
              & alive.
            </span>
          </span>
        </h1>
      </div>

      {/* ==========================================
          BOTTOM SCROLL INDICATOR
          ========================================== */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <div className="w-px h-12 bg-gradient-to-b from-black/40 to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-black/40">Scroll to explore</span>
      </div>

    </div>
  );
}