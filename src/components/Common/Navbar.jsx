import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Array to map through links cleanly
const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Industry', path: '/industry' },
  { name: 'Technology', path: '/technology' },
  { name: 'Case Studies', path: '/case-studies' }
];

// Reusable Component for the sliding text hover effect
const AnimatedLink = ({ to, text, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="relative overflow-hidden group inline-flex flex-col justify-center items-center h-5"
  >
    {/* Original Word (Moves Up) */}
    <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[120%] text-sm font-medium leading-none flex items-center h-full">
      {text}
    </span>
    {/* Yellow Word (Slides in from bottom) */}
    <span className="absolute top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-sm font-medium text-[#FFD166] leading-none flex items-center h-full">
      {text}
    </span>
  </Link>
);

// Reusable Hamburger Icon Component
const MenuToggleButton = ({ isOpen, toggle }) => (
  <button 
    onClick={toggle}
    className="flex flex-col space-y-1.5 justify-center w-6 h-6 hover:opacity-80 transition-all z-50 focus:outline-none"
  >
    <span className={`w-full h-[2px] bg-white block rounded-full transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
    <span className={`w-full h-[2px] bg-white block rounded-full transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
  </button>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State to handle the temporary expansion of the desktop menu
  const [forceExpand, setForceExpand] = useState(false);

  // Standard scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listeners to detect when the user starts scrolling again to collapse the forced desktop menu
  useEffect(() => {
    const resetExpand = () => {
      if (forceExpand) setForceExpand(false);
    };
    
    window.addEventListener('wheel', resetExpand, { passive: true });
    window.addEventListener('touchmove', resetExpand, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown'].includes(e.code)) {
        resetExpand();
      }
    });

    return () => {
      window.removeEventListener('wheel', resetExpand);
      window.removeEventListener('touchmove', resetExpand);
      window.removeEventListener('keydown', resetExpand);
    };
  }, [forceExpand]);

  // Determine if the desktop nav should be in its collapsed/shrunk state
  const isCollapsed = isScrolled && !forceExpand;

  return (
    <nav 
      className={`
        fixed left-1/2 -translate-x-1/2 top-4 z-50 
        bg-black/30 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-2xl transition-all duration-500 ease-in-out overflow-hidden
        ${isCollapsed && !isMobileMenuOpen ? 'w-[90%] md:w-[40%] max-w-xl' : 'w-[90%] max-w-7xl'}
        ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-16'}
      `}
    >
      <div className="px-6 flex flex-col w-full">
        
        {/* TOP BAR */}
        <div className="flex justify-between items-center h-16 w-full shrink-0">
          
          {/* --- LEFT SECTION --- */}
          <div className="flex-1 flex items-center justify-start gap-6">
            {/* Mobile Logo: Always visible on mobile, always left */}
            <Link to="/" className="lg:hidden flex-shrink-0 animate-in fade-in duration-500">
              <img 
                src="/image/klamifymainlogowhite.png" 
                alt="Brand Logo" 
                className="h-7 w-auto object-contain" 
              />
            </Link>

            {/* Desktop Logo: Visible when NOT collapsed */}
            {!isCollapsed && (
              <Link to="/" className="hidden lg:flex flex-shrink-0 animate-in fade-in duration-500">
                <img 
                  src="/image/klamifymainlogowhite.png" 
                  alt="Brand Logo" 
                  className="h-7 w-auto object-contain" 
                />
              </Link>
            )}

            {/* Desktop Hamburger: Visible when collapsed (Left side) */}
            {isCollapsed && (
              <div 
                className="hidden lg:flex items-center space-x-3 transition-opacity duration-500 cursor-pointer hover:opacity-80"
                onClick={() => setForceExpand(true)}
              >
                <MenuToggleButton isOpen={false} toggle={(e) => { e.stopPropagation(); setForceExpand(true); }} />
                <span className="text-sm font-medium">Menu</span>
              </div>
            )}
          </div>

          {/* --- MIDDLE SECTION --- */}
          <div className="flex-none flex justify-center items-center">
            {/* Desktop Links: Visible when NOT collapsed */}
            {!isCollapsed && (
              <div className="hidden lg:flex items-center space-x-8 animate-in fade-in zoom-in-95 duration-500">
                {NAV_LINKS.map(link => (
                  <AnimatedLink key={link.name} to={link.path} text={link.name} />
                ))}
              </div>
            )}

            {/* Desktop Centered Logo: Visible when collapsed */}
            {isCollapsed && (
              <Link to="/" className="hidden lg:flex absolute left-1/2 -translate-x-1/2 animate-in fade-in duration-500">
                <img 
                  src="/image/klamifymainlogowhite.png" 
                  alt="Brand Logo" 
                  className="h-6 w-auto object-contain" 
                />
              </Link>
            )}
          </div>

          {/* --- RIGHT SECTION --- */}
          <div className="flex-1 flex justify-end items-center gap-6">
            {/* Desktop Contact Link: Placed on the far right */}
            {!isCollapsed && (
              <div className="hidden lg:block animate-in fade-in duration-500">
                <AnimatedLink to="/contact" text="Contact Us" />
              </div>
            )}

            {/* Mobile Hamburger: Always visible on mobile (Right side) */}
            <div className="lg:hidden flex items-center">
              <MenuToggleButton isOpen={isMobileMenuOpen} toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </div>
          
        </div>

        {/* --- EXPANDED MOBILE MENU SECTION --- */}
        <div className={`lg:hidden flex flex-col items-end space-y-6 w-full transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 py-6' : 'opacity-0 h-0 pointer-events-none'}`}>
          {NAV_LINKS.map(link => (
            <AnimatedLink 
              key={link.name} 
              to={link.path} 
              text={link.name} 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
          ))}
          <AnimatedLink 
            to="/contact" 
            text="Contact Us" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
        </div>
        
      </div>
    </nav>
  );
}