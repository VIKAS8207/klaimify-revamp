import React, { useEffect, useRef } from "react";

// --- CONFIGURATION AREA ---
const logoImageData = [
  { src: "/image/hdfc.png", alt: "HDFC Logo" },
  { src: "/image/yesbank.png", alt: "Yes Bank Logo" },
  { src: "/image/kotak.png", alt: "Kotak Logo" },
  { src: "/image/CGT.png", alt: "CGT Logo" },{ src: "/image/hdfc.png", alt: "HDFC Logo" },
  { src: "/image/yesbank.png", alt: "Yes Bank Logo" },
  { src: "/image/kotak.png", alt: "Kotak Logo" },
  { src: "/image/CGT.png", alt: "CGT Logo" },
];

// --- SPEED SETTINGS ---
const RESTING_SPEED = 0.005; 
const SCROLL_BOOST_MULTIPLIER = 0.008; 
const MAX_BOOST_SPEED = 0.3; 
const FRICTION = 0.96; 

export default function DynamicImageMarquee() {
  const trackRef = useRef(null);
  const positionRef = useRef(0); 
  const directionRef = useRef(-1); 
  
  const targetSpeedRef = useRef(RESTING_SPEED); 
  const currentSpeedRef = useRef(RESTING_SPEED); 
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;

      if (delta > 0) {
        directionRef.current = -1; 
      } else if (delta < 0) {
        directionRef.current = 1; 
      }

      targetSpeedRef.current = Math.min(Math.abs(delta) * SCROLL_BOOST_MULTIPLIER, MAX_BOOST_SPEED);
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const loop = () => {
      if (targetSpeedRef.current > RESTING_SPEED) {
        targetSpeedRef.current *= FRICTION; 
      } else {
        targetSpeedRef.current = RESTING_SPEED;
      }

      currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.1;
      positionRef.current += directionRef.current * currentSpeedRef.current;

      if (positionRef.current <= -50) {
        positionRef.current += 50;
      } else if (positionRef.current >= 0) {
        positionRef.current -= 50;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${positionRef.current}%)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const ImageBlock = () => (
    <div className="flex items-center justify-around gap-16 md:gap-24 px-8 md:px-12 min-w-max">
      {logoImageData.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          draggable="false"
          // UI CHANGE: Added opacity-40 base to make them sit back in the design, and pop to full color/opacity on hover
          className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer select-none px-4 will-change-filter hover:scale-110"
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden flex flex-col justify-center border-b border-gray-100">
      
      {/* Optional Context Label */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase">
          Powering the modern web
        </p>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative max-w-7xl mx-auto">
        
        

        {/* The moving marquee track */}
        <div className="w-full flex relative z-0">
          <div ref={trackRef} className="flex w-fit will-change-transform">
            <ImageBlock />
            <ImageBlock />
          </div>
        </div>
        
      </div>
    </section>
  );
}