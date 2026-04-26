import React from 'react';

export default function IndustriesServe() {
  const industries = [
    "Manufacturing", "Financial Services", "Transportation", 
    "Retail", "Education", "Healthcare", 
    "Insurance", "Public Sector"
  ];

  return (
    <section className="bg-[#050505] text-white py-24 px-6 md:px-[10vw] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Content & Grid */}
        <div className="z-10">
          <div className="mb-12">
            <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase mb-4 block">
              // Sector Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
              Industries <br /> <span className="text-gray-500">We Serve.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((item, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/[0.07] hover:border-yellow-500/50"
              >
                {/* Subtle background number */}
                <span className="absolute right-4 top-4 text-white/5 font-mono text-xl group-hover:text-yellow-500/20 transition-colors">
                  0{index + 1}
                </span>
                
                <h4 className="text-lg font-medium tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                  {item}
                </h4>
                
                {/* Bottom line decoration */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Creative Visual & Rotating Sticker */}
        <div className="relative flex justify-center items-center">
          
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Engineering & Technology" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </div>

          {/* ROTATING STICKER */}
          <div className="absolute -top-10 -right-4 md:-right-10 w-32 h-32 md:w-44 md:h-44 z-20">
            <div className="relative w-full h-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
              {/* Circular Text Sticker */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] font-mono fill-yellow-500 uppercase tracking-[2px]">
                  <textPath xlinkHref="#circlePath">
                    • Software Engineering • Digital Transformation • Future Ready • 
                  </textPath>
                </text>
              </svg>
              
              {/* Center Icon of Sticker */}
              <div className="absolute bg-[#050505] border border-yellow-500/50 rounded-full w-12 h-12 flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Abstract background glow */}
          <div className="absolute -z-10 w-[120%] h-[120%] bg-yellow-500/5 blur-[120px] rounded-full"></div>
        </div>

      </div>
    </section>
  );
}