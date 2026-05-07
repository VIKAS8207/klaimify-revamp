import React from 'react';

// Features data with straight default alignment and alternating hover rotations
const features = [
  {
    id: "01",
    title: "Tailored Solutions",
    description: "We don't offer generic solutions; instead, we take the time to deeply understand your specific challenges and goals to craft custom software that perfectly fits your needs.",
    cardBg: "bg-[#fef9c3]", 
    textColor: "text-[#d97706]", 
    pinGrad: "from-[#fb923c] to-[#ea580c]",
    pinGlow: "bg-[#f97316]",
    hoverRotate: "hover:-rotate-2",
  },
  {
    id: "02",
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and development methodologies to build innovative and scalable software solutions, ensuring your business remains competitive.",
    cardBg: "bg-[#f3f4f6]", 
    textColor: "text-[#4b5563]", 
    pinGrad: "from-[#a3a3a3] to-[#404040]",
    pinGlow: "bg-[#737373]",
    hoverRotate: "hover:rotate-2",
  },
  {
    id: "03",
    title: "Expert Guidance",
    description: "Our team of experienced IT consultants and software developers bring a wealth of knowledge and expertise to every project, ensuring you make informed decisions.",
    cardBg: "bg-[#fef9c3]", 
    textColor: "text-[#d97706]", 
    pinGrad: "from-[#fb923c] to-[#ea580c]",
    pinGlow: "bg-[#f97316]",
    hoverRotate: "hover:-rotate-2",
  },
  {
    id: "04",
    title: "Long-Term Partnership",
    description: "We're not just a vendor; we're your long-term technology partner, providing ongoing support and maintenance to ensure your software continues to perform optimally.",
    cardBg: "bg-[#f3f4f6]", 
    textColor: "text-[#4b5563]", 
    pinGrad: "from-[#a3a3a3] to-[#404040]",
    pinGlow: "bg-[#737373]",
    hoverRotate: "hover:rotate-2",
  }
];

export default function StickyNotesFeatures() {
  return (
    <div className="relative bg-white text-black font-sans py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-gray-500 font-medium">
            The foundation of a successful digital transformation.
          </p>
        </div>

        {/* Grid Container for the Static Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
          {features.map((feature, index) => (
            <div 
              key={index} 
              // Cards are statically straight, but scale and rotate on hover
              className={`group relative flex flex-col w-full transition-transform duration-300 ease-out hover:scale-105 ${feature.hoverRotate}`}
            >
              
              {/* Note Paper Shadow/Border Outline */}
              <div className="w-full h-full bg-white rounded-[28px] p-3 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                
                {/* 3D Pin with Dynamic Glow */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 z-20">
                  <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${feature.pinGlow} blur-md opacity-40 mix-blend-multiply`}></div>
                  
                  <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${feature.pinGrad} shadow-md border border-white/20`}>
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
  );
}