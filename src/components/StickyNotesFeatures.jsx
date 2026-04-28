import React, { useRef, useState, useEffect } from 'react';

// Enhanced features data with sequential reveal info, added descriptions for back faces, and new colors
const features = [
  {
    id: "01",
    title: "Tailored Solutions",
    description: "We don't offer generic solutions; instead, we take the time to deeply understand your specific challenges and goals to craft custom software that perfectly fits your needs, ensuring maximum efficiency and a strong return on your investment.",
    cardBg: "bg-[#fef9c3]", // Mild Yellow
    textColor: "text-[#d97706]", // Deep Amber/Orange
    pinGrad: "from-[#fb923c] to-[#ea580c]",
    pinGlow: "bg-[#f97316]",
    rotation: "-rotate-1",
  },
  {
    id: "02",
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and development methodologies to build innovative and scalable software solutions. This commitment ensures your business remains competitive and can adapt to the ever-changing digital landscape.",
    cardBg: "bg-[#f3f4f6]", // Mild Grey
    textColor: "text-[#4b5563]", // Cold Grey
    pinGrad: "from-[#a3a3a3] to-[#404040]",
    pinGlow: "bg-[#737373]",
    rotation: "rotate-2",
  },
  {
    id: "03",
    title: "Expert Guidance",
    description: "Our team of experienced IT consultants and software developers bring a wealth of knowledge and expertise to every project, ensuring you make informed decisions and achieve optimal results throughout the entire development process.",
    cardBg: "bg-[#fef9c3]", // Mild Yellow (Repeat)
    textColor: "text-[#d97706]", // Deep Amber/Orange (Repeat)
    pinGrad: "from-[#fb923c] to-[#ea580c]",
    pinGlow: "bg-[#f97316]",
    rotation: "-rotate-2",
  },
  {
    id: "04",
    title: "Long-Term Partnership",
    description: "We're not just a vendor; we're your long-term technology partner, providing ongoing support and maintenance to ensure your software continues to perform optimally and helps you grow and evolve over time.",
    cardBg: "bg-[#f3f4f6]", // Mild Grey (Repeat)
    textColor: "text-[#4b5563]", // Cold Grey (Repeat)
    pinGrad: "from-[#a3a3a3] to-[#404040]",
    pinGlow: "bg-[#737373]",
    rotation: "rotate-1",
  }
];

export default function StickyNotesFeatures() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scrolling within the tall container to animate the sticky grid
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the tall container we are in pixels
      const maxScroll = height - windowHeight;
      const currentScroll = -top;
      
      // Convert that pixel value to a 0-1 progress value
      const progress = Math.max(0, Math.min(1, currentScroll / maxScroll));
      setScrollProgress(progress);
    };

    // Attach listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check on mount
    
    // Cleanup listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Simple function to calculate the individual note's reveal style based on overall scroll progress
  const calculateNoteStyle = (index, overallProgress) => {
    const numNotes = features.length;
    
    // Split overall progress into 4 separate segments for sequential reveal
    const startProgress = (index / numNotes);
    const endProgress = (index + 1) / numNotes;
    
    // Calculate progress for this note from hidden to shown (0 to 1)
    let noteProgress = (overallProgress - startProgress) / (endProgress - startProgress);
    noteProgress = Math.max(0, Math.min(1, noteProgress)); // Clamp value between 0 and 1
    
    return {
      opacity: noteProgress, // Fades in
      // Scales from 80% to 100% and translates slightly upwards into place
      transform: `scale(${0.8 + (noteProgress * 0.2)}) translateY(${40 * (1 - noteProgress)}px)`, 
      transition: 'opacity 0.1s ease-out, transform 0.1s ease-out', // Keeps the directly-applied styles smooth
    };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Tall Container: The component is made tall (h-[400vh]) to provide enough scroll duration to reveal all 4 notes */}
      <div 
        ref={containerRef} 
        className="relative bg-white text-black font-sans selection:bg-gray-800 selection:text-white h-[400vh]"
      >
        
        {/* Sticky Grid Container: Centered in the viewport, remains stuck until all notes are revealed */}
        <div ref={stickyRef} className="sticky top-0 h-screen flex flex-col justify-center py-20 px-4 md:px-8 overflow-hidden relative">
          
          {/* Header Section */}
          <div className="text-center mb-16 max-w-2xl mx-auto z-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-gray-500 font-medium">
              The foundation of a successful digital transformation.
            </p>
          </div>

          {/* Grid Container for the Notes in a Line */}
          <div className="relative max-w-[1400px] w-full mx-auto z-10">
            
            {/* Dashed Connecting Line (Visible only on Desktop behind the notes) */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] border-t-2 border-dashed border-gray-200 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col w-full ${feature.rotation}`}
                  // Dynamically applies the opacity/scale style based on scroll progress
                  style={calculateNoteStyle(index, scrollProgress)}
                >
                  
                  {/* Note Paper Shadow/Border Outline */}
                  <div className="w-full h-full bg-white rounded-[28px] p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
                    
                    {/* 3D Pin with Dynamic Glow */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 z-20">
                      {/* Pin Glow/Shadow on paper */}
                      <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${feature.pinGlow} blur-md opacity-40 mix-blend-multiply`}></div>
                      
                      {/* Actual Pin Head */}
                      <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${feature.pinGrad} shadow-md border border-white/20`}>
                        {/* Glossy Highlight */}
                        <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-white/70 rounded-full blur-[0.5px]"></div>
                      </div>
                    </div>

                    {/* Inner Colored Area */}
                    <div className={`w-full h-full min-h-[300px] rounded-[20px] ${feature.cardBg} p-6 pt-8 flex flex-col shadow-inner`}>
                      
                      {/* Number */}
                      <span className={`font-serif italic text-3xl font-semibold ${feature.textColor} mb-3 block`}>
                        {feature.id}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-[19px] font-bold text-gray-800 mb-3 leading-snug">
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[14px] text-gray-600 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}