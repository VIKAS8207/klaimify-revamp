import React from 'react';

export default function EcosystemShowcase() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden ">
      
      {/* Giant Background Text (Way Behind - Z-0) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap">
          Ecosystem
        </h2>
      </div>

      {/* Section Heading (Top Center) */}
      <div className="relative z-30 text-center mb-16 px-4">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-yellow-100 border border-yellow-200 text-xs font-bold text-yellow-700 uppercase tracking-widest">
          Core Features
        </div>
        <h2 className="font-onest text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
          A unified view of your operations.
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Manage your entire enterprise from one incredibly fast, intuitive dashboard built specifically for your workflow.
        </p>
      </div>

      {/* IMAGE & FLOATING CARDS WRAPPER */}
      <div className="relative w-[80%] md:w-[50%] max-w-5xl z-20 flex justify-center mt-8">
        
        {/* Main Laptop Image (Middle Layer - Z-20) */}
        <img 
          src="/image/straightlap.png" 
          alt="Dashboard Showcase" 
          className="w-full h-auto object-contain relative z-20 drop-shadow-2xl" 
        />

     {/* STICKY NOTE: Behind & Top Left (Z-10) */}
<div className="absolute -left-[15%] top-[10%] z-10 w-56 md:w-64 bg-gradient-to-br from-yellow-100 to-yellow-200 pt-8 pb-5 pl-5 pr-12 rounded-sm shadow-[4px_6px_15px_rgba(0,0,0,0.15)] transform -rotate-3 transition-transform hover:rotate-0 duration-500 text-left">
  
  {/* Realistic Tape (Semi-transparent, slightly blurry, subtle shadow) */}
  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-md border border-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transform rotate-2"></div>
  
  {/* Sticky Note Content */}
  <h3 className="font-onest text-base font-bold text-yellow-900 mb-1 border-b border-yellow-300/60 pb-1">
    Business Analysts
  </h3>
  
  <p className="text-xs text-yellow-800 leading-relaxed font-medium">
    Our BAs map your exact needs, bridging the gap between business goals and technical execution for a flawless workflow.
  </p>
  
</div>

        {/* CARD 2: Forward & Bottom Right (Z-30) - GLASSY WHITE DESIGNERS CARD */}
<div className="absolute -right-[10%] bottom-[15%] z-30 w-64 md:w-72 bg-white/20 backdrop-blur-xl border border-yellow-400/60 p-6 rounded-3xl  transform translate-y-4 hover:-translate-y-0 hover:shadow-[0_8px_45px_rgba(234,179,8,0.4)] transition-all duration-500">
  
  {/* Header with Blinking Dot */}
  <div className="flex items-center justify-between mb-5 border-b border-gray-300/80 pb-3">
    <span className="font-onest font-extrabold text-xl text-gray-900 tracking-wide drop-shadow-sm">Designers</span>
    <span className="flex h-3 w-3 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
    </span>
  </div>

  {/* Playful Icons Area */}
  <div className="flex items-center justify-center gap-3 mb-5">
    
    {/* Figma Icon */}
    <div className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center transform -rotate-12 hover:rotate-12 hover:scale-110 transition-all duration-300 shadow-lg border border-yellow-200/50">
       <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
       </svg>
    </div>

    {/* Bouncing Plus Sign */}
    <span className="text-yellow-500 font-black text-2xl animate-bounce drop-shadow-sm">×</span>

    {/* Replit Icon */}
    <div className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center transform rotate-12 hover:-rotate-12 hover:scale-110 transition-all duration-300 shadow-lg border border-yellow-200/50">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2.5h8.5v8.5H3v-8.5zm9.5 0H21v8.5h-8.5v-8.5zm0 9.5H21V21h-8.5v-8.5z" fill="#F26207"/>
      </svg>
    </div>

  </div>

  {/* Funny Content */}
  <p className="text-center text-sm font-semibold text-gray-800 leading-relaxed">
    Pushing pixels, debating hex codes, and making things pop before you even know what you want. Fueled entirely by infinite layers and iced coffee. 
  </p>
  
</div>

        {/* CARD 3: Forward & Bottom Left (Z-30) - DEVELOPER TERMINAL CARD */}
        <div className="absolute -left-[5%] -bottom-[5%] z-30 w-64 md:w-72 bg-[#1E1E1E] text-white p-5 rounded-2xl  border border-gray-700 flex flex-col gap-3 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(86,156,214,0.15)] transition-all duration-500">
          
          <style>
            {`
              @keyframes typeAndDelete {
                0%, 10% { width: 0; }
                40%, 60% { width: 5.5ch; }
                90%, 100% { width: 0; }
              }
              @keyframes cursorBlink {
                0%, 100% { border-right-color: transparent; }
                50% { border-right-color: #569CD6; }
              }
            `}
          </style>

          <div className="flex items-center gap-3 border-b border-gray-700 pb-3">
            <div className="font-mono text-[#569CD6] font-bold text-xl inline-flex items-center">
              <span 
                className="overflow-hidden whitespace-nowrap border-r-[2.5px] pr-0.5"
                style={{
                  animation: 'typeAndDelete 3.5s steps(5, end) infinite, cursorBlink 0.8s step-end infinite'
                }}
              >
                &lt;div&gt;
              </span>
            </div>
            <span className="font-onest font-bold text-gray-200 tracking-wide">Developers</span>
          </div>

          <p className="text-xs text-gray-300 font-mono leading-relaxed mt-1">
            <span className="text-[#C586C0]">const</span> <span className="text-[#9CDCFE]">build</span> = <span className="text-[#DCDCAA]">coffee</span> =&gt; flawless_logic;
            <br/><br/>
            "It works perfectly on my machine. Ready for production." 
          </p>
        </div>

      </div>
    </section>
  );
}