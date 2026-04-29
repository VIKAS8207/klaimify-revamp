import React from 'react';

export default function CenteredImage() {
  // =====================================================================
  // 🎛️ CONTROL IMAGE SIZE HERE
  // =====================================================================
  const imageWidth = "250px"; 
  const imageHeight = "auto"; 
  // =====================================================================

  // Redesigned for floating UI Widgets
  const industries = [
    { 
      name: "Manufacturing", subtitle: "Optimized production", 
      iconTint: "text-indigo-600 bg-indigo-50 border-indigo-100", 
      pos: "top-[5%] -left-[120%]", delay: "0s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    },
    { 
      name: "Retail", subtitle: "E-commerce & sales", 
      iconTint: "text-pink-600 bg-pink-50 border-pink-100", 
      pos: "top-[15%] -right-[130%]", delay: "1.5s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    },
    { 
      name: "Education", subtitle: "E-learning platforms", 
      iconTint: "text-emerald-600 bg-emerald-50 border-emerald-100", 
      pos: "top-[40%] -left-[140%]", delay: "0.8s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    },
    { 
      name: "Insurance", subtitle: "Risk management", 
      iconTint: "text-amber-600 bg-amber-50 border-amber-100", 
      pos: "top-[45%] -right-[120%]", delay: "2.2s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    { 
      name: "Financial", subtitle: "Secure Pay", 
      iconTint: "text-blue-600 bg-blue-50 border-blue-100", 
      pos: "top-[75%] -left-[110%]", delay: "1.2s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    { 
      name: "Logistics", subtitle: "Global Tracking", 
      iconTint: "text-cyan-600 bg-cyan-50 border-cyan-100", 
      pos: "top-[80%] -right-[115%]", delay: "0.5s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start h-auto min-h-screen py-40 bg-[#f8f9fa] overflow-visible font-sans pt-[15%]">
      
      {/* Soft Ambient Background Glow (Replaces the massive table shadow) */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-40">
         <div 
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200 to-white rounded-full blur-[100px]"
         />
      </div>

      <style>{`
        @keyframes floatingWidget {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-widget {
          animation: floatingWidget 5s ease-in-out infinite;
        }
      `}</style>

      <div 
        className="relative flex justify-center items-center z-10"
        style={{ width: imageWidth, height: imageHeight }}
      >
        
        {/* Background Heading (Kept exactly as requested) */}
        <div className="absolute top-0 -translate-y-[85%] w-full flex justify-center pointer-events-none z-0">
          <h1 className="top-[200px] text-[18vw] md:text-[250px] font-thin text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-gray-200 blur-[2px] tracking-tighter select-none leading-none">
            Industries
          </h1>
        </div>

        {/* 📱 Phone Centerpiece & Shadow */}
        <div className="relative z-10 flex flex-col items-center w-full h-full">
          <img 
            src="/image/7.png" 
            alt="Phone display" 
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]"
          />
          {/* Phone Floor Shadow (Tight ellipse fitting a standing phone) */}
          <div className="absolute -bottom-3 w-[160px] h-[15px] bg-black/25 rounded-[100%] blur-[8px] z-0" />
        </div>

        {/* Sleek Glassmorphism Floating Widgets */}
        {industries.map((ind, idx) => (
          <div
            key={idx}
            className={`animate-widget absolute ${ind.pos} z-20 flex items-center gap-3.5 bg-white/70 backdrop-blur-xl border border-white p-2.5 pr-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-max`}
            style={{ animationDelay: ind.delay }}
          >
            {/* Widget Icon Circle */}
            <div className={`w-10 h-10 flex items-center justify-center rounded-full border shadow-sm ${ind.iconTint}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {ind.icon}
              </svg>
            </div>

            {/* Widget Text */}
            <div className="flex flex-col text-left">
              <span className="font-semibold text-slate-900 text-[14px] leading-tight tracking-tight">
                {ind.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-0.5">
                {ind.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}