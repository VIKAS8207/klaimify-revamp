import React from 'react';

export default function CenteredImage() {
  // =====================================================================
  // 🎛️ CONTROL SIZING HERE
  // =====================================================================
  const imageWidth = "300px"; 
  const imageHeight = "auto"; 
  // =====================================================================

  // Grouped 3 on the left, 3 on the right.
  const industries = [
    // --- LEFT SIDE (Top on Mobile) ---
    { 
      name: "Manufacturing", subtitle: "Optimized production", 
      iconTint: "text-indigo-600 bg-indigo-50 border-indigo-100", 
      delay: "0s",
      x: -380, y: -130,
      path: "M 0 0 C -190 0, -190 -130, -380 -130", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    },
    { 
      name: "Retail", subtitle: "E-commerce & sales", 
      iconTint: "text-pink-600 bg-pink-50 border-pink-100", 
      delay: "1.5s",
      x: -420, y: 0,
      path: "M 0 0 C -210 0, -210 0, -420 0", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    },
    { 
      name: "Education", subtitle: "E-learning platforms", 
      iconTint: "text-emerald-600 bg-emerald-50 border-emerald-100", 
      delay: "0.8s",
      x: -380, y: 130,
      path: "M 0 0 C -190 0, -190 130, -380 130",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    },
    // --- RIGHT SIDE (Bottom on Mobile) ---
    { 
      name: "Insurance", subtitle: "Risk management", 
      iconTint: "text-amber-600 bg-amber-50 border-amber-100", 
      delay: "2.2s",
      x: 380, y: -130,
      path: "M 0 0 C 190 0, 190 -130, 380 -130",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    { 
      name: "Financial", subtitle: "Secure Pay", 
      iconTint: "text-blue-600 bg-blue-50 border-blue-100", 
      delay: "1.2s",
      x: 420, y: 0,
      path: "M 0 0 C 210 0, 210 0, 420 0", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    { 
      name: "Logistics", subtitle: "Global Tracking", 
      iconTint: "text-cyan-600 bg-cyan-50 border-cyan-100", 
      delay: "0.5s",
      x: 380, y: 130,
      path: "M 0 0 C 190 0, 190 130, 380 130", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    },
  ];

  // A reusable function to render a single widget to keep code clean
  const renderWidget = (ind, isMobile = false) => (
    <div
      className={`animate-widget-glow flex items-center gap-3 bg-white/80 backdrop-blur-xl border-2 border-white p-2.5 rounded-full w-max hover:scale-[1.02] transition-transform duration-300 ${isMobile ? 'pr-5 shadow-sm' : 'pr-6'}`}
      style={{ animationDelay: ind.delay }}
    >
      <div className={`flex items-center justify-center rounded-full border shadow-sm ${ind.iconTint} ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}`}>
        <svg className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          {ind.icon}
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className={`font-semibold text-slate-900 leading-tight tracking-tight ${isMobile ? 'text-[13px]' : 'text-[14px]'}`}>
          {ind.name}
        </span>
        <span className={`text-slate-500 font-medium mt-0.5 ${isMobile ? 'text-[10px]' : 'text-[11px]'}`}>
          {ind.subtitle}
        </span>
      </div>
    </div>
  );

  return (
    // Note: min-h-screen has been removed. py-16 md:py-32 dictates top/bottom space naturally.
    <div className="relative flex flex-col items-center justify-start h-auto py-16 md:py-32 bg-[#ffffff] overflow-hidden font-sans">
      
      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-40">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200 to-white rounded-full blur-[100px]" />
      </div>

      <style>{`
        @keyframes floatingWidget {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes drawGlowLine {
          0% { stroke-dashoffset: 1; opacity: 0; }
          10% { opacity: 1; }
          40% { stroke-dashoffset: 0; opacity: 1; }
          50% { opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes widgetBorderGlow {
          0%, 35% { border-color: rgba(255,255,255,1); box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08); }
          40% { border-color: #EAB308; box-shadow: 0 0 20px rgba(234, 179, 8, 0.4), 0 10px 40px -10px rgba(0,0,0,0.08); }
          60%, 100% { border-color: rgba(255,255,255,1); box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08); }
        }
        .animate-glow-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawGlowLine 4s ease-out infinite;
        }
        .animate-widget-glow {
          animation: floatingWidget 5s ease-in-out infinite, widgetBorderGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Background Heading (Adjusted for flexible height) */}
      <div className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none z-0">
        <h1 className="text-[22vw] md:text-[220px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-100 to-white blur-[1px] tracking-tighter select-none leading-none opacity-100">
          Industries
        </h1> 
      </div>

      {/* ============================================================== */}
      {/* 📱 MOBILE VIEW (Stacked Layout, hidden on tablet/desktop)      */}
      {/* ============================================================== */}
      <div className="flex md:hidden flex-col items-center justify-center gap-5 relative z-10 w-full mt-10">
        
        {/* Top 3 Options */}
        {industries.slice(0, 3).map((ind, idx) => (
          <div key={`mob-top-${idx}`}>
            {renderWidget(ind, true)}
          </div>
        ))}

        {/* Center Logo */}
        <div className="my-4 relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 bg-[#1e1e1e] border-[3px] border-gray-100 text-white px-6 py-3 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
            <img 
              src="/image/klamifymainlogowhite.png" 
              alt="Your Company Logo" 
              className="w-[100px] h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-4 w-[110px] h-[12px] bg-black/10 rounded-[100%] blur-[6px] z-0" />
        </div>

        {/* Bottom 3 Options */}
        {industries.slice(3, 6).map((ind, idx) => (
          <div key={`mob-bot-${idx}`}>
             {renderWidget(ind, true)}
          </div>
        ))}
      </div>


      {/* ============================================================== */}
      {/* 💻 DESKTOP VIEW (Original SVG canvas layout, hidden on mobile) */}
      {/* ============================================================== */}
      <div className="hidden md:flex relative justify-center items-center mt-25 z-10 w-full h-[250px]">
        
        {/* SVG Canvas for S-Curves */}
        <svg 
          className="absolute top-1/2 left-1/2 pointer-events-none z-0"
          style={{ width: '1px', height: '1px', overflow: 'visible' }}
        >
          {industries.map((ind, i) => (
            <g key={`path-${i}`}>
              <path 
                d={ind.path} stroke="#d1d5db" strokeWidth="1.5" fill="none" 
                strokeLinejoin="round" strokeLinecap="round" 
              />
              <path 
                d={ind.path} stroke="#EAB308" strokeWidth="2.5" fill="none" 
                strokeLinejoin="round" strokeLinecap="round" pathLength="1"
                className="animate-glow-path" style={{ animationDelay: ind.delay }}
              />
            </g>
          ))}
        </svg>

        {/* Center Logo */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 bg-[#1e1e1e] border-4 border-gray-100 text-white px-8 py-3.5 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img 
              src="/image/klamifymainlogowhite.png" 
              alt="Your Company Logo" 
              className="w-[130px] h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-5 w-[140px] h-[15px] bg-black/10 rounded-[100%] blur-[8px] z-0" />
        </div>

        {/* Floating Widgets */}
        {industries.map((ind, idx) => (
          <div
            key={`desk-${idx}`}
            className="absolute z-20"
            style={{
              left: '50%', top: '50%',
              transform: `translate(calc(-50% + ${ind.x}px), calc(-50% + ${ind.y}px))`
            }}
          >
            {renderWidget(ind, false)}
          </div>
        ))}
      </div>

    </div>
  );
}