import React, { useState, useEffect, useRef } from "react";

const servicesData = [
  {
    id: 0,
    title: (
      <>
        UI/UX <span className="font-serif italic text-gray-300">Design</span>
      </>
    ),
    description:
      "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    images: [
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 1,
    title: (
      <>
        Web <span className="font-serif italic text-gray-300">Development</span>
      </>
    ),
    description:
      "Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 2,
    title: (
      <>
        Logo & <span className="font-serif italic text-gray-300">Branding</span>
      </>
    ),
    description:
      "Logo Design, Full Branding, Business Branding, 3d logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 3,
    title: (
      <>
        Webflow & <span className="font-serif italic text-gray-300">Framer</span>
      </>
    ),
    description:
      "Custom Webflow Websites, Webflow Plugin, Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.",
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    ],
  },
];

export default function ServicesScroll ()  {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Set up the IntersectionObserver to detect which image section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        // Triggers when the section reaches roughly the middle of the screen
        rootMargin: "-40% 0px -40% 0px", 
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left Column: Sticky Content */}
        <div className="lg:w-5/12 relative">
          <div className="sticky top-32">
            {/* Tag */}
            <div className="inline-block border border-green-500/50 rounded-full px-5 py-1.5 mb-8">
              <span className="text-green-400 text-sm tracking-wide font-medium">
                What We Do
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-[1.2]">
              We Design <span className="font-serif italic font-normal">Brands</span> That <span className="font-serif italic font-normal">Speak</span> To Audiences
            </h2>

            {/* Dynamic Content Container */}
            <div className="relative h-[250px] overflow-visible">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0 z-10 pointer-events-auto"
                        : "opacity-0 translate-y-12 z-0 pointer-events-none"
                    }
                  `}
                >
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  <div className="w-12 h-[1px] bg-purple-600 mb-6"></div>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 text-purple-500 font-medium hover:text-purple-400 transition-colors"
                  >
                    See More
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Scrolling Images */}
        <div className="lg:w-7/12 flex flex-col gap-[20vh] pb-[20vh]">
          {servicesData.map((service, index) => (
            <div
              key={`img-section-${service.id}`}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Image 1 */}
              <div className="w-full h-[500px] rounded-[2rem] overflow-hidden border border-gray-800/50 shadow-2xl relative bg-black p-1">
                <img
                  src={service.images[0]}
                  alt="Service preview"
                  className="w-full h-full object-cover rounded-[1.8rem] opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Image 2 (Staggered) */}
              <div className="w-full h-[500px] rounded-[2rem] overflow-hidden border border-gray-800/50 shadow-2xl relative bg-black p-1 md:mt-24">
                <img
                  src={service.images[1]}
                  alt="Service preview"
                  className="w-full h-full object-cover rounded-[1.8rem] opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

