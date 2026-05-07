import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full min-h-screen flex flex-col justify-end pt-32 bg-[#FAFAFA] overflow-hidden text-gray-800 antialiased font-sans">
      
      {/* Embedded Custom Styles */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-2deg); }
        }
        @keyframes float-med {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        @keyframes spin-glow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-slow-reverse { animation: float-slow-reverse 6s ease-in-out infinite; }
        .animate-float-med { animation: float-med 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-spin-glow { animation: spin-glow 15s linear infinite; }
      `}</style>

      {/* ==========================================
          BACKGROUND LAYER (Text & Yellow Star Glow)
          ========================================== */}
      {/* Giant Faded Text */}
      <div className="absolute bottom-120 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none 
                text-[18vw] font-[900] leading-[0.8] tracking-tighter
                text-black opacity-5"> 
        klaimify
      </div>

      


      {/* ==========================================
          FLOATING 3D ASSETS LAYER
          ========================================== */}
      <div className="absolute inset-0 z-10 pointer-events-none max-w-[1400px] mx-auto h-full">
        {/* Main Central Tech Devices */}
        <div className="absolute bottom-[35%] left-1/2 -translate-x-[90%] animate-float-slow z-20 flex items-end justify-center drop-shadow-2xl ">
          {/* Image 1 (Moves Up) */}
          <img 
            src="/image/2.png" 
            alt="PC" 
            className="w-[250px] md:w-[300px] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div className="absolute bottom-[35%] left-1/2 -translate-x-[30%] animate-float-slow-reverse z-20 flex items-end justify-center drop-shadow-2xl ">
          {/* Image 2 (Moves Down) */}
          <img 
            src="/image/3.png" 
            alt="PC" 
            className="w-[350px] md:w-[400px] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.2)]"
          />
        </div>
      </div>

      {/* ==========================================
          WHITE FOOTER CARD 
          ========================================== */}
      <div className="relative z-20 w-full max-w-[1250px] mx-auto bg-white rounded-t-[50px] shadow-[0_-20px_60px_rgba(0,0,0,0.03)] px-10 md:px-20 pt-20 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Explore */}
          <div>
            <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">Industry</a></li>
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">Technology</a></li>
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-2">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2: Learn & Proof */}
          <div>
            <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-6">Learn & Proof</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Follow Us */}
          <div>
            <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-6">Legal</h4>
            <ul className="space-y-4 mb-10">
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] font-medium text-gray-800 hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>

            <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-6">Connect</h4>
            <ul className="space-y-6">
              <li>
                <a href="mailto:support@klaimify.in" className="flex items-start gap-3 group">
                  <svg className="w-5 h-5 text-gray-800 group-hover:text-blue-600 transition-colors mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span className="text-[14px] font-medium text-gray-800 group-hover:text-blue-600 transition-colors">support@klaimify.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-800 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span className="text-[14px] font-medium text-gray-800 leading-relaxed">
                    Cabin 410, Orange Hive, Forth Floor, Mova, Raipur, Chhattisgarh 492001
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-medium text-gray-400">
            © 2026 Assistantly. All Rights Reserved.
          </p>
          <p className="text-[12px] font-medium text-gray-400 flex items-center gap-1">
            Crafted by <strong className="text-gray-800 tracking-wider">Klaimify with ❤️</strong>
          </p>
        </div>
      </div>
      
    </footer>
  );
}