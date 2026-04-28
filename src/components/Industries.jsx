import React from 'react';

export default function CenteredImage() {
  // =====================================================================
  // 🎛️ CONTROL IMAGE SIZE HERE
  // Decreased by ~15% to prevent horizontal/vertical overflow
  // =====================================================================
  const imageWidth = "720px"; 
  const imageHeight = "auto"; 
  // =====================================================================

  // Data for the floating industry cards with Icons
  const industries = [
    // Behind the image (z-0)
    { 
      name: "Manufacturing", subtitle: "Optimized production", color: "grey", z: "z-0", pos: "top-[5%] -left-[10%]", delay: "0s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    },
    { 
      name: "Retail", subtitle: "E-commerce & sales", color: "grey", z: "z-0", pos: "top-[50%] -right-[12%]", delay: "2s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    },
    { 
      name: "Education", subtitle: "E-learning platforms", color: "yellow", z: "z-0", pos: "bottom-[5%] -left-[5%]", delay: "0.8s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    },
    { 
      name: "Insurance", subtitle: "Risk management", color: "yellow", z: "z-0", pos: "-top-[5%] right-[10%]", delay: "2.5s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    
    // In front of the image (z-20)
    { 
      name: "Financial Services", subtitle: "Secure transactions", color: "yellow", z: "z-20", pos: "top-[15%] -right-[8%]", delay: "1.2s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    { 
      name: "Transportation", subtitle: "Logistics tracking", color: "yellow", z: "z-20", pos: "top-[35%] -left-[15%]", delay: "0.5s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    },
    { 
      name: "Healthcare", subtitle: "Patient management", color: "grey", z: "z-20", pos: "bottom-[15%] -right-[5%]", delay: "1.5s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    },
    { 
      name: "Public Sector", subtitle: "Govtech solutions", color: "grey", z: "z-20", pos: "-bottom-[5%] left-[25%]", delay: "1.8s",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fafafa] p-4 overflow-hidden relative font-sans">
      
      {/* Custom Keyframes for Smooth Floating Animation */}
      <style>{`
        @keyframes smoothFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: smoothFloat 5s ease-in-out infinite;
        }
      `}</style>

      {/* =========================================
          BACKGROUND EFFECTS (Dreamy Glows & Blurred Text)
          ========================================= */}
      
      {/* Massive Faded/Blurred Background Heading (Larger & Really Thin) */}
      <div className="absolute top-[5%] w-full flex justify-center pointer-events-none z-0">
        <h1 className="top-[200px] text-[18vw] md:text-[250px] font-thin text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-gray-300 blur-[2px] tracking-tighter select-none leading-none">
          Industries
        </h1>
      </div>

      {/* Dreamy Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-100/60 via-transparent to-gray-200/60 rounded-full blur-[100px] opacity-80 z-0 pointer-events-none"></div>


      {/* =========================================
          MAIN IMAGE & FLOATING CARDS WRAPPER
          ========================================= */}
      <div 
        style={{ width: imageWidth, height: imageHeight }} 
        className="relative flex justify-center items-center"
      >
        {/* Main Laptop Image */}
        <img 
          src="/image/indus.png" 
          alt="Laptop showing industries" 
          className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
        />

        {/* Floating Square-Rounded Cards Loop */}
        {industries.map((ind, idx) => {
          const isYellow = ind.color === "yellow";
          
          // Styling variables mapped to Mild Yellow and Mild Grey
          const iconBg = isYellow ? "bg-yellow-50" : "bg-gray-50";
          const iconColor = isYellow ? "text-yellow-600" : "text-gray-500";
          const glowColor = isYellow ? "bg-yellow-300/40" : "bg-gray-300/40";

          return (
            <div
              key={idx}
              className={`animate-float absolute ${ind.pos} ${ind.z} flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white/60 p-3 pr-5 rounded-2xl shadow-xl whitespace-nowrap`}
              style={{ animationDelay: ind.delay }}
            >
              {/* Soft Ambient Glow Behind the Card */}
              <div className={`absolute -inset-1 blur-xl opacity-60 rounded-3xl -z-10 ${glowColor}`}></div>
              
              {/* Icon Box */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-white ${iconBg} ${iconColor}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {ind.icon}
                </svg>
              </div>

              {/* Text Block */}
              <div className="flex flex-col text-left">
                <span className="font-bold text-gray-800 text-[14px] leading-tight">
                  {ind.name}
                </span>
                <span className="text-[11px] text-gray-400 font-medium mt-0.5">
                  {ind.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}