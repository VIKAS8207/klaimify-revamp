import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Server, Zap, Globe2, Code2, ArrowRight } from "lucide-react";

const BentoGrid = () => {
  const container = useRef();

  // GSAP Animation setup
  useGSAP(() => {
    gsap.from(".bento-item", {
      y: 50,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.1,
    });
  }, { scope: container });

  return (
    <section className="bg-[#e9ecef] min-h-screen p-6 md:p-12 font-sans flex items-center justify-center">
      <div 
        ref={container} 
        className="max-w-6xl w-full bg-[#f8f9fa] rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle background abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-gray-200/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-gray-200/50 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 relative z-10">
          <div className="max-w-sm">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight tracking-tight">
              How we<br />collaborate
            </h2>
          </div>
          <div className="max-w-md mt-4 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Collaboration capabilities:</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              We leverage modern methodologies and strategic guidance to ensure your business remains competitive and adaptable to the ever-changing digital landscape.
            </p>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 relative z-10">
          
          {/* BOX 1: Tailored Solutions (Tall Box Left) */}
          <div className="bento-item col-span-1 md:col-span-4 bg-[#1a1f24] rounded-[24px] p-8 flex flex-col justify-between overflow-hidden relative group h-[400px]">
            {/* Top Icon */}
            <div className="absolute top-6 right-6 text-[#a3e635]">
              <ArrowRight size={20} className="-rotate-45" />
            </div>
            
            <div className="z-10">
              <h4 className="text-[#a3e635] text-sm font-medium mb-4 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-[#a3e635] flex items-center justify-center text-[10px]">✓</span>
                Tailored Solutions
              </h4>
              <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-[200px]">
                We deeply understand your specific challenges to craft custom software that perfectly fits your needs.
              </p>
            </div>

            {/* Decorative GPU graphic representation */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-50 transition-transform duration-700 group-hover:scale-105">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1f24] via-transparent to-transparent z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center border border-gray-700 transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                  <Server className="text-gray-500" size={48} />
                </div>
                {/* Circuit lines */}
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gray-700"></div>
                <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gray-700"></div>
                <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gray-700"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN WRAPPER */}
          <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* BOX 2: Expert Guidance (Top Wide Box) */}
            <div className="bento-item col-span-1 md:col-span-2 bg-[#161b22] rounded-[24px] p-6 flex flex-col md:flex-row justify-between items-center overflow-hidden relative group">
              <div className="absolute top-6 right-6 text-[#a3e635]">
                <ArrowRight size={20} className="-rotate-45" />
              </div>

              <div className="w-full md:w-1/2 z-10 mb-6 md:mb-0">
                <h4 className="text-gray-300 text-sm font-medium mb-4">
                  Expert Guidance:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-[#a3e635] flex items-center justify-center text-[10px] text-[#a3e635]">✓</span>
                    <span className="text-gray-400 text-xs font-medium">Strategic Planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-[#a3e635] flex items-center justify-center text-[10px] text-[#a3e635]">✓</span>
                    <span className="text-gray-400 text-xs font-medium">Concept to Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-[#a3e635] flex items-center justify-center text-[10px] text-[#a3e635]">✓</span>
                    <span className="text-gray-400 text-xs font-medium">Informed Decisions</span>
                  </div>
                </div>
              </div>

              {/* Code Editor Graphic */}
              <div className="w-full md:w-1/2 bg-[#0d1117] rounded-xl border border-gray-800 p-4 font-mono text-[10px] text-gray-400 shadow-inner group-hover:border-gray-700 transition-colors">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[#a3e635] mb-1"># Strategic IT consultation</div>
                <div className="text-purple-400">class <span className="text-blue-400">CollaborationModel</span>:</div>
                <div className="pl-4">def <span className="text-blue-400">__init__</span>(self):</div>
                <div className="pl-8 text-gray-500">super().__init__()</div>
                <br/>
                <div className="pl-4 text-[#a3e635]"># Initialize project goals</div>
                <div className="pl-4">self.strategy = <span className="text-yellow-300">"Optimal Results"</span></div>
                <div className="pl-4">self.support = <span className="text-orange-400">True</span></div>
              </div>
            </div>

            {/* BOX 3: Cutting-Edge Tech (Bottom Left Box) */}
            <div className="bento-item bg-gradient-to-br from-white to-green-50 rounded-[24px] p-6 flex flex-col justify-between overflow-hidden relative group shadow-sm border border-green-100/50">
              <div className="absolute top-6 right-6 text-black">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
              
              <div className="z-10 mb-8">
                <h4 className="text-gray-800 text-sm font-medium mb-2">
                  Cutting-Edge Technology
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[150px]">
                  Innovative and scalable software solutions.
                </p>
              </div>

              {/* 3D sphere graphical representation */}
              <div className="absolute -bottom-8 -right-4 w-40 h-40">
                <div className="w-full h-full relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-300 to-green-600 shadow-[0_10px_20px_rgba(34,197,94,0.4)] absolute top-4 z-20 group-hover:-translate-y-2 transition-transform duration-500"></div>
                  {/* Abstract swoosh */}
                  <svg viewBox="0 0 100 50" className="w-full h-full absolute bottom-0 text-green-200 drop-shadow-xl">
                    <path d="M0,50 Q25,10 50,40 T100,20 L100,50 Z" fill="currentColor" />
                    <path d="M0,50 Q30,20 60,45 T100,30 L100,50 Z" fill="#bbf7d0" opacity="0.6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* BOX 4: Long-Term Partnership (Bottom Right Box) */}
            <div className="bento-item bg-[#bbf7d0] rounded-[24px] p-6 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-6 right-6 text-black">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
              
              <div className="z-10">
                <h4 className="text-gray-900 text-sm font-medium mb-2">
                  Long-Term Partnership
                </h4>
                <p className="text-green-800/80 text-xs leading-relaxed max-w-[150px]">
                  Ongoing support and technology evolution over time.
                </p>
              </div>

              {/* Wireframe Globe Graphic */}
              <div className="absolute -bottom-16 -right-16 w-56 h-56 text-green-700 opacity-60 group-hover:rotate-12 transition-transform duration-700">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                  <circle cx="50" cy="50" r="48" fill="#4ade80" />
                  {/* Grid lines to simulate the dotted globe in reference */}
                  <g stroke="#166534" strokeWidth="0.5" fill="none">
                    <ellipse cx="50" cy="50" rx="48" ry="15" />
                    <ellipse cx="50" cy="50" rx="48" ry="30" />
                    <ellipse cx="50" cy="50" rx="15" ry="48" />
                    <ellipse cx="50" cy="50" rx="30" ry="48" />
                    <path d="M2,50 L98,50" />
                    <path d="M50,2 L50,98" />
                  </g>
                  {/* Highlight area */}
                  <circle cx="30" cy="30" r="20" fill="white" opacity="0.1" filter="blur(5px)" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Button matching the reference */}
        <div className="mt-6">
          <button className="bg-[#1a1f24] hover:bg-black text-white text-xs font-medium px-5 py-3.5 rounded-lg flex items-center justify-between w-[200px] transition-colors group">
            Start Collaboration
            <ArrowRight size={14} className="text-[#a3e635] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;